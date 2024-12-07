#!/bin/bash

# Define Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting Pterodactyl Panel Installation on Ubuntu 20.04...${NC}"

# Update System and Install Dependencies
echo -e "${GREEN}Updating system and installing required dependencies...${NC}"
apt update && apt upgrade -y
apt install -y curl wget unzip tar git composer nginx mysql-server php php-cli php-mysql php-bcmath php-ctype php-json php-opcache php-mbstring php-tokenizer php-xml php-curl php-zip certbot python3-certbot-nginx

# Configure MySQL
echo -e "${GREEN}Configuring MySQL database...${NC}"
read -p "Enter MySQL root password: " rootpassword
read -p "Enter a name for the Pterodactyl database: " dbname
read -p "Enter a username for the Pterodactyl database: " dbuser
read -p "Enter a password for the Pterodactyl database user: " dbpass

mysql -u root -p$rootpassword -e "CREATE DATABASE $dbname;"
mysql -u root -p$rootpassword -e "CREATE USER '$dbuser'@'127.0.0.1' IDENTIFIED BY '$dbpass';"
mysql -u root -p$rootpassword -e "GRANT ALL PRIVILEGES ON $dbname.* TO '$dbuser'@'127.0.0.1';"
mysql -u root -p$rootpassword -e "FLUSH PRIVILEGES;"

# Download and Install Pterodactyl Panel
echo -e "${GREEN}Downloading and setting up Pterodactyl Panel...${NC}"
mkdir -p /var/www/pterodactyl
cd /var/www/pterodactyl
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
rm panel.tar.gz

# Install Composer Dependencies
echo -e "${GREEN}Installing Composer dependencies...${NC}"
composer install --no-dev --optimize-autoloader

# Set Up Environment
echo -e "${GREEN}Configuring Pterodactyl environment...${NC}"
cp .env.example .env
php artisan key:generate --force
php artisan p:environment:setup \
    --author_email=admin@example.com \
    --app_url=http://yourdomain.com \
    --database_driver=mysql \
    --database_host=127.0.0.1 \
    --database_port=3306 \
    --database_name=$dbname \
    --database_username=$dbuser \
    --database_password=$dbpass \
    --queue_driver=database \
    --cache_driver=file \
    --session_driver=database

php artisan migrate --force

# Set Permissions
echo -e "${GREEN}Setting up file permissions...${NC}"
chown -R www-data:www-data /var/www/pterodactyl
chmod -R 755 /var/www/pterodactyl/storage /var/www/pterodactyl/bootstrap/cache

# Configure Nginx
echo -e "${GREEN}Configuring Nginx...${NC}"
cat > /etc/nginx/sites-available/pterodactyl <<EOL
server {
    listen 80;
    server_name yourdomain.com;

    root /var/www/pterodactyl/public;

    index index.php;

    location / {
        try_files \$uri \$uri/ /index.php?\$query_string;
    }

    location ~ \.php\$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
EOL

ln -s /etc/nginx/sites-available/pterodactyl /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx

# Install SSL Certificate
echo -e "${GREEN}Installing SSL certificate...${NC}"
certbot --nginx -d yourdomain.com

# Finalize Installation
echo -e "${GREEN}Pterodactyl Panel installed successfully!${NC}"
echo -e "${GREEN}Access your panel at http://yourdomain.com or https://yourdomain.com${NC}"
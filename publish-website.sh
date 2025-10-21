#!/bin/bash

sudo ls
bun run build:website
sudo rm -rf /var/www/liquid-web
sudo mv -f packages/website/dist /var/www/liquid-web
sudo chown -R www-data:www-data /var/www/liquid-web
sudo service nginx restart

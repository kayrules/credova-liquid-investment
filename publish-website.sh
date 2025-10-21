#!/bin/bash

bun run build:website
sudo mv -rf packages/website/dist /var/www/liquid-website
sudo chown -R www-data:www-data /var/www/liquid-website
sudo service nginx restart

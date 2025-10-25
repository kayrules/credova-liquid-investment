#!/bin/bash

sudo ls
bun run build:console
sudo rm -rf /var/www/liquid-console
sudo mv -f packages/console/dist /var/www/liquid-console
sudo chown -R www-data:www-data /var/www/liquid-console
sudo service nginx restart

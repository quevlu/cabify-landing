#!/bin/bash

echo ''
echo '----- Stoping Images'
echo ''

docker stop $(docker ps -qa)

echo ''
echo '----- Building Images'
echo ''

cd laradock && cp env-example .env && docker-compose up -d nginx mysql

echo ''
echo '----- Building Laravel App'
echo ''

cd ../app/ && cp .env.example .env

cd ../laradock

sleep 5s # Wait for the images

docker-compose exec workspace composer install

docker-compose exec workspace npm install

docker-compose exec workspace php artisan migrate:fresh --seed
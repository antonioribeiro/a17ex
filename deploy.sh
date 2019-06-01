if [ ! -f artisan ]
then
    echo "The artisan command is missing"
    exit
fi

#git reset --hard HEAD
#git pull origin production
#composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev
#echo "" | sudo -S service php7.3-fpm reload

php artisan cache:clear
php artisan config:cache
php artisan view:clear
php artisan route:cache
php artisan migrate --force

npm run dev
git add public/*
git commit -m "Compile to production"
php artisan version:absorb
git add config/version.yml
git commit -m "Update version"
git push origin master
git push origin master:staging

cd ~/production-react
npm run build:prod

rm -rf ~/../var/www/production-react/html
mv ~/production-react/build ~/../var/www/production-react/html

# foodhub
##Инструкция как развернуть базу  
1. Скачать MySQL с офф сайта https://dev.mysql.com/downloads/installer/  
2. Установить MySQL, при установке указать порт 3306 и пароль 'root' для пользователя 'root'  
2.1 sudo apt install mysql-server  
2.2 sudo apt install mysql-client  

3. Создать базу 'foodhubdb' (mysql -u root -p)  
3.1 mysql -u root -p  
3.2 create database foodhubdb;  

4. sudo npm install -g sequelize
4. sudo npm install -g sequelize-cli
5. sudo npm install -g mysql

3. Установить зависимости - в консоли перейти в папку server и сделать npm install 
4. Сделать sequelize db:migrate  
5. Сделать sequelize db:seed:all  
...
6. Profit!!  

# foodhub
##Инструкция как развернуть базу  
1. Скачать MySQL с офф сайта https://dev.mysql.com/downloads/installer/  
2. Установить MySQL, при установке указать порт 3306 и пароль 'root' для пользователя 'root'  
3. Создать базу 'foodhubdb'  
3. Установить зависимости - в консоли перейти в папку server и сделать npm install (возможно ещё npm install sequelize -g, я не помню)  
4. Сделать sequelize db:migrate  
5. Сделать sequelize db:seed:all  
...
6. Profit!!  

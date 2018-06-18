1. Download and unzip

2. Paste folder in xxamp/htdocs root

3. a) Create database named phonebook in http://localhost/phpmyadmin/db_sql.php?db=phonebook;
   b) Paste this in SQL to create table:

    CREATE TABLE `telephone_numbers` (

      `telephone_number_id` int(10) NOT NULL AUTO_INCREMENT,
      `first_name` varchar(255) NOT NULL,
      `last_name` varchar(255) NOT NULL,
      `telephone_number` varchar(255) NOT NULL,
      `status` tinyint(2) NOT NULL,
      PRIMARY KEY (`telephone_number_id`),
      KEY `first_name` (`first_name`),
      KEY `last_name` (`last_name`),
      KEY `telephone_number` (`telephone_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


4. go to url: http://localhost/phonebook/Phonebook-SQL

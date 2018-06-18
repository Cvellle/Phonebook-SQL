
/*!40000 DROP DATABASE IF EXISTS `phonebook`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `phonebook` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `phonebook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

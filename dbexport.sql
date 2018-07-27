-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: say_db_dev
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `read` tinyint(4) DEFAULT NULL,
  `write` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (5,'CLIENT','Permet d\'accéder au module client','2018-07-24 07:53:25','2018-07-24 07:53:25',1,0),(6,'CLIENT_WRITE','Permet d\'accéder au module client','2018-07-24 08:00:11','2018-07-24 08:00:11',0,1),(7,'CLIENT_READ','Permet d\'accéder au module client','2018-07-24 08:00:27','2018-07-24 08:00:27',1,0),(8,'PROSPECT_READ','Permet d\'accéder au module client','2018-07-24 08:00:38','2018-07-24 08:00:38',1,0),(9,'PROSPECT_WRITE','Permet d\'accéder au module client','2018-07-24 08:00:46','2018-07-24 08:00:46',1,0);
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `provider` int(11) DEFAULT NULL,
  `range` int(11) DEFAULT NULL,
  `coefficient` double DEFAULT NULL,
  `Code_VAT` int(11) DEFAULT NULL,
  `selling_price` double DEFAULT NULL,
  `purchasing_price` double DEFAULT NULL,
  `tax_free_rate` double DEFAULT NULL,
  `CUMP` double DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `color` int(11) DEFAULT NULL,
  `group` int(11) DEFAULT NULL,
  `season` int(11) DEFAULT NULL,
  `label` tinyint(1) DEFAULT NULL,
  `first_delivery` datetime DEFAULT NULL,
  `creation_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Robe','2018-07-27 09:22:14','2018-07-27 09:22:14',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'Jupe','2018-07-27 09:22:30','2018-07-27 09:22:30',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'Jupe','2018-07-27 09:22:36','2018-07-27 09:22:36',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'Pantalon','2018-07-27 09:43:50','2018-07-27 09:43:50',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'Pantalon','2018-07-27 09:43:52','2018-07-27 09:43:52',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `profiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (12,'Manager','2018-07-23 15:24:27','2018-07-23 15:24:27'),(13,'Risk manager','2018-07-24 07:46:06','2018-07-24 07:46:06');
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rel_profile_permissions`
--

DROP TABLE IF EXISTS `rel_profile_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `rel_profile_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `profile` int(11) DEFAULT NULL,
  `permission` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rel_profile_permissions`
--

LOCK TABLES `rel_profile_permissions` WRITE;
/*!40000 ALTER TABLE `rel_profile_permissions` DISABLE KEYS */;
INSERT INTO `rel_profile_permissions` VALUES (1,1,2,'2018-07-24 08:40:16','2018-07-24 08:40:16'),(2,12,5,'2018-07-24 08:47:09','2018-07-24 08:47:09'),(3,12,6,'2018-07-24 08:47:14','2018-07-24 08:47:14');
/*!40000 ALTER TABLE `rel_profile_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `SequelizeMeta_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20180723140418-create-user.js'),('20180723140614-create-profile.js'),('20180723140911-create-rel-profile-permission.js'),('20180723140944-create-permission.js'),('20180727090524-create-product.js'),('20180727123450-Modif.js'),('20180727124650-modif.js'),('20180727132019-modif.js'),('20180727132019-modif1.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `surname` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `profile` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test5@yahoo.fr','test5','test5','$2a$12$qoo4bkboRN4b73PBQ./tdui.vwvRVWofdG74S6TBbBeKPP.yC5kvC',NULL,'2018-07-23 14:31:57','2018-07-23 14:31:57'),(2,'test1@yahoo.fr','test1','test1','$2a$12$IZ0zoLV5XyGnDx1b.3PuIO.9u.cIlT99AICFa1e1zntTQQghjrODO',NULL,'2018-07-23 14:50:09','2018-07-23 14:50:09'),(3,'test1@yahoo.fr','test1','test1','$2a$12$Y5GAnEdEVRXYpChgaqMFdec9AgtXrmvcTtY4aTxJlOw/gClxctlH2',1,'2018-07-23 14:53:22','2018-07-23 14:53:22'),(4,'test2@yahoo.fr','test12','test12','$2a$12$tfiasQGg.a7SNpiKugG2muRBbr658mAjKHA0C8Ok7CKAUYR84kNYm',12,'2018-07-23 15:25:04','2018-07-23 15:25:04'),(5,'test2@yahoo.fr','test12','test12','$2a$12$F39y8xllYZKjnwWH64kUP.OYR68UW8zTx3EV7qxm/2Oe/80eNZkqi',NULL,'2018-07-23 15:49:52','2018-07-23 15:49:52'),(6,'test2@yahoo.fr','test12','test12','$2a$12$HUZAJ8aJa4ngj6ten6NniuWEAVIdIi0Oasuc6o4fnH.Dz/H0JLBlS',NULL,'2018-07-23 15:50:58','2018-07-23 15:50:58'),(7,'test2@yahoo.fr','test12','test12','$2a$12$7T8eHLiZaJBmT40uj37XMOKsLQrGU8P3ReJKEDM33P4yDAmwghIF6',12,'2018-07-23 15:52:10','2018-07-23 15:52:10'),(8,'test2@yahoo.fr','test12','test12','$2a$12$LUJg7FCPTWwhoDa5vU/3qenWUthgwWjANFvJpYA.DyXgR/R6qOLUm',12,'2018-07-24 07:16:09','2018-07-24 07:16:09');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-27 16:30:49

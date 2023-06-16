CREATE DATABASE  IF NOT EXISTS `shinobi_store` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `shinobi_store`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: shinobi_store
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `fav_game`
--

DROP TABLE IF EXISTS `fav_game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fav_game` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `gameId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_11bc1a2baf68527425696106921` (`userId`),
  KEY `FK_df021a65dd2e6f6a241809364e1` (`gameId`),
  CONSTRAINT `FK_11bc1a2baf68527425696106921` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_df021a65dd2e6f6a241809364e1` FOREIGN KEY (`gameId`) REFERENCES `game` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fav_game`
--

LOCK TABLES `fav_game` WRITE;
/*!40000 ALTER TABLE `fav_game` DISABLE KEYS */;
/*!40000 ALTER TABLE `fav_game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `plataforma` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `precio` int NOT NULL,
  `image` varchar(255) NOT NULL,
  `image_port` varchar(255) NOT NULL,
  `descuento` int NOT NULL,
  `n_stock` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` VALUES (1,'The Legend of Zelda: Breath of the Wild','Juego de aventuras y acción en mundo abierto','Nintendo Switch','Aventuras',60,'https://gaming-cdn.com/images/products/2616/616x353/the-legend-of-zelda-breath-of-the-wild-switch-switch-juego-nintendo-eshop-europe-cover.jpg?v=1649856929','https://gaming-cdn.com/img/products/2616/pcover/2616.jpg?v=1649856929',20,7),(2,'FIFA 23','Juego de fútbol con gráficos mejorados y nuevas características','PlayStation','Deportes',70,'https://gaming-cdn.com/images/products/13351/616x353/fifa-23-pc-juego-steam-cover.jpg?v=1671541501','https://gaming-cdn.com/img/products/10545/pcover/10545.jpg?v=1665157647',12,2),(3,'The Witcher 3: Wild Hunt','Un juego de rol y acción ambientado en un mundo abierto','PlayStation','RPG',60,'https://gaming-cdn.com/images/products/268/616x353/the-witcher-3-wild-hunt-pc-juego-gog-com-cover.jpg?v=1650526691','https://gaming-cdn.com/img/products/268/pcover/268.jpg?v=1650526691',55,0),(4,'Assassin\'s Creed Valhalla','Un juego de acción y aventura ambientado en la era vikinga','PlayStation','Aventura',70,'https://gaming-cdn.com/images/products/6147/616x353/assassin-s-creed-valhalla-pc-juego-ubisoft-connect-europe-cover.jpg?v=1650550345','https://gaming-cdn.com/img/products/6147/pcover/6147.jpg?v=1650550345',33,0),(5,'Red Dead Redemption 2','Un juego de acción y aventura en un mundo abierto del salvaje oeste','PlayStation','Acción',50,'https://gaming-cdn.com/images/products/5679/616x353/red-dead-redemption-2-pc-juego-rockstar-cover.jpg?v=1647026658','https://gaming-cdn.com/img/products/5679/pcover/5679.jpg?v=1647026658',25,0),(6,'Call of Duty: Modern Warfare','Un juego de disparos en primera persona con modo multijugador','Xbox','Shooter',60,'https://gaming-cdn.com/images/products/4394/616x353/call-of-duty-modern-warfare-pc-juego-cover.jpg?v=1674152565','https://gaming-cdn.com/img/products/5766/pcover/5766.jpg?v=1651672175',75,0),(7,'The Last of Us Part II','Una aventura postapocalíptica llena de acción y emociones.','PlayStation','Acción y aventura',60,'https://gaming-cdn.com/images/products/6215/616x353/the-last-of-us-part-ii-pc-juego-cover.jpg?v=1666694210','https://gaming-cdn.com/img/products/6215/pcover/1920x620/6215.jpg?v=1666694210',10,0),(8,'Cyberpunk 2077','Sumérgete en un futuro distópico y vive una historia de ciencia ficción.','PC','RPG',50,'https://gaming-cdn.com/images/products/840/616x353/cyberpunk-2077-pc-juego-gog-com-cover.jpg?v=1663862900','https://gaming-cdn.com/img/products/840/pcover/1920x620/840.jpg?v=1663862900',25,0),(9,'Super Mario Odyssey','Únete a Mario en una aventura por diversos reinos en búsqueda de la princesa Peach.','Nintendo Switch','Plataformas',60,'https://gaming-cdn.com/images/products/2618/616x353/super-mario-odyssey-switch-switch-juego-nintendo-eshop-europe-cover.jpg?v=1649857014','https://gaming-cdn.com/img/products/2618/pcover/1920x620/2618.jpg?v=1649857014',5,0),(10,'Assassin\'s Creed Odyssey','Explora la antigua Grecia y conviértete en un legendario guerrero espartano.','Xbox','Acción y aventura',40,'https://gaming-cdn.com/images/products/2648/616x353/assassin-s-creed-odyssey-pc-juego-ubisoft-connect-europe-cover.jpg?v=1674645635','https://gaming-cdn.com/img/products/2648/pcover/1920x620/2648.jpg?v=1674645635',15,1),(11,'Battlefield 2042','Participa en épicas batallas multijugador en un conflicto global en el futuro.','PlayStation','Disparos',70,'https://gaming-cdn.com/images/products/6690/616x353/battlefield-2042-pc-juego-origin-cover.jpg?v=1644708475','https://gaming-cdn.com/img/products/6690/pcover/1920x620/6690.jpg?v=1644708475',20,0),(12,'Animal Crossing: New Horizons','Crea tu propia isla paradisíaca y disfruta de una vida relajada junto a tus amigos animales.','Nintendo Switch','Simulación',50,'https://gaming-cdn.com/images/products/9957/616x353/animal-crossing-new-horizons-happy-home-paradise-switch-switch-juego-nintendo-eshop-europe-cover.jpg?v=1666177684','https://gaming-cdn.com/img/products/4809/pcover/1920x620/4809.jpg?v=1650529843',8,0);
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `my_game`
--

DROP TABLE IF EXISTS `my_game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `my_game` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(255) NOT NULL,
  `userId` int DEFAULT NULL,
  `gameId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_c4e61a6b60135f4e67338cf59ba` (`userId`),
  KEY `FK_af47dade0761c02273ef4003f55` (`gameId`),
  CONSTRAINT `FK_af47dade0761c02273ef4003f55` FOREIGN KEY (`gameId`) REFERENCES `game` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_c4e61a6b60135f4e67338cf59ba` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `my_game`
--

LOCK TABLES `my_game` WRITE;
/*!40000 ALTER TABLE `my_game` DISABLE KEYS */;
/*!40000 ALTER TABLE `my_game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(255) NOT NULL,
  `activo` tinyint NOT NULL DEFAULT '1',
  `gameId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_c1526b4989b1d8b667fcd92966` (`codigo`),
  KEY `FK_4861daba7e0848535e480d10d6d` (`gameId`),
  CONSTRAINT `FK_4861daba7e0848535e480d10d6d` FOREIGN KEY (`gameId`) REFERENCES `game` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,'GWQY-M2PD-1RB4-G9KY',0,1),(2,'LEFB-PYL7-OVDS-YJ1R',0,1),(3,'RUAD-97PO-30Z2-7G5I',0,1),(4,'GI2S-1LNP-GVEY-55CT',0,1),(5,'H9MQ-TV6I-KH6Z-3PWK',0,1),(6,'YGE9-NESF-1KXA-G1TP',0,1),(7,'NNSI-X7GD-NU0F-O4BD',0,1),(8,'5SBZ-XKIG-642Q-YMW2',0,10),(9,'R66J-0ILK-KG8E-6G6F',1,1),(10,'6ASS-JWKO-PFSS-X29S',1,1),(11,'Y209-FPZ9-99U6-RD8F',1,10),(12,'9BH9-VMZW-NL7L-GG18',1,10);
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta`
--

DROP TABLE IF EXISTS `tarjeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarjeta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `n_tarjeta` varchar(255) NOT NULL,
  `last_digits` varchar(4) DEFAULT NULL,
  `cvv` int NOT NULL,
  `f_caducidad` varchar(5) NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_19ddc0a7c7e69b11b93fcc42d1c` (`userId`),
  CONSTRAINT `FK_19ddc0a7c7e69b11b93fcc42d1c` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta`
--

LOCK TABLES `tarjeta` WRITE;
/*!40000 ALTER TABLE `tarjeta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `pass_token` varchar(255) DEFAULT NULL,
  `sysadmin` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`),
  UNIQUE KEY `IDX_a854e557b1b14814750c7c7b0c` (`token`),
  UNIQUE KEY `IDX_38fe908a300ea496911e56c405` (`pass_token`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'sysmaster','shinobistore.help@gmail.com','$2b$10$G6MuVXoNsuGxrBrXw1i7Nu7JH5HvFBeF7S9yGfU1MTXfwNwnTBd5C',NULL,NULL,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-16 18:10:38

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
  KEY `FK_df021a65dd2e6f6a241809364e1` (`gameId`),
  KEY `FK_11bc1a2baf68527425696106921` (`userId`),
  CONSTRAINT `FK_11bc1a2baf68527425696106921` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_df021a65dd2e6f6a241809364e1` FOREIGN KEY (`gameId`) REFERENCES `game` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fav_game`
--

LOCK TABLES `fav_game` WRITE;
/*!40000 ALTER TABLE `fav_game` DISABLE KEYS */;
INSERT INTO `fav_game` VALUES (1,1,1),(2,1,1),(3,NULL,NULL),(4,NULL,NULL),(5,NULL,NULL);
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` VALUES (1,'The Legend of Zelda: Breath of the Wild','Juego de aventuras y acción en mundo abierto','Nintendo Switch','Aventuras',60,'https://gaming-cdn.com/images/products/2616/616x353/the-legend-of-zelda-breath-of-the-wild-switch-switch-juego-nintendo-eshop-europe-cover.jpg?v=1649856929','https://gaming-cdn.com/img/products/2616/pcover/2616.jpg?v=1649856929',20),(2,'FIFA 23','Juego de fútbol con gráficos mejorados y nuevas características','PlayStation 5','Deportes',70,'https://gaming-cdn.com/images/products/13351/616x353/fifa-23-pc-juego-steam-cover.jpg?v=1671541501','https://gaming-cdn.com/img/products/10545/pcover/10545.jpg?v=1665157647',12),(3,'The Witcher 3: Wild Hunt','Un juego de rol y acción ambientado en un mundo abierto','PlayStation 4','RPG',60,'https://gaming-cdn.com/images/products/268/616x353/the-witcher-3-wild-hunt-pc-juego-gog-com-cover.jpg?v=1650526691','https://gaming-cdn.com/img/products/268/pcover/268.jpg?v=1650526691',55),(6,'Assassin\'s Creed Valhalla','Un juego de acción y aventura ambientado en la era vikinga','PlayStation 5','Aventura',70,'https://gaming-cdn.com/images/products/6147/616x353/assassin-s-creed-valhalla-pc-juego-ubisoft-connect-europe-cover.jpg?v=1650550345','https://gaming-cdn.com/img/products/6147/pcover/6147.jpg?v=1650550345',33),(12,'Red Dead Redemption 2','Un juego de acción y aventura en un mundo abierto del salvaje oeste','PlayStation 4','Acción',50,'https://gaming-cdn.com/images/products/5679/616x353/red-dead-redemption-2-pc-juego-rockstar-cover.jpg?v=1647026658','https://gaming-cdn.com/img/products/5679/pcover/5679.jpg?v=1647026658',25),(13,'Call of Duty: Modern Warfare','Un juego de disparos en primera persona con modo multijugador','Xbox Series X','Shooter',60,'https://gaming-cdn.com/images/products/4394/616x353/call-of-duty-modern-warfare-pc-juego-cover.jpg?v=1674152565','https://gaming-cdn.com/img/products/5766/pcover/5766.jpg?v=1651672175',75),(20,'The Last of Us Part II','Una aventura postapocalíptica llena de acción y emociones.','PlayStation 4','Acción y aventura',60,'https://gaming-cdn.com/images/products/6215/616x353/the-last-of-us-part-ii-pc-juego-cover.jpg?v=1666694210','https://gaming-cdn.com/img/products/6215/pcover/1920x620/6215.jpg?v=1666694210',10),(21,'Cyberpunk 2077','Sumérgete en un futuro distópico y vive una historia de ciencia ficción.','PC','RPG',50,'https://gaming-cdn.com/images/products/840/616x353/cyberpunk-2077-pc-juego-gog-com-cover.jpg?v=1663862900','https://gaming-cdn.com/img/products/840/pcover/1920x620/840.jpg?v=1663862900',25),(22,'Super Mario Odyssey','Únete a Mario en una aventura por diversos reinos en búsqueda de la princesa Peach.','Nintendo Switch','Plataformas',60,'https://gaming-cdn.com/images/products/2618/616x353/super-mario-odyssey-switch-switch-juego-nintendo-eshop-europe-cover.jpg?v=1649857014','https://gaming-cdn.com/img/products/2618/pcover/1920x620/2618.jpg?v=1649857014',5),(23,'Assassin\'s Creed Odyssey','Explora la antigua Grecia y conviértete en un legendario guerrero espartano.','Xbox One','Acción y aventura',40,'https://gaming-cdn.com/images/products/2648/616x353/assassin-s-creed-odyssey-pc-juego-ubisoft-connect-europe-cover.jpg?v=1674645635','https://gaming-cdn.com/img/products/2648/pcover/1920x620/2648.jpg?v=1674645635',15),(24,'Battlefield 2042','Participa en épicas batallas multijugador en un conflicto global en el futuro.','PlayStation 5','Disparos',70,'https://gaming-cdn.com/images/products/6690/616x353/battlefield-2042-pc-juego-origin-cover.jpg?v=1644708475','https://gaming-cdn.com/img/products/6690/pcover/1920x620/6690.jpg?v=1644708475',20),(25,'Animal Crossing: New Horizons','Crea tu propia isla paradisíaca y disfruta de una vida relajada junto a tus amigos animales.','Nintendo Switch','Simulación',50,'https://gaming-cdn.com/images/products/9957/616x353/animal-crossing-new-horizons-happy-home-paradise-switch-switch-juego-nintendo-eshop-europe-cover.jpg?v=1666177684','https://gaming-cdn.com/img/products/4809/pcover/1920x620/4809.jpg?v=1650529843',8);
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'maria','maria@gmail.com','1234'),(2,'mari','mari@gmail.com','1234');
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

-- Dump completed on 2023-05-23 23:28:28

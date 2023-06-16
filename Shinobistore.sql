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
INSERT INTO `game` VALUES (1,'The Legend of Zelda: Breath of the Wild','Juego de aventuras y acción en mundo abierto','Nintendo Switch','Aventuras',60,'https://gaming-cdn.com/images/products/2616/616x353/the-legend-of-zelda-breath-of-the-wild-switch-switch-juego-nintendo-eshop-europe-cover.jpg?v=1649856929','https://gaming-cdn.com/img/products/2616/pcover/2616.jpg?v=1649856929',20,14),(2,'FIFA 23','Juego de fútbol con gráficos mejorados y nuevas características','PlayStation','Deportes',70,'https://gaming-cdn.com/images/products/13351/616x353/fifa-23-pc-juego-steam-cover.jpg?v=1671541501','https://gaming-cdn.com/img/products/10545/pcover/10545.jpg?v=1665157647',12,3),(3,'The Witcher 3: Wild Hunt','Un juego de rol y acción ambientado en un mundo abierto','PlayStation','RPG',60,'https://gaming-cdn.com/images/products/268/616x353/the-witcher-3-wild-hunt-pc-juego-gog-com-cover.jpg?v=1650526691','https://gaming-cdn.com/img/products/268/pcover/268.jpg?v=1650526691',55,13),(4,'Assassin\'s Creed Valhalla','Un juego de acción y aventura ambientado en la era vikinga','PlayStation','Aventura',70,'https://gaming-cdn.com/images/products/6147/616x353/assassin-s-creed-valhalla-pc-juego-ubisoft-connect-europe-cover.jpg?v=1650550345','https://gaming-cdn.com/img/products/6147/pcover/6147.jpg?v=1650550345',33,6),(5,'Red Dead Redemption 2','Un juego de acción y aventura en un mundo abierto del salvaje oeste','PlayStation','Acción',50,'https://gaming-cdn.com/images/products/5679/616x353/red-dead-redemption-2-pc-juego-rockstar-cover.jpg?v=1647026658','https://gaming-cdn.com/img/products/5679/pcover/5679.jpg?v=1647026658',25,4),(6,'Call of Duty: Modern Warfare','Un juego de disparos en primera persona con modo multijugador','Xbox','Shooter',60,'https://gaming-cdn.com/images/products/4394/616x353/call-of-duty-modern-warfare-pc-juego-cover.jpg?v=1674152565','https://gaming-cdn.com/img/products/5766/pcover/5766.jpg?v=1651672175',75,0),(7,'The Last of Us Part II','Una aventura postapocalíptica llena de acción y emociones.','PlayStation','Acción y aventura',60,'https://gaming-cdn.com/images/products/6215/616x353/the-last-of-us-part-ii-pc-juego-cover.jpg?v=1666694210','https://gaming-cdn.com/img/products/6215/pcover/1920x620/6215.jpg?v=1666694210',10,14),(8,'Cyberpunk 2077','Sumérgete en un futuro distópico y vive una historia de ciencia ficción.','PC','RPG',50,'https://gaming-cdn.com/images/products/840/616x353/cyberpunk-2077-pc-juego-gog-com-cover.jpg?v=1663862900','https://gaming-cdn.com/img/products/840/pcover/1920x620/840.jpg?v=1663862900',25,0),(9,'Super Mario Odyssey','Únete a Mario en una aventura por diversos reinos en búsqueda de la princesa Peach.','Nintendo Switch','Plataformas',60,'https://gaming-cdn.com/images/products/2618/616x353/super-mario-odyssey-switch-switch-juego-nintendo-eshop-europe-cover.jpg?v=1649857014','https://gaming-cdn.com/img/products/2618/pcover/1920x620/2618.jpg?v=1649857014',5,3),(10,'Assassin\'s Creed Odyssey','Explora la antigua Grecia y conviértete en un legendario guerrero espartano.','Xbox','Acción y aventura',40,'https://gaming-cdn.com/images/products/2648/616x353/assassin-s-creed-odyssey-pc-juego-ubisoft-connect-europe-cover.jpg?v=1674645635','https://gaming-cdn.com/img/products/2648/pcover/1920x620/2648.jpg?v=1674645635',15,1),(11,'Battlefield 2042','Participa en épicas batallas multijugador en un conflicto global en el futuro.','PlayStation','Disparos',70,'https://gaming-cdn.com/images/products/6690/616x353/battlefield-2042-pc-juego-origin-cover.jpg?v=1644708475','https://gaming-cdn.com/img/products/6690/pcover/1920x620/6690.jpg?v=1644708475',20,2),(12,'Animal Crossing: New Horizons','Crea tu propia isla paradisíaca y disfruta de una vida relajada junto a tus amigos animales.','Nintendo Switch','Simulación',50,'https://gaming-cdn.com/images/products/9957/616x353/animal-crossing-new-horizons-happy-home-paradise-switch-switch-juego-nintendo-eshop-europe-cover.jpg?v=1666177684','https://gaming-cdn.com/img/products/4809/pcover/1920x620/4809.jpg?v=1650529843',8,6),(13,'God of War','Un juego de acción y aventura basado en la mitología griega','PlayStation','Acción y aventura',60,'https://gaming-cdn.com/images/products/7325/616x353/god-of-war-pc-juego-steam-cover.jpg?v=1683627071','https://gaming-cdn.com/img/products/7325/pcover/7325.jpg?v=1683627071',15,1),(14,'Minecraft','Un juego de construcción y aventura en un mundo generado proceduralmente','PC','Aventura',30,'https://gaming-cdn.com/images/products/442/616x353/minecraft-java-y-bedrock-edition-pc-juego-cover.jpg?v=1674156218','https://gaming-cdn.com/img/products/2369/pcover/1920x620/2369.jpg?v=1677838142',40,15),(15,'Pokémon Sword','Un juego de rol en el que los jugadores capturan y entrenan criaturas llamadas Pokémon','Nintendo Switch','RPG',50,'https://gaming-cdn.com/images/products/4075/616x353/pokemon-espada-switch-sword-switch-juego-nintendo-eshop-europe-cover.jpg?v=1650449003','https://gaming-cdn.com/img/products/4075/pcover/1920x620/4075.jpg?v=1650449003',30,0),(17,'Super Smash Bros. Ultimate','Un juego de lucha con personajes famosos de diversas franquicias de videojuegos','Nintendo Switch','Lucha',60,'https://gaming-cdn.com/images/products/3000/616x353/super-smash-bros-ultimate-switch-switch-juego-nintendo-eshop-europe-cover.jpg?v=1649860652','https://gaming-cdn.com/img/products/3000/pcover/1920x620/3000.jpg?v=1649860652',20,3),(18,'Uncharted 5','Una emocionante aventura de acción en tercera persona','PlayStation','Acción y aventura',50,'https://gaming-cdn.com/images/products/13506/616x353/uncharted-5-pc-juego-cover.jpg?v=1675097346','https://gaming-cdn.com/img/products/13506/pcover/1920x620/13506.jpg?v=1675097346',12,1),(20,'Final Fantasy VII Remake','Un juego de rol y acción que recrea el clásico de PlayStation','PlayStation','RPG',60,'https://gaming-cdn.com/images/products/5913/616x353/final-fantasy-vii-remake-intergrade-pc-juego-steam-cover.jpg?v=1655469584','https://gaming-cdn.com/img/products/5913/pcover/1920x620/5913.jpg?v=1655469584',18,0),(21,'Super Mario 3D World + Bowser\'s Fury','Únete a Mario en una aventura 3D en el mundo de los gatos','Nintendo Switch','Plataformas',50,'https://gaming-cdn.com/images/products/7519/616x353/super-mario-3d-world-bowser-s-fury-switch-switch-juego-nintendo-eshop-europe-cover.jpg?v=1650619085','https://gaming-cdn.com/img/products/7519/pcover/1920x620/7519.jpg?v=1650619085',10,1),(22,'The Elder Scrolls V: Skyrim','Un juego de rol épico con un vasto mundo para explorar','PlayStation','RPG',40,'https://gaming-cdn.com/images/products/146/616x353/the-elder-scrolls-v-skyrim-pc-juego-steam-europe-cover.jpg?v=1661270991','https://gaming-cdn.com/img/products/146/pcover/1920x620/146.jpg?v=1661270991',30,2),(24,'Tom Clancy\'s Rainbow Six Siege','Un juego de disparos táctico en equipo','Xbox','Shooter',50,'https://gaming-cdn.com/images/products/406/616x353/tom-clancy-s-rainbow-six-siege-pc-juego-ubisoft-connect-europe-cover.jpg?v=1649421231','https://gaming-cdn.com/img/products/406/pcover/1920x620/406.jpg?v=1649421231',35,3);
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
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (13,'Y05Q-82GB-1DVK-7ODM',1,1),(14,'UU7H-V0AX-IEQP-NYQP',1,1),(15,'JCI6-GGNC-BZOS-1C6V',1,1),(16,'X6IJ-EVC8-GICI-Y7M4',1,1),(17,'SE4D-9214-AXZZ-MLB9',1,1),(18,'RPYC-BXDK-UG1L-XOFI',1,1),(19,'P675-YIR6-WPF7-G75Z',1,1),(20,'HF7T-PKXH-91CU-42CG',1,1),(21,'3IRS-10BM-VM32-FDJ7',1,2),(22,'3ZTU-LZ5R-EPIP-JUXH',1,2),(23,'I7YL-VL4Z-7CAN-8NAR',1,2),(24,'1A53-PT4W-3F6N-KEPE',1,3),(25,'7ONI-W1WA-HLV5-T0ZH',1,3),(26,'RKTK-BOHG-U6I4-8GMY',1,4),(27,'6OHI-VAQY-VTZV-U721',1,4),(28,'DJWN-99Q8-D8OC-B7DK',1,4),(29,'6BET-3U43-1MOZ-F0WP',1,4),(30,'RJWX-F60Y-YWB1-X9X0',1,4),(31,'4X4O-WESJ-SSBN-WIZM',1,4),(32,'MYKJ-A7LZ-M1L7-HEGH',1,5),(33,'NHBG-RWDJ-K1CE-3EDI',1,5),(34,'1YII-HVPL-M8I5-PT8D',1,5),(35,'1ZQ8-D0AU-E0IX-YQPU',1,5),(36,'8PY3-S171-M5WW-78LM',1,7),(37,'WNHI-W5PW-4EH3-C7BZ',1,7),(38,'NJGW-FELM-B4U5-UVPE',1,7),(39,'PWSF-P734-7PI8-8CRO',1,7),(40,'FCT3-PRI3-048E-CQ1M',1,7),(41,'X3KG-D76X-UTUX-4BL7',1,9),(42,'W07A-88JF-HF03-9BOJ',1,9),(43,'5PSH-9OL1-7VF1-52EE',1,9),(44,'QCV4-2GN5-8WLD-TTBU',1,11),(45,'IQDI-D27Q-HL8H-04IW',1,11),(46,'UO2F-NELP-EDQ9-CV5N',1,12),(47,'IY2Y-RYLH-YS3O-XRDI',1,12),(48,'CWKD-OJ15-IH3Z-QKRU',1,12),(49,'65A5-7YH2-S7I9-DEXG',1,12),(50,'PMRG-TRSP-BM26-4IT0',1,12),(51,'IZ7Q-X09S-RCRV-28EK',1,12),(52,'H7AZ-DMT6-WXWD-2EJJ',1,13),(53,'HOF3-UYAQ-8RC6-QEYO',1,14),(54,'B2GJ-UHQF-FEJI-CMXI',1,14),(55,'X6RS-QV3Z-QR8T-RHJJ',1,14),(56,'0PPP-JMWG-VMIL-4X2T',1,14),(57,'TW0S-BOMS-YG9N-W34U',1,17),(58,'LZPT-A3XG-2F8B-8P63',1,17),(59,'X0QO-KWCH-2P3G-CAVJ',1,17),(60,'BTHR-WV15-U3OH-KQZL',1,18),(61,'3IR8-S9SZ-O33I-VJNG',1,21),(62,'AC0Y-8YBO-FCMX-6BN9',1,22),(63,'BA1S-Y9RK-OZIS-UWAS',1,22),(64,'DLB2-W388-70QW-4V7V',1,24),(65,'F0GN-I7WS-UOUT-1BPA',1,24),(66,'2DDU-ANO2-R37A-317L',1,24),(67,'NEZP-POYF-BFPB-1SYU',1,1),(68,'UUOB-TP3M-59P2-ZTDH',1,1),(69,'6JK9-869V-EHFP-YC5N',1,1),(70,'YUA6-KKTI-YRDM-H5SF',1,1),(71,'AS3O-IR7T-2XV2-NIVY',1,1),(72,'1KBU-T6AU-GI35-V16Q',1,1);
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

-- Dump completed on 2023-06-16 18:48:26

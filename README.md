# 🎮 Shinobi Store - Backend API

[![NestJS](https://img.shields.io/badge/NestJS-9.0.0-red.svg)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.7.4-blue.svg)](https://www.typescriptlang.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-green.svg)](https://www.mysql.com/)
[![Docker](https://img.shields.io/badge/Docker-✓-blue.svg)](https://www.docker.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-orange.svg)](https://jwt.io/)
[![TypeORM](https://img.shields.io/badge/TypeORM-0.3.16-purple.svg)](https://typeorm.io/)

## 📋 Descripción del Proyecto

**Shinobi Store** es una API REST completa desarrollada con **NestJS** que simula una tienda de videojuegos digital. El proyecto demuestra habilidades avanzadas en desarrollo backend, implementando un sistema completo de e-commerce con autenticación, gestión de usuarios, catálogo de productos, sistema de compras, favoritos y notificaciones por email.

## 🚀 Características Principales

### 🔐 Sistema de Autenticación y Autorización
- **Registro de usuarios** con verificación por email
- **Login seguro** con JWT (JSON Web Tokens)
- **Recuperación de contraseñas** mediante tokens temporales
- **Encriptación de contraseñas** con bcrypt
- **Verificación de email** obligatoria para activar cuentas

### 🎯 Gestión de Productos
- **Catálogo completo de videojuegos** con información detallada
- **Sistema de stock** con códigos únicos generados automáticamente
- **Gestión de inventario** en tiempo real
- **Búsqueda y filtrado** de productos

### 💳 Sistema de Compras
- **Gestión de tarjetas de crédito** con encriptación
- **Proceso de compra** automatizado
- **Generación de códigos de activación** únicos
- **Notificaciones por email** con códigos de descarga

### ❤️ Sistema de Favoritos
- **Lista de juegos favoritos** por usuario
- **Gestión personalizada** de preferencias
- **Relaciones optimizadas** entre usuarios y productos

### 📧 Sistema de Notificaciones
- **Envío automático de emails** para verificación
- **Notificaciones de compra** con códigos de descarga
- **Recuperación de contraseñas** por email
- **Integración con Gmail SMTP**

## 🛠️ Tecnologías Utilizadas

### Backend Framework
- **[NestJS 9.0.0](https://nestjs.com/)** - Framework progresivo de Node.js
- **[TypeScript 4.7.4](https://www.typescriptlang.org/)** - Superset de JavaScript con tipado estático

### Base de Datos
- **[MySQL 8.0](https://www.mysql.com/)** - Sistema de gestión de bases de datos relacional
- **[TypeORM 0.3.16](https://typeorm.io/)** - ORM para TypeScript y JavaScript

### Autenticación y Seguridad
- **[JWT (JSON Web Tokens)](https://jwt.io/)** - Autenticación stateless
- **[bcrypt 5.1.0](https://www.npmjs.com/package/bcrypt)** - Encriptación de contraseñas
- **Validación de datos** con DTOs

### Comunicación y Notificaciones
- **[Nodemailer 6.9.3](https://nodemailer.com/)** - Envío de emails
- **CORS habilitado** para integración con frontend

### Contenedores y Despliegue
- **[Docker](https://www.docker.com/)** - Contenedorización de la aplicación
- **[Docker Compose](https://docs.docker.com/compose/)** - Orquestación de servicios
- **Multi-stage builds** para optimización

### Herramientas de Desarrollo
- **[ESLint](https://eslint.org/)** - Linting de código
- **[Prettier](https://prettier.io/)** - Formateo de código
- **[Jest](https://jestjs.io/)** - Testing framework
- **[Supertest](https://www.npmjs.com/package/supertest)** - Testing de APIs

## 📁 Estructura del Proyecto

```
src/
├── users/                 # Gestión de usuarios y autenticación
│   ├── dto/              # Data Transfer Objects
│   ├── user/             # Entidad de usuario
│   ├── users.controller.ts
│   └── users.service.ts
├── games/                # Gestión del catálogo de juegos
│   ├── game/             # Entidad de juego
│   ├── games.controller.ts
│   └── games.service.ts
├── stock/                # Gestión de inventario
│   ├── dto/              # DTOs para stock
│   ├── entities/         # Entidad de stock
│   ├── stock.controller.ts
│   └── stock.service.ts
├── mygames/              # Juegos comprados por usuarios
│   ├── dto/              # DTOs para mis juegos
│   ├── entities/         # Entidad de mis juegos
│   ├── mygames.controller.ts
│   └── mygames.service.ts
├── fav-games/            # Sistema de favoritos
│   ├── dto/              # DTOs para favoritos
│   ├── entities/         # Entidad de favoritos
│   ├── fav-games.controller.ts
│   └── fav-games.service.ts
├── tarjetas/             # Gestión de tarjetas de crédito
│   ├── dto/              # DTOs para tarjetas
│   ├── entities/         # Entidad de tarjeta
│   ├── tarjetas.controller.ts
│   └── tarjetas.service.ts
├── mailer.service.ts     # Servicio de envío de emails
├── app.module.ts         # Módulo principal
└── main.ts              # Punto de entrada
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- MySQL 8.0
- Docker y Docker Compose (opcional)

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd ShinobiStore-Back
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar la base de datos**
```bash
# Ejecutar el script SQL para crear la base de datos
mysql -u root -p < Shinobistore.sql
```

4. **Configurar variables de entorno**
```bash
# Crear archivo .env con las siguientes variables:
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=shinobi
DB_PASSWORD=jutsu
DB_DATABASE=shinobi_store
```

5. **Ejecutar la aplicación**
```bash
# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start:prod
```

### Instalación con Docker

1. **Clonar y navegar al directorio**
```bash
git clone <repository-url>
cd ShinobiStore-Back
```

2. **Ejecutar con Docker Compose**
```bash
docker-compose up --build
```

La aplicación estará disponible en `http://localhost:3001`

## 📚 API Endpoints

### Autenticación (`/users`)
- `POST /users/sing-up` - Registro de usuarios
- `POST /users/login` - Inicio de sesión
- `POST /users/verification/:token` - Verificación de email
- `POST /users/password-reset` - Recuperación de contraseña
- `POST /users/password-change/:token` - Cambio de contraseña

### Juegos (`/games`)
- `GET /games` - Obtener todos los juegos
- `POST /games/:name` - Obtener juego específico

### Stock (`/stock`)
- `POST /stock` - Crear nuevo stock para un juego

### Mis Juegos (`/mygames`)
- `POST /mygames` - Comprar un juego
- `POST /mygames/get` - Obtener juegos del usuario

### Favoritos (`/fav-games`)
- `POST /fav-games` - Agregar a favoritos
- `POST /fav-games/get` - Obtener favoritos del usuario
- `POST /fav-games/delete` - Eliminar de favoritos

### Tarjetas (`/tarjetas`)
- `POST /tarjetas` - Agregar tarjeta de crédito

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run start:dev          # Servidor de desarrollo con hot reload
npm run start:debug        # Servidor con debugging

# Producción
npm run build              # Compilar TypeScript
npm run start:prod         # Ejecutar en producción

# Testing
npm run test               # Ejecutar tests unitarios
npm run test:watch         # Tests en modo watch
npm run test:cov           # Tests con cobertura
npm run test:e2e           # Tests end-to-end

# Linting y Formateo
npm run lint               # ESLint
npm run format             # Prettier
```

## 🐳 Docker

El proyecto incluye configuración completa de Docker:

- **Dockerfile** - Imagen de la aplicación NestJS
- **docker-compose.yml** - Orquestación con MySQL
- **Multi-stage builds** para optimización
- **Variables de entorno** configuradas

### Comandos Docker
```bash
# Construir y ejecutar
docker-compose up --build

# Solo ejecutar
docker-compose up

# Detener servicios
docker-compose down

# Ver logs
docker-compose logs -f
```

## 🧪 Testing

El proyecto incluye una suite completa de testing:

- **Tests unitarios** con Jest
- **Tests de integración** con Supertest
- **Tests end-to-end** para APIs
- **Cobertura de código** configurada

```bash
# Ejecutar todos los tests
npm test

# Tests con cobertura
npm run test:cov

# Tests end-to-end
npm run test:e2e
```

## 🔒 Seguridad

### Implementaciones de Seguridad
- ✅ **Encriptación de contraseñas** con bcrypt
- ✅ **JWT para autenticación** stateless
- ✅ **Validación de datos** con DTOs
- ✅ **Encriptación de tarjetas** de crédito
- ✅ **Tokens temporales** para verificación
- ✅ **CORS configurado** para frontend
- ✅ **Manejo de errores** centralizado

### Buenas Prácticas
- **Principio de responsabilidad única** en servicios
- **Inyección de dependencias** con NestJS
- **Separación de capas** (Controller, Service, Repository)
- **Documentación de código** con JSDoc
- **TypeScript** para tipado estático

## 📊 Base de Datos

### Entidades Principales
- **User** - Usuarios del sistema
- **Game** - Catálogo de videojuegos
- **Stock** - Inventario con códigos únicos
- **MyGame** - Juegos comprados por usuarios
- **FavGame** - Juegos favoritos
- **Tarjeta** - Tarjetas de crédito encriptadas

### Relaciones
- Usuario ↔ Juegos (Many-to-Many)
- Juego ↔ Stock (One-to-Many)
- Usuario ↔ Tarjetas (One-to-Many)

## 🎯 Funcionalidades Destacadas

### Sistema de Compra Automatizado
1. **Verificación de stock** en tiempo real
2. **Generación de códigos únicos** para cada compra
3. **Envío automático de emails** con códigos de descarga
4. **Actualización automática** del inventario

### Gestión de Usuarios Avanzada
- **Verificación por email** obligatoria
- **Recuperación de contraseñas** segura
- **Perfiles de usuario** con historial de compras
- **Sistema de favoritos** personalizado

### Notificaciones Inteligentes
- **Emails de bienvenida** con tokens de verificación
- **Notificaciones de compra** con códigos de descarga
- **Recuperación de contraseñas** por email
- **Plantillas HTML** personalizadas

## 🚀 Despliegue

### Opciones de Despliegue
- **Docker Compose** (recomendado)
- **Despliegue local** con MySQL
- **Contenedores individuales** Docker
- **Plataformas cloud** (AWS, GCP, Azure)

### Variables de Entorno Requeridas
```env
DB_HOST=mysql-shinobi
DB_PORT=3306
DB_USERNAME=shinobi
DB_PASSWORD=jutsu
DB_DATABASE=shinobi_store
NODE_ENV=production
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Desarrollador Full Stack** con experiencia en:
- Backend con NestJS y TypeScript
- Bases de datos relacionales (MySQL)
- APIs RESTful y GraphQL
- Contenedores Docker
- Testing automatizado
- Seguridad web
- Arquitectura de microservicios

---

⭐ **¡Gracias por revisar mi proyecto!** Este backend demuestra habilidades avanzadas en desarrollo de APIs, seguridad, testing y despliegue con tecnologías modernas. 
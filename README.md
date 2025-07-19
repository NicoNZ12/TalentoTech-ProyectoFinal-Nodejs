# Proyecto final NodeJs Talento Tech

Esta proyecto final se basa en la creación de una API de productos. La api cuenta con una arquitectura en capas y con persistencia usando el servicio de Firestore que brinda [Firebase](https://firebase.google.com/)

![Logo](https://media.licdn.com/dms/image/v2/D4D22AQEmMyi18MhzKg/feedshare-shrink_800/B4DZRSAB19G4As-/0/1736542527613?e=2147483647&v=beta&t=uN-k9eZeg69PE34K8e1cbyzDtphjxUMeDGsOAdV6VMU)

## 📌 Descripción

API REST construida con Node.js y Express para manejar productos y usuarios.  
Incluye:

- Autenticación con JWT.
- Persistencia en Firestore (Cloud Firestore).
- Middlewares de autenticación.
- Validación básica de emails.
 

## Ejecutar localmente

Clonar el proyecto

```bash
  git clone https://github.com/NicoNZ12/TalentoTech-ProyectoFinal-Nodejs.git
```

Acceder al directorio del proyecto

```bash
  cd TalentoTech-ProyectoFinal-Nodejs
```
Configurar tus variables de entorno
```bash
  PORT=""
  FRONTEND_URL=""
  
  #database keys
  API_KEY= ""
  AUTH_DOMAIN= ""
  PROJECT_ID= ""
  STORAGE_BUCKET= ""
  MESSAGING_SENDER_ID= ""
  APP_ID= ""
  
  JWT_SECRET=""
```

Ejecutar el programa

```bash
  npm start
```


## 🚧Endpoints

### 📦Products

#### Listar productos
**GET** `/api/products`  
Obtiene todos los productos.

---

#### Obtener un producto
**GET** `/api/products/:id`  
Obtiene un producto por su ID.

---

#### Crear producto
**POST** `/api/products/create`  
Crea un nuevo producto.  
**Requiere autenticación (Bearer Token)**

**Body (JSON):**
```json
{
  "nombre": "aceite",
  "precio": 2300,
  "cantidad": 2
}
```

---

#### Eliminar producto
**DELETE** `/api/products/:id`  
Elimina un producto por su ID.  
**Requiere autenticación (Bearer Token)**

---

#### Actualizar producto
**PUT** `/api/products/:id`  
Actualiza un producto por su ID.  
**Requiere autenticación (Bearer Token)**

**Body (JSON):**
```json
{
  "nombre": "Coca Cola Zero",
  "precio": 3000,
  "cantidad": 1
}
```

---

### 🚻Users

#### Crear usuario
**POST** `/api/users/create`  
Crea un nuevo usuario.

**Body (JSON):**
```json
{
  "username": "prueba",
  "email": "prueba@gmail.com",
  "password": "prueba123"
}
```

---

### 🔐Auth

#### Login
**POST** `/api/auth/login`  
Inicia sesión y devuelve un token JWT.

**Body (JSON):**
```json
{
  "email": "prueba@gmail.com",
  "password": "prueba123"
}
```

---

**Notas:**
- Los endpoints de creación, actualización y eliminación de productos requieren autenticación mediante Bearer Token.
- El token se obtiene en el endpoint de login.

## 💻 Tecnologías

- [Node.js](https://nodejs.org)  
- [Express.js](https://expressjs.com)  
- [Firebase Firestore](https://firebase.google.com/products/firestore)  
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)  
- [dotenv](https://github.com/motdotla/dotenv)  

## Autor

- [Nicolás Nuñez](https://github.com/NicoNZ12)

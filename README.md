# ks2-nestjs-vue-eleazar

## Requisitos previos

Asegúrate de tener los siguientes software instalados en tu sistema:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (viene con Node.js)

## Estructura del proyecto

El proyecto se divide en tres partes principales:

1. **Backend**: Una aplicación NestJS ubicada en el directorio `backend`.
2. **Frontend**: Una aplicación Vue3 con TypeScript ubicada en el directorio `frontend/frontend-vuetify`.
3. **Base de datos**: Una base de datos PostgreSQL servida con Docker, configurada en el archivo `docker-compose.yml`.

## Comenzando

1. **Inicia la base de datos**:
   - Abre una terminal y navega al directorio raíz del proyecto.
   - Ejecuta el siguiente comando para iniciar la base de datos PostgreSQL:
     ```
     docker-compose up -d
     ```
   - Esto iniciará el contenedor PostgreSQL y lo hará disponible en el puerto `5432`.

2. **Inicia el backend**:
   - Abre una nueva terminal y navega al directorio `backend`.
   - Instala las dependencias ejecutando:
     ```
     npm install
     ```
   - Inicia el servidor backend ejecutando:
     ```
     npm run start
     ```
   - El backend estará disponible en `http://localhost:3000`.

3. **Inicia el frontend**:
   - Abre una nueva terminal y navega al directorio `frontend/frontend-vuetify`.
   - Instala las dependencias ejecutando:
     ```
     npm install
     ```
   - Inicia el servidor de desarrollo ejecutando:
     ```
     npm run dev
     ```
   - El frontend estará disponible en `http://localhost:3001/`.

## Dockerización

Inicialmente, intenté dockerizar todo el proyecto, incluyendo el backend y el frontend. Sin embargo, este proceso llevó demasiado tiempo y no pude completarlo dentro del plazo establecido.

El archivo `docker-compose.yml` en el directorio raíz del proyecto es responsable de iniciar el contenedor de la base de datos PostgreSQL. Si necesitas construir y ejecutar los contenedores del backend y el frontend, tendrías que agregar las configuraciones y Dockerfiles necesarios para esos componentes.

## Características del proyecto

- **Base de datos**: El proyecto utiliza una base de datos PostgreSQL servida con Docker para almacenar los datos de los usuarios.
- **Backend**: El backend está construido usando el framework NestJS y proporciona APIs para la gestión de usuarios.
- **Frontend**: El frontend está construido utilizando Vue3 con TypeScript y proporciona una interfaz de usuario para interactuar con las funciones de gestión de usuarios.


# Proyecto CRUD con Autenticación de Usuarios
Este proyecto es una aplicación web MVC que incluye un CRUD básico y un sistema de autenticación de usuarios con enlaces protegidos. Está desarrollado utilizando React y Firebase, aprovechando Firestore Database y Authentication.

## Tabla de Contenidos
- [Proyecto CRUD con Autenticación de Usuarios](#proyecto-crud-con-autenticación-de-usuarios)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Funcionalidades](#funcionalidades)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Configuración](#configuración)
  - [Ejecución](#ejecución)

## Funcionalidades
* **CRUD Básico:** La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar y Borrar) sobre una colección de datos.

![alt text][image1]

[image1]: /public/images/CRUD.png "Diagram"

* **Autenticación de Usuarios:** Implementa un sistema de autenticación de usuarios utilizando Firebase Authentication.

![alt text][image2]

[image2]: /public/images/Diagrama.jpg "Diagram"

* **Rutas Protegidas:** Las rutas que requieren autenticación están protegidas y solo son accesibles para usuarios autenticados.

## Tecnologías Utilizadas
* **React:** Una biblioteca de JavaScript para construir interfaces de usuario.
* **Firebase:** Una plataforma de desarrollo de aplicaciones móviles y web desarrollada por Google.
  * **Firestore Database:** Una base de datos en la nube NoSQL de Firebase que permite el almacenamiento y la sincronización de datos en tiempo real.
  * **Authentication:** Un servicio de Firebase que proporciona funciones de autenticación de usuarios.

## Configuración
Antes de ejecutar la aplicación, asegúrate de seguir estos pasos de configuración:

1. Firebase Setup:
  * Crea un proyecto en Firebase Console.
  * Habilita Firebase Authentication y Firestore Database en el panel de control de tu proyecto.
  * Configura las reglas de seguridad de Firestore según tus necesidades de acceso.
2. Configuración del Proyecto:
  * Clona este repositorio en tu máquina local.
  * Instala las dependencias del proyecto utilizando npm install.
  * Configura tu archivo .env con las credenciales de Firebase (consulta .env.example para ver qué variables son necesarias).
## Ejecución
Una vez que hayas configurado el proyecto correctamente, puedes ejecutarlo localmente utilizando el siguiente comando:
```
npm run start
```

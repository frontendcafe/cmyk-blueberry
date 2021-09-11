# Bienvenidos al proyecto Blueberry de CMYK!!

## Pasos para clonar el repositorio

En la terminal y estando ubicados en la carpeta donde queremos clonar el repo, correr el comando git clone https://github.com/frontendcafe/cmyk-blueberry.git.
Una vez clonado, dirigirse a la carpeta del repositorio en sí.
Correr comando npm install para instalar todas las dependencias.
Para iniciar el proyecto, utilizar el comando npm start.

## Pasos para crear las ramas
Cada uno deberá crear una rama por cada tarea en la que esté trabajando y no deberán enviar cambios directos a master.

Las ramas se crean con el comando git checkout -b nombre-rama
Luego sobre dicha rama se harán los commits y el push para luego crear el Pull Request de la tarea.

### Nomenclatura para las ramas
Usaremos el nombre del issue y feature que trabajamos para los nombres de las ramas, y todo en minúsculas. Ejemplo:

issue-1/navbar

### Nomenclatura para los nombres de clases
Usaremos BEM (bloque, elemento, modificador) para darle nombre a nuestras clases: .block__element--modifier. Ejemplos:

menu__item--active
button--primary

### Nomenclatura para los nombres de clases
Usaremos el nombre del issue y feature que trabajamos para los nombres de las ramas, y todo en minúsculas. Ejemplos:

issue-1/navbar
issue-8/card-bodega

### Lenguaje para el código
Intentaremos utilizar el idioma inglés para todo nuestro código, incluyendo los nombres de carpetas, archivos, componentes, clases, etc.
Ya los commits, PRs y el code review sí podemos hacerlos en español.

## Estructura de archivos

Carpeta Components: aquí iremos colocando todos los componentes de nuestra aplicación.
Carpeta Assets: aquí guardaremos todas las imágenes (con formato .png) y los íconos (con formato .svg).
Carpeta Common: aquí colocaremos todos los archivos con estilos y variables globales del proyecto.


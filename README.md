# Laboratorio 01 AREP 2024-2
## Consultor de Electivas Universitarias
***

### Descripción
Este proyecto tiene dos partes: Una es una API RESTful en Java que permite consultar las materias electivas disponibles para las carreras en una universidad. La API proporciona endpoints para obtener información detallada sobre las electivas, incluyendo nombre, código, créditos, tipo, prerrequisitos y el programa académico al que pertenecen.
La otra es una aplicación web hecha con javascript que me permite filtrar la información de la API por las diferentes carreras

### Características:
* Consulta de Materias Electivas: Obtén la lista completa de materias electivas disponibles.
* Detalles de Materia: Consulta detalles específicos de una materia electiva, incluyendo créditos y requisitos.
* Filtrado por Carrera: Filtra las materias electivas disponibles según la carrera académica.
* Formato de Datos: Respuesta en formato JSON.

### Requisitos:
* Java: Versión 11 o superior.
* JDK: Java Development Kit, necesario para compilar y ejecutar el proyecto.
* IDE: Puedes usar cualquier entorno de desarrollo compatible con Java, como IntelliJ IDEA, Eclipse, o NetBeans.
* Browser.
* maven.

### Instalación:

* Primero descargamos el proyecto:
    ```
    git clone https://github.com/SebZaUr/Lab01-AREP.git
    ```
* Entramos al proyecto:
    ```
    cd Lab01-AREP
    ```
* Construlla el proyecto utilizando Maven:
    ```
    mvn clean install
    ```
* Ejecutamos este comando:
    ```
    java -cp target/Lab01-AREP-1.0-SNAPSHOT.jar org.example.model.SimpleWebServer
    ```
El proyecto ya esta corriendo, para abrirlo de click en este link en su navegador [ECIELECTIVAS](http://locahost:8080).

### Prueba

Ingrese al siguiente link [Viedo_Prueba](https://youtu.be/YAz2ODy_GK0)

***

Autor: Sebastian Zamora Urrego.
# Laboratory 01 AREP 2024-2

## University Electives Consultant

***

### Description

This project has two parts: One is a RESTful API in Java that allows querying the elective courses available for university programs. The API provides endpoints to obtain detailed information about electives, including name, code, credits, type, prerequisites, and the academic program to which they belong.  
The other is a web application made with JavaScript that allows me to filter the API information by different academic programs.

### Features

* Elective Course Query: Get the complete list of available elective courses.
* Course Details: Query specific details of an elective course, including credits and prerequisites.
* Filter by Program: Filter the available elective courses according to the academic program.
* Data Format: JSON response format.

### Requirements

* Java: Version 11 or higher.
* JDK: Java Development Kit, required to compile and run the project.
* IDE: You can use any Java-compatible development environment, such as IntelliJ IDEA, Eclipse, or NetBeans.
* Browser: Any browser for open the webapp.
* Maven: For build the proyect.

### Installation

* First, download the project:

    ```bash
    git clone https://github.com/SebZaUr/Lab01-AREP.git
    ```

* Enter the project directory:

    ```bash
    cd Lab01-AREP
    ```

* Build the project using Maven:

    ```bash
    mvn clean install
    ```

* Run this command:

    ```bash
    java -cp target/Lab01-AREP-1.0-SNAPSHOT.jar org.example.model.SimpleWebServer
    ```

The project is now running. To open it, click on this link in your browser: [ECIELECTIVAS](http://localhost:8080/electivas.html).

### Test

Access the following link: [Test Video](https://youtu.be/YAz2ODy_GK0).

***

Author: Sebastian Zamora Urrego.

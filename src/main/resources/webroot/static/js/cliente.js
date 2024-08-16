function getCourses(courses) {
    let nameVar = document.getElementById("name").value;
    const xhttp = new XMLHttpRequest();
    console.log(nameVar);
    xhttp.onload = function() {
        document.getElementById("getrespmsg").innerHTML =
        this.responseText;
    }
    xhttp.open("GET", "/hello?name="+nameVar);
    xhttp.send();
}


var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //se convierte la respuesta de json a javascript
        //the json repsonse gets parsed to javascript
        var response = JSON.parse(this.responseText);

        //se ordena con los ultimos objetos al comienzo
        //we sort the array by its id, in desc order
        response.sort(function (a, b) {
            return (b.id - a.id);
        });

        //se dejan solo los ultimos 3
        //we use just the last 3
        for (var i = 3; i < 5000; i++) {
            response.pop();
        }

        //dentro del carrusel, se colocan los objetos
        //we put the js objects into the carrousel
        for (var i = 0; i < 3; i++) {
            //si es el primer objeto, se coloca como item activo del carrusel
            //if its the firts object, we use it as active
            if (i == 0) {
                $("#my-slider").append(`
                    <div class="carousel-item active">
                        <img src="imgs/${response[i].id}.jpg" class="d-block w-100" alt="..." id="first-img">
                    </div>
                `);
            }//sino, se colocan detras
            //if its not, we put it after
            else {
                $("#my-slider").append(`
                    <div class="carousel-item">
                        <img src="imgs/${response[i].id}.jpg" class="d-block w-100" alt="..." id="first-img">
                    </div>
                `);
            }
        }
    }
};
//el json de prueba viene de la app jsonplaceholder
//jsonplaceholder gives us fake data to test it
xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
xhttp.send();
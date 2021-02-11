var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //se convierte la respuesta de json a javascript
        var response = JSON.parse(this.responseText);

        //se ordena con los ultimos objetos al comienzo
        response.sort(function (a, b) {
            return (b.id - a.id);
        });

        //se dejan solo los ultimos 3
        for (var i = 3; i < 5000; i++) {
            response.pop();
        }

        //dentro del carrusel, se colocan los objetos
        for (var i = 0; i < 3; i++) {
            //si es el primer objeto, se coloca como item activo del carrusel
            if (i == 0) {
                $("#my-slider").append(`
                    <div class="carousel-item active">
                        <img src="imgs/${response[i].id}.jpg" class="d-block w-100" alt="..." id="first-img">
                    </div>
                `);
            }//sino, se colocan detras
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
xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
xhttp.send();
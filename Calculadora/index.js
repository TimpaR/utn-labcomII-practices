function validacion() {
    var user = document.getElementById("usuario").value;
    var domi = document.getElementById("domicilio").value;
    var cantidad = document.getElementById("cantidadKwh").value;
    if (user == 1 || domi == 1 || cantidad <= 0) {
        alert("Complete todos los campos")
    } else {
       return costo()
    }
}

function costo() {
    var a;
    var b;
    const servicio = 102;
    var user = document.getElementById("usuario");
    var domi = document.getElementById("domicilio").value;
    var cantidad = document.getElementById("cantidadKwh").value;
    if (user.checked) {
        a = 0.21;
    } else {
        a = 0.27;
    }

    switch (domi) {
        case "centro":
            b = 5.80;
            break;
        case "sur":
            b = 5.40;
            break
        case "oeste":
            b = 5.35;
            break;
        case "norte":
            b = 5.60;
            break;
    }

    var total = Number((servicio + cantidad * b * (1 + a)).toFixed(2));

    document.getElementById("respuesta").innerText = "El total es $" + total
}
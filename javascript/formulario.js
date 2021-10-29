
window.onload = iniciar;
function iniciar() {
    document.getElementById('enviar').addEventListener('click', validate, false);
    console.log("listo");
}

function alpha(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
}
function validar_text(parametro){
    var letra =  /^[a-zA-Z\s]*$/;
    if(parametro.search(letra)){
        return false
    }
    return true
}

function validando_nomb() {
    var elemento = document.getElementById('nombre');

    if (elemento.value == '') {
        alert("El campo Nombre se encuentra vacío");
        return false;
    }

    if (elemento.value.length < 2) {
        alert("El campo Nombre es demasiado corto");
        return false;
    }

    if (validar_text(elemento.value) == false) {
        alert("En este campo no se permiten numeros");
        return false;
    }
    return true;
}

function validando_ape() {
    var elemento = document.getElementById('apellido');

    if (elemento.value == '') {
        alert("El campo Apellido se encuentra vacío");
        return false;
    }

    if (elemento.value.length < 2) {
        alert("El campo Apellido es demasiado corto");
        return false;
    }

    if (validar_text(elemento.value) == false) {
        alert("En este campo no se permiten numeros");
        return false;
    }
    
    return true;
}

function validando_correo() {
    var elemento = document.getElementById('correo');

    if (elemento.value == '') {
        alert("El campo Correo se encuentra vacío");
        return false;
    }

    return true;
}

function validate(e) {
    if (validando_nomb() && validando_ape() && validando_correo() && confirm('¿Desea enviar?')) {
        return true;
    } else {

        e.preventDefault();
        return false;
    }

}



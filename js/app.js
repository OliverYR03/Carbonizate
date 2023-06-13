const formulario = document.querySelector("form");
const section = document.querySelector("section");
const inputNombre = document.getElementById("nombre");
const inputNumero = document.getElementById("tarjeta");
const inputCVV = document.getElementById("cvv");
const inputFecha = document.getElementById("fecha");
const inputCorreo = document.getElementById("correo");
const parrafo = document.getElementById("warnings");

document.addEventListener("DOMContentLoaded", () => {
    formulario.addEventListener("submit", capturarDatos);
})

function capturarDatos(e) {
    e.preventDefault()

    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    //Validación de inputs
    if(inputNombre.value.length <6 && inputNombre.value.trim() === ""){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(inputNumero.value.length <16 && inputNumero.value.trim() === ""){
        warnings += `El número de la tarjeta no es valida <br>`
        entrar = true
    }
    if(!regexEmail.test(inputCorreo.value) && inputCorreo.value.trim() === ""){
        warnings += `El correo no es valido <br>`
        entrar = true
    }
    if(inputCVV.value.length = 3 && inputCVV.value.trim() === ""){
        warnings += `El CVV no es valido <br>`
        entrar = true
    }
    if (inputFecha.value.length = 3 && inputFecha.value.trim() === "") {
        warnings += "La fecha no es valida"
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings;
        section.classList.add("h33");

        setTimeout(() => {
            parrafo.remove();
            section.classList.remove("h33");
        }, 5000);
    }else{
        parrafo.innerHTML = "Pago realizado con éxito"
    }
}
const registrarUsuario= async()=>{
    var correo= document.querySelector("#correo").value;
    var password= document.querySelector("#password").value;
    var usuario= document.querySelector("#usuario").value;

    if(correo.trim()==='' ||
    password.trim()==='' ||
    usuario.trim()===''){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Los campos están vacíos. Debes ingresar datos.',
            footer: 'Registro de Usuarios'
        })
        return;
    }

    if(!validarCorreo(correo)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Ingresa un Correo eléctronico válido. Intenta de nuevo.',
            footer: 'Registro de Usuarios'
        })
        return;
    }


    if(!validarPassword(password)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Ingresa un Password válido. (Mayúscula, minúscula, número y min. 8 caracteres)',
            footer: 'Registro de Usuarios'
        })
        return;
    }

    if(!validarNombre(usuario)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Ingresa un nombre válido',
            footer: 'Registro de Usuarios'
        })
        return;
    }

    // INSERTAR LOS DATOS CAPTURADOS EN LAS CAJA DE TEXTO HACIA LA BASE DE DATOS

    const datos= new FormData();  //Estamos instanciando una clase llamada FormData
                                  // la cual le asignamos una variable llamada datos

    datos.append("correo",correo);
    datos.append("password",password);
    datos.append("usuario",usuario);

    var respuesta=await fetch("php/usuario/registrarUsuario.php",{
        method:'POST',
        body: datos
    });


    var resultado= await respuesta.json();

    if(resultado.success==true){
        Swal.fire({
            icon: 'success',
            title: '¡Usuario Registrado Exitosamente!',
            text: resultado.mensaje,
            footer: 'Registro de Usuarios'
        })
        // vamos a regargar la paguina registro.html y lo redicionaremos a la pagina login.html
        document.querySelector("#formRegistrar").reset();//reseteamos el formulario
        setTimeout(()=>{
            window.location.href="login.html";
        },4000);

    }else{
        Swal.fire({
            icon: 'error',
            title: '¡ERROR DE CONEXIÓN',
            text: resultado.mensaje,
            footer: 'Registro de Usuarios'
        })
    }
}
//progemacion del login.html

const loginUsuario= async()=>{
    var correo= document.querySelector("#correo").value;
    var password= document.querySelector("#password").value;

    if(correo.trim()==='' ||
    password.trim()===''){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Los campos están vacíos. Debes ingresar datos.',
            footer: 'Registro de Usuarios'
        })
        return;
    }

    if(!validarCorreo(correo)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Ingresa un Correo eléctronico válido. Intenta de nuevo.',
            footer: 'Registro de Usuarios'
        })
        return;
    }


    if(!validarPassword(password)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Ingresa un Password válido. (Mayúscula, minúscula, número y min. 8 caracteres)',
            footer: 'Registro de Usuarios'
        })
        return;
    }

        // INSERTAR LOS DATOS CAPTURADOS EN LAS CAJA DE TEXTO HACIA LA BASE DE DATOS

    const datos= new FormData();  //Estamos instanciando una clase llamada FormData
                                  // la cual le asignamos una variable llamada datos

    datos.append("correo",correo);
    datos.append("password",password);

    var respuesta=await fetch("php/usuario/loginUsuario.php",{
        method:'POST',
        body: datos
    });

    var resultado= await respuesta.json();

    if(resultado.success==true){
        Swal.fire({
            title: '¡Usuario Logeado Exitosamente!',
            icon: 'success',
            text: resultado.mensaje,
            focusConfirm: false,
            confirmButtonText:
              '<a href="./index.html"><i class="fa fa-thumbs-up"></i> Continuar</a>',
          })
        // vamos a regargar la paguina registro.html y lo redicionaremos a la pagina login.html
        document.querySelector("#formLogin").reset();//reseteamos el formulario
        setTimeout(()=>{
            window.location.href="usuarios.html";
        },4000);

    }else{
        Swal.fire({
            icon: 'error',
            title: '¡ERROR DE CONEXIÓN',
            text: resultado.mensaje,
            footer: 'Registro de Usuarios'
        })
    }
     
}
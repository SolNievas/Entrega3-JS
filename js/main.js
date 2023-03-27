//DOM.

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const parrafo = document.getElementById("warnings");

//Funciones.

function mensaje() {
alert("Recuerda completar todos los campos requeridos para continuar");
}

//Validación del formulario.

class Usuario {
    constructor(nombre,apellido,usuario,contraseña){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
}

const arrayUsuarios = [];
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById ("apellido");
    const usuario = document.getElementById ("usuario");
    const contraseña = document.getElementById ("contraseña");

    const personas = new Usuario (nombre.value, apellido.value, usuario.value, contraseña.value);

    arrayUsuarios.push(personas);
    console.log(arrayUsuarios);

    formulario.reset();
})

//Ciclos.

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let warnings = ""
    let ingresar = false
    parrafo.innerHTML = ""

    while (ingresar === true) {

    if (nombre.value.length < 3) {
        warnings += 'El Nombre debe tener más de 3 caracteres <br>';
        mensaje()
    }

    else if (apellido.value.length < 3) {
        warnings += 'El Apellido debe tener más de 3 caracteres <br>';
        mensaje()
    }

    else if (usuario.value.length < 4) {
        warnings += 'El Nombre de Usuario debe tener más de 4 caracteres <br>';
        mensaje()
    }

    else if (contraseña.value.length < 6) {
        warnings += 'La Contraseña debe tener más de 6 caracteres <br>';  
        mensaje()      
    }
    
    if(ingresar) {
        parrafo.innerHTML = warnings;
    }

    else {
        parrafo.innerHTML = "Registro exitoso";
    }

    break;
    }
})

//Objetos.

let casilleros = [nombre, apellido, usuario, contraseña]

const instrucciones = {
    nombre:"debe colocar su nombre",
    apellido: "debe colocar su apellido",
    usuario: "debe colocar su nombre de usuario",
    contraseña: "debe colocar su contraseña",
}

console.log (instrucciones);

//Arrays.

casilleros.push ("repetir contraseña si hay error");
console.log(casilleros);

const instruccionesArray = [contraseña];
const repetirContraseña = instruccionesArray.map ((contraseña => {
    return {
        contraseña: ("debe colocar su contraseña nuevamente de ser necesario")
    }   
}))

console.log (repetirContraseña);

//Storage & JSON.

const registro = {
    nombre: 'colocar nombre',
    apellido: 'colocar apellido',
    usuario:'colocar usuario',
    contraseña: 'colocar contraseña'
};
  
localStorage.setItem('registro', JSON.stringify(registro));
  
let registroLS = JSON.parse(localStorage.getItem('registro'));
console.log(typeof registroLS);
console.log(registroLS);


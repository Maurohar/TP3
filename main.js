//local Storage Variable
let l = localStorage;


//Agarrando elementos del DOM
//let nombreUsuario = document.getElementById("validacionNombre").value
//let apellidoUsuario = document.getElementById("validacionApellido").value
//let emailUsuario = document.getElementById("validacionMail").value
//let contraseniaUsuario = document.getElementById("validacionPassword").value
//let enviarUsuario = document.getElementById("botonEnviar").value


const form = document.querySelector('#idFormulario');
const submitButton = document.querySelector('#botonEnviar');

// Agregar un evento de escucha al botón de enviar
submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Realizar la validación de los campos del formulario
    if (validarFormulario()) {
        // Crear un objeto con los valores del formulario
        const formData = {
            nombre: document.querySelector('#validacionNombre').value,
            apellido: document.querySelector('#validacionApellido').value,
            email: document.querySelector('#validacionMail').value,
            contrasenia: document.querySelector('#validacionPassword').value,
            boton: document.querySelector('#botonEnviar').value,
        };
        console.log()
        // Convertir el objeto en una cadena JSON
        const formDataJSON = JSON.stringify(formData);

        // Almacenar la cadena JSON en el localStorage
        localStorage.setItem('formularioData', formDataJSON);

        // Mostrar un mensaje de éxito o redirigir a otra página
        alert('Formulario enviado correctamente');

        // Restablecer el formulario
        form.reset();
    }
});

// Función para validar el formulario (debes implementarla según tus requisitos)
function validarFormulario() {
    // Aquí puedes agregar la lógica de validación de tus campos
    // Retorna true si la validación es exitosa, de lo contrario, false
    return true;
}


class Usuarios {
    constructor(id, nombre, apellido, email, contrasenia) {
        this.id = id,
            this.nombre = nombre,
            this.apellido = apellido,
            this.email = email
        this.contrasenia = contrasenia

    }
    //los metodos en class se declaran fuera del constructor.
    mostrarDatosObjetos() {
        console.log(`El registro N°${this.id} el nombre del usuario es ${this.nombre} apellido ${this.apellido} Email de registro ${this.email} contraseña ${this.contrasenia}`)
    }
}


//interaciones con los autos.

const Objeto1 = new Usuarios.localStorage(1, "Mauro", "Harmitton", "mauro.harmittonbr@gmail.com", 11111)

const Objeto2 = new Usuarios(2, "Pepe", "Benedetti", "pepebenedeti@gmail.com", 22222)

const Objeto3 = new Usuarios(3, "Juan", "Diablo", "juand@gmail.com", 33333)

const Objeto4 = new Usuarios(4, "Pagani", "Zonda", 44444)

const Objeto5 = new Usuarios(5, "Alberto", "Ferraro", 55555)

const Objeto6 = new Usuarios(6, "Toyota", "Corola", 66666)

const Usuarios = []
console.log(Usuarios)
consesionario.push(Objeto1, Objeto2, Objeto3, Objeto4, Objeto5, Objeto6)
console.log(Usuarios)

function agregarUsuarios() {
    let nombreIngresado = prompt("Ingrese la Marca del Automotor")
    let apellidoIngresado = prompt("Ingrese el Modelo del auto")
    let emailIngresado = parseInt(prompt("Ingrese el precio del Automotor"))
    let contraseniaIngresado = parseInt(localStorage()).value
    const usuarioNuevo = new Usuarios(consesionario.length + 1, nombreUsuario, apellidoUsuario, emailUsuario, contraseniaUsuario)
    autoNuevo.mostrarDatosAutos()
    console.log(usuarioNuevo)
    Usuarios.push(usuarioNuevo)
}

function verUsuarios(array) {
    console.log(`Nuestros Autos son: `)
    for (let usuarios of Usuarios) {
        console.log(usuarios.id, usuarios.nombre, usuarios.apellido, usuarios.email, usuarios.contraseña)
    }
}
//contenedor de Template Strings
let nombreIngresado = { id: "", nombre: "", precio: "" }
let contenedor = document.createElement("div");

contenedor.innerHTML = `
<div class="row">
        <div class="col">
            <input type="text" id="${validacionNombre}" class="form-control bg-light" placeholder="First name" aria-label="Ingrese su nombre">
        </div>
        <div class="col">
            <input type="text" id="${validacionApellido}" class="form-control bg-light"  placeholder="Last name" aria-label="Ingrese su apellido">
        </div>
    </div>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label bg-light">Email address</label>
        <input type="email" class="form-control" id="${validacionMail}" placeholder="ejemplo@ejemplo.com">
    </div>
    <label for="inputPassword5" class="form-label bg-light">Password</label>
    <input type="password" id="${validacionPassword}" class="form-control" aria-labelledby="passwordHelpBlock">
    <div id="passwordHelpBlock" class="form-text">
        de 8 a 20 caracteres.
    </div>`

document.body.appendChild(contenedor)
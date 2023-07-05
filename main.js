//local Storage Variable
let l = localStorage;


 //Agarrando elementos del DOM
let nombreUsuario = document.getElementById("validacionNombre").value
let apellidoUsuario = document.getElementById("validacionApellido").value
let emailUsuario = document.getElementById("validacionMail").value
let contraseniaUsuario = document.getElementById("validacionPassword").value
let enviarUsuario = document.getElementById("botonEnviar").value




class Usuario {
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

const Objeto1 = new Usuarios(1, "Mauro", "Harmitton", "mauro.harmittonbr@gmail.com", 11111)

const Objeto2 = new Usuarios(2, "Pepe", "Benedetti", "pepebenedeti@gmail.com", 22222)

const Objeto3 = new Usuarios(3, "Juan", "Diablo", "juand@gmail.com", 33333)

const Objeto4 = new Usuarios(4, "Pagani", "Zonda", "pagani@gmail.com" , 44444)

const Objeto5 = new Usuarios(5, "Alberto", "Ferraro", "alber@gmail.com", 55555)

const Objeto6 = new Usuarios(6, "Pedro", "Corola", "corola@gmail.com", 66666)

const Usuarios = []
console.log(Usuarios)
Usuarios.push(Objeto1, Objeto2, Objeto3, Objeto4, Objeto5, Objeto6)
console.log(Usuarios)

function agregarUsuarios() {
    let nombreIngresado = prompt("Ingrese la Marca del Automotor")
    let apellidoIngresado = prompt("Ingrese el Modelo del auto")
    let emailIngresado = parseInt(prompt("Ingrese el precio del Automotor"))
    let contraseniaIngresado = parseInt(localStorage()).value
    const usuarioNuevo = new Usuarios(id.length+1, nombreUsuario, apellidoUsuario, emailUsuario, contraseniaUsuario)
    usuarioNuevo.mostrarDatosObjetos()
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
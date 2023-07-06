//local Storage Variable
let l = localStorage;

const formularioContacto = document.getElementById("idFormulario");
const btnEnviar = document.getElementById("botonEnviar")

formularioContacto.addEventListener("submit",(e)=>{
    e.preventDefault();
    agregarUsuario();

});

//Agarrando elementos del DOM

class Usuario {
    constructor(id, nombre, apellido, email, contrasenia) {
        this.id = id,
            this.nombre = nombre,
            this.apellido = apellido,
            this.email = email,
            this.contrasenia = contrasenia

    }
    //los metodos en class se declaran fuera del constructor.
    mostrarDatosObjetos() {
        console.log(`El registro N°${this.id} el nombre del usuario es ${this.nombre} apellido ${this.apellido} Email de registro ${this.email} contraseña ${this.contrasenia}`)
    }
}


//interaciones con los autos.

const Objeto1 = new Usuario(1, "Mauro", "Harmitton", "mauro.harmittonbr@gmail.com", 11111)

const Objeto2 = new Usuario(2, "Pepe", "Benedetti", "pepebenedeti@gmail.com", 22222)

const Objeto3 = new Usuario(3, "Juan", "Diablo", "juand@gmail.com", 33333)

const Objeto4 = new Usuario(4, "Pagani", "Zonda", "pagani@gmail.com", 44444)

const Objeto5 = new Usuario(5, "Alberto", "Ferraro", "alber@gmail.com", 55555)

const Objeto6 = new Usuario(6, "Pedro", "Corola", "corola@gmail.com", 66666)

const usuarios = [Objeto1, Objeto2, Objeto3, Objeto4, Objeto5, Objeto6]

localStorage.setItem('usuarios',JSON.stringify(usuarios))



function agregarUsuario() {
    let nombreUsuario = document.getElementById("validacionNombre").value
    let apellidoUsuario = document.getElementById("validacionApellido").value
    let emailUsuario = document.getElementById("validacionMail").value
    let contraseniaUsuario = document.getElementById("validacionPassword").value
    
    const usuarioNuevo = new Usuario(usuarios.length + 1, nombreUsuario, apellidoUsuario, emailUsuario, contraseniaUsuario)
    usuarioNuevo.mostrarDatosObjetos()
    console.log(usuarioNuevo)
    usuarios.push(usuarioNuevo) 
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

function verUsuario(array) {
    console.log(`Registro de Usuario, email y contraseña`)
    for (let usuario of Usuario) {
        console.log(usuario.id, usuario.nombre, usuario.apellido, usuario.email, usuario.contraseña)
    }
}

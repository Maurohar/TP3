//local Storage Variable
let l = localStorage;

const formularioContacto = document.getElementById("idFormulario");


formularioContacto.addEventListener("submit",(e)=>{
    e.preventdefault();
    const email = document.getElementById("email").value;
    if(email.trim().lenght <= 3 || !email.includes("@")){
    mostrarNotificacion("notificacionEmail", " el Mail debe tener más de 3 letras y contener '@'")
    }
});

//Agarrando elementos del DOM
let getData = function () {
    let nombreUsuario = document.getElementById("validacionNombre").value
    let apellidoUsuario = document.getElementById("validacionApellido").value
    let emailUsuario = document.getElementById("validacionMail").value
    let contraseniaUsuario = document.getElementById("validacionPassword").value
    let enviarUsuario = document.getElementById("botonEnviar").value
}


function enviarDatosLocalStorage(obj1, obj2, obj3, obj4, obj5) {
    // Almacenar las variables individualmente en el localStorage
    localStorage.setItem('User', JSON.stringify(obj1));
    localStorage.setItem('User', JSON.stringify(obj2));
    localStorage.setItem('User', JSON.stringify(obj3));
    localStorage.setItem('User', JSON.stringify(obj4));
    localStorage.setItem('User', JSON.stringify(obj5));
}


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

function agregarUsuario() {
    let nombreIngresado = localStorage.setItem("Usuarios", JSON.stringify(Usuario))
    let apellidoIngresado = localStorage.setItem("Usuarios", JSON.stringify(Usuario))
    let emailIngresado = localStorage.setItem("Usuarios", JSON.stringify(Usuario))
    let contraseniaIngresado = localStorage.setItem("Usuarios", JSON.stringify(Usuario))
    const usuarioNuevo = new Usuario(id.length + 1, nombreUsuario, apellidoUsuario, emailUsuario, contraseniaUsuario)
    usuarioNuevo.mostrarDatosObjetos()
    console.log(usuarioNuevo)
    Usuario.push(usuarioNuevo)
}

function verUsuario(array) {
    console.log(`Registro de Usuario, email y contraseña`)
    for (let usuario of Usuario) {
        console.log(usuario.id, usuario.nombre, usuario.apellido, usuario.email, usuario.contraseña)
    }
}

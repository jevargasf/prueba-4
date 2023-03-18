// Creación clase objeto XHR
const xhr = new XMLHttpRequest();

// Inicialización elementos del DOM
const contenedorData = document.getElementById("contenedorData")
const listarNombresUsuarios = document.getElementById("listarNombresUsuarios")
const infoBasica = document.getElementById("infoBasica")
const buscarDireccionUsuario = document.getElementById("buscarDireccionUsuario")
const infoAvanzadaUsuario = document.getElementById("infoAvanzadaUsuario")
const listarEmpresas = document.getElementById("listarEmpresas")
const listarUsuariosAZ = document.getElementById("listarUsuariosAZ")

// Funciones para obtener data
function pintarNombresUsuarios() {
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const dataUsuarios = JSON.parse(this.responseText)
            console.log(dataUsuarios)
            contenedorData.innerHTML = `
                <table class="table text-center">
                <thead>
                <tr>
                    <th scope="col">Nombre Usuario</th>
                </tr>
                </thead>
                <tbody id="cuerpoTabla">
                </tbody>
            </table>
            `
            const cuerpoTabla = document.getElementById("cuerpoTabla")
            dataUsuarios.forEach(usuario => {
                const fila = document.createElement("tr")
                cuerpoTabla.innerHTML +=`
                        <td>${usuario.name}</td>
                `                
                cuerpoTabla.appendChild(fila)
            });
            
        }
    }
}

function infoBasicaUsuario() {
    const nombreConsulta = prompt("Ingresa nombre de usuario: ")
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const dataUsuarios = JSON.parse(this.responseText)
            contenedorData.innerHTML = `
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Correo</th>
                    </tr>
                </thead>
                <tbody id="cuerpoTabla">
                </tbody>
            </table>
            `

            // Comprobación usuario existe
            let arrUsuarios = []
            dataUsuarios.forEach(usuario => {
                arrUsuarios.push(usuario.name)
            })
            while (!arrUsuarios.includes(nombreConsulta)) {
                alert("Usuario incorrecto. Intente nuevamente.")
                contenedorData.setAttribute("class", "col-5 container p-3 m-auto text-center")
                contenedorData.innerHTML =`
                <h5 class="text-center">Consulta no realizada. Puede encontrar los nombres de los usuarios en nuestro directorio de usuarios.</h5>
                `
                break
            }

            // Consulta a la data
            const cuerpoTabla = document.getElementById("cuerpoTabla")
            dataUsuarios.forEach(usuario => {
                if(usuario.name == nombreConsulta) {
                    const fila = document.createElement("tr")
                    cuerpoTabla.innerHTML =`
                        <td>${usuario.name}</td>
                        <td>${usuario.username}</td>
                        <td>${usuario.email}</td>
                    `
                    cuerpoTabla.appendChild(fila)
                }
            })
        }
    }
}

function pintarDireccion() {
    const nombreConsulta = prompt("Ingresa nombre de usuario: ")
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const dataUsuarios = JSON.parse(this.responseText)
            contenedorData.innerHTML = `
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col" colspan="2">Coordenadas</th>
                        <th scope="col">Calle</th>
                        <th scope="col">Número Depto.</th>
                        <th scope="col">Código Postal</th>

                    </tr>
                </thead>
                <tbody id="cuerpoTabla">
                </tbody>
            </table>
            `
            // Comprobación usuario existe
            let arrUsuarios = []
            dataUsuarios.forEach(usuario => {
                arrUsuarios.push(usuario.name)
            })
            while (!arrUsuarios.includes(nombreConsulta)) {
                alert("Usuario incorrecto. Intente nuevamente.")
                contenedorData.setAttribute("class", "col-5 container p-3 m-auto text-center")
                contenedorData.innerHTML =`
                <h5 class="text-center">Consulta no realizada. Puede encontrar los nombres de los usuarios en nuestro directorio de usuarios.</h5>
                `
                break
            }

            // Consulta a la data
            const cuerpoTabla = document.getElementById("cuerpoTabla")
            dataUsuarios.forEach(usuario => {
                if(usuario.name == nombreConsulta) {
                    const fila = document.createElement("tr")
                    cuerpoTabla.innerHTML =`
                        <td>${usuario.name}</td>
                        <td>${usuario.address.city}</td>
                        <td>Lat: ${usuario.address.geo.lat}</td>
                        <td>Lng: ${usuario.address.geo.lng}</td>
                        <td>${usuario.address.street}</td>
                        <td>${usuario.address.suite}</td>
                        <td>${usuario.address.zipcode}</td>

                    `
                    cuerpoTabla.appendChild(fila)
                }
            })
        }
    }
}

function infoAvanzada() {
    const nombreConsulta = prompt("Ingresa nombre de usuario: ")
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const dataUsuarios = JSON.parse(this.responseText)
            contenedorData.innerHTML = `
                <table class="table text-center align-middle">
                    <thead>
                        <tr>
                            <th scope="col" rowspan="2">Nombre Usuario</th>
                            <th scope="col" rowspan="2">Teléfono</th>
                            <th scope="col" rowspan="2">Sitio Web</th>
                            <th scope="col" colspan="3" rowspan="1">Empresa
                                <tr scope="row">
                                    <th>Nombre</th>
                                    <th>Actividad</th>
                                    <th>Eslogan</th>
                                </tr>
                            </th>
                        </tr>
                    </thead>
                    <tbody id="cuerpoTabla">
                    </tbody>
                </table>
                `
            const cuerpoTabla = document.getElementById("cuerpoTabla")
            // Comprobación usuario existe
            let arrUsuarios = []
            dataUsuarios.forEach(usuario => {
                arrUsuarios.push(usuario.name)
            })
            while (!arrUsuarios.includes(nombreConsulta)) {
                alert("Usuario incorrecto. Intente nuevamente.")
                contenedorData.setAttribute("class", "col-5 container p-3 m-auto text-center")
                contenedorData.innerHTML =`
                <h5 class="text-center">Consulta no realizada. Puede encontrar los nombres de los usuarios en nuestro directorio de usuarios.</h5>
                `
                break
            }

            // Consulta a la data
            dataUsuarios.forEach(usuario => {
                if(usuario.name == nombreConsulta) {
                    const fila = document.createElement("tr")
                    cuerpoTabla.innerHTML =`
                        <td>${usuario.name}</td>
                        <td>${usuario.phone}</td>
                        <td>${usuario.website}</td>
                        <td>${usuario.company.name}</td>
                        <td>${usuario.company.bs}</td>
                        <td>${usuario.company.catchPhrase}</td>

                    `
                    cuerpoTabla.appendChild(fila)
                }         
            })
        }
    }
}

function pintarEmpresas() {
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const dataUsuarios = JSON.parse(this.responseText)
            contenedorData.innerHTML = `
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Empresa</th>
                            <th scope="col">Eslogan</th>
                        </tr>
                    </thead>
                        <tbody id="cuerpoTabla">
                        </tbody>
                </table>
                `
            const cuerpoTabla = document.getElementById("cuerpoTabla")
            dataUsuarios.forEach(usuario => {
                const fila = document.createElement("tr")
                cuerpoTabla.innerHTML +=`
                    <td>${usuario.company.name}</td>
                    <td>${usuario.company.catchPhrase}</td>
                `
                cuerpoTabla.appendChild(fila)
            })    
        }
    }
}

function pintarUsuariosAZ() {
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const dataUsuarios = JSON.parse(this.responseText)
            console.log(dataUsuarios)
            contenedorData.innerHTML = `
                <table class="table text-center">
                <thead>
                <tr>
                    <th scope="col">Nombre Usuario</th>
                </tr>
                </thead>
                <tbody id="cuerpoTabla">
                </tbody>
            </table>
            `
            const cuerpoTabla = document.getElementById("cuerpoTabla")
            let arrUsuariosAZ = []
            dataUsuarios.forEach(usuario => {
                arrUsuariosAZ.push(usuario.name)
            })
            arrUsuariosAZ.sort()
            arrUsuariosAZ.forEach(i => {
                const fila = document.createElement("tr")
                cuerpoTabla.innerHTML +=`
                        <td>${i}</td>
                `                
                cuerpoTabla.appendChild(fila)
            });
        }
    }
}

// Botones para listar data
listarNombresUsuarios.addEventListener('click', pintarNombresUsuarios);
infoBasica.addEventListener('click', infoBasicaUsuario)
buscarDireccionUsuario.addEventListener('click', pintarDireccion)
infoAvanzadaUsuario.addEventListener('click', infoAvanzada)
listarEmpresas.addEventListener('click', pintarEmpresas)
listarUsuariosAZ.addEventListener('click', pintarUsuariosAZ)
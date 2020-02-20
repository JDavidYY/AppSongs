alert("Bienvenida ShmutsiBoo")


//CLASE DE LAS CANCIONES

class Cancion{
    constructor(titulo,artista,fecha){
        this.titulo = titulo
        this.artista = artista
        this.fecha = fecha
    }
}

//CLASE DE LA INTERFAZ

class UI{
    agregarCancion(cancion){
        const songList = document.getElementById('songList')
        const element = document.createElement('div')
        console.log(cancion.titulo)
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body" >
                    <strong>Canción</strong>: ${cancion.titulo}
                    <strong>Artista</strong>: ${cancion.artista}
                    <strong>Fecha</strong>: ${cancion.fecha}
                    
                </div>
            </div>
        `
        songList.appendChild(element)
    }

    resetearFormulario(){
        document.getElementById("formSong").reset();
    }
    agregarArtista(){

    }

    agregarFecha(){

    }
}

//EVENTOS DEL DOM

document.getElementById("formSong").addEventListener('submit', function(e){
    const titulo = document.getElementById('titulo').value
    const artista = document.getElementById('artista').value
    const fecha = document.getElementById('fecha').value
    //console.log(fecha)
   // console.log(typeof(fecha))
    const cancion = new Cancion(titulo,artista,fecha);
    const ui = new UI();

    ui.agregarCancion(cancion);
    ui.resetearFormulario();
    e.preventDefault();
})



/*
fecha01 = new Date()
cancion01 = new Cancion("cancion1","beyonce",fecha01)
console.log(cancion01.fecha)
*/
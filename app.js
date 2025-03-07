// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar los nombres
let nombresAmigos = [];

//Obtener el nombre del input
function agregarAmigo() {
    const amigo = document.getElementById('amigo');
    const nombre = amigo.value.trim();

    //alerta por si el nombre esta vacio
    if (nombre === ''){
        alert("Por favor, ingrese un nombre valido");
     return;
    }

    //mandar el nombre al array como objeto
    nombresAmigos.push({ nombre: nombre, deshabilitado: false });

    //Limpiar el campo de entrada
    document.querySelector('#amigo').value = '';

    //actualizar la lista de amigos
    actualizarListaAmigos(); 
}

function actualizarListaAmigos() {
    //Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    //Limpiar la lista existente
    lista.innerHTML = "";

    //Iterar sobre el arreglo amigos
    for (let i = 0; i < nombresAmigos.length; i++) {
        //Crear un nuevo elemento para cada amigo
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombresAmigos[i].nombre; // Asignar el nombre del amigo
        //Agregar el elemento a la lista
        lista.appendChild(nuevoAmigo);
    }
    console.log(nombresAmigos);
}

//Función para sortear un amigo
function sortearAmigo() {
    // Filtrar amigos no deshabilitados
    const amigosDisponibles = nombresAmigos.filter(amigo => !amigo.deshabilitado);

    // Validar si hay amigos
    if (amigosDisponibles.length === 0) {
        alert('No hay amigos disponibles para sortear.');
        return;
    }

    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
    const amigoSeleccionado = amigosDisponibles[indiceAleatorio];
    
    // Mostrar resultado
    document.getElementById('resultado').innerHTML = 
        `El amigo sorteado es: <strong>${amigoSeleccionado.nombre}</strong>`;

    amigoSeleccionado.deshabilitado = true;
    actualizarListaAmigos();

}

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
}

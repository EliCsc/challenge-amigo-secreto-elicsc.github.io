// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.


let titulo = document.querySelector('h1');
titulo.innerHTML = 'El Juego Del Amigo Secreto';

let subtitulo = document.querySelector('h2');
subtitulo.innerHTML = 'Vamos a jugar, coloque el nombre de sus amigos';


let listadoAmigos = [];

function agregarAmigo() {
     let nombres = document.getElementById("amigo");
     let amigos = nombres.value;

     if (!amigos) {
       alert('Por favor, inserte un nombre'); 
       return;
     }
     listadoAmigos.push(amigos);
     console.log(listadoAmigos);
     mostrarAmigos();

limpiarEntrada();
}

function limpiarEntrada() {
   document.querySelector('#amigo').value = '';
}

function mostrarAmigos() {
    let verAmigos = document.getElementById("listaAmigos");
    verAmigos.innerHTML = "";

    for(let i = 0; i < listadoAmigos.length; i++) {
        let lista = document.createElement("li");
        lista.textContent = listadoAmigos[i];
        verAmigos.appendChild(lista);
    }
}

function sortearAmigo() {
   if(listadoAmigos.length === 0){
    alert("agrega amigos para jugar");
    return;
   }
   let sorteoDeAmigos = listadoAmigos[Math.floor(Math.random() * listadoAmigos.length)];
   let resultado = document.getElementById("resultado");
   resultado.innerHTML = `tu amigo sorteado es ${sorteoDeAmigos}`; 
}

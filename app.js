let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


//cambiarle una frase de un h1 con querySlector


function asignarTextoElemento(elemento, texto){
    let elemntoHTML = document.querySelector(elemento);
   elemntoHTML.innerHTML = texto;
   return;

}

console.log(numeroSecreto)
//-----------------------------------------------------------------------------
function verificarIntentos(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
  
    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento("p", `Ganaste, Acertaste el Numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    //el usuario no acerto
    else if(numeroSecreto > numeroDeUsuario){ 
        asignarTextoElemento("p", "El numero secreto es mayor");
    }
    else if(numeroSecreto < numeroDeUsuario){
        asignarTextoElemento("p", "El numero secreto es menor");
    }
    limpiarCaja()
    intentos++
    return;
}

function limpiarCaja(){
    document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = parseInt(Math.floor(Math.random() * numeroMaximo) + 1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","ya se sortearon todos los numeros posibles")
    }
    else{
        // si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }
        else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;    }
        
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "El juego del numero secreto")
    asignarTextoElemento("p", `Escribe un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio
     //generar numero aleatorio
    //inicializar el numero intentos
    condicionesIniciales();
     //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();






//--------------------------------------------------------------------------
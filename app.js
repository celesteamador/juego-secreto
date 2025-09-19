let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        } if (intentos > 4){
            alert(`Llegaste al número máximo de ${intentos} intentos`);
            document.querySelector('#Intentar').setAttribute('disabled','true');
            document.querySelector('#reiniciar').setAttribute('disabled', 'true');
             asignarTextoElemento('h1', 'Fin del Juego');
             asignarTextoElemento('p','Gracias por participar');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
} 

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        document.querySelector('#Intentar').setAttribute('disabled','true');
        asignarTextoElemento('h1', 'Fin del Juego');
    } else {
        //Si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
} 
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!'); 
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

} 
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales(); 
    //desabilitar boton
    document.querySelector('#reiniciar').setAttribute('disabled','true');  

}
condicionesIniciales();
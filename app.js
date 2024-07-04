let numeroSecreto ;
let intento ;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento (elemento,texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroDeUsuario);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(numeroSecreto === numeroDeUsuario);

    console.log(numeroSecreto)
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p', `Has acertado el número en ${intento} ${(intento == 1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        //Usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'El número secreto es menor!');

        }else{
            asignarTextoElemento ('p', 'El número secreto es mayor!');
        }

        intento++;
        console.log(intento);
        limpiarCaja();
    }
    return;
    
}

function limpiarCaja(){
     let valorCaja = document.querySelector('#valorUsuario').value = '';
     
     return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Bienvenido al Juego Secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}` );
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números, generar número secreto, inicializar numero de intentos
    condicionesIniciales();
    //reiniciar juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    


}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si el generado está incluido en la lista
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');

    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
       
}

condicionesIniciales();
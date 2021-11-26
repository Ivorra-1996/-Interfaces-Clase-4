
function crearParrafo(){
    let parrafo = document.createElement('p');
    let textoParrafo = document.createTextNode('BEEP');

    parrafo.appendChild(textoParrafo);

    document.getElementsByTagName('body')[0].appendChild(parrafo);

}
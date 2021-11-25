

var div = document.querySelector("div");


//div.style.background = "Purple";
//div.style.width = "300px";
//div.style.height ="50px";

//div.classList.add("square");

//console.log(div.classList.remove("square"))

//Dato importante a la hora de llamar una funcion, hay que hacerlo sin los parentisis xd.
//Al menos en este caso para que funcione bien la funcion setInterval().
setInterval(tieneClase,1000);

//function tieneClase() {
//    console.log("llamo a la funcion")
//    if (div.classList.contains("square")){
//        div.classList.remove("square")
//        console.log("entro en el if")
//    }
//    else{
//        div.classList.add("square")
//        console.log("entro en el else")
//    }
//}

function tieneClase() {
    div.classList.toggle("square")
}
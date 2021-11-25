
var divSource = document.getElementById("source");


function cambiarTextoDelSegundoDiv() {
    var divDestination = document.getElementById("destination");
    if(divDestination.textContent === divSource.textContent){
        divDestination.textContent = "Como estas?."
    }
    else{
        divDestination.textContent = divSource.textContent;
    }
}

setInterval(cambiarTextoDelSegundoDiv,1000);

document.getElementById("gg").id = "swap_1";
document.getElementById("null").id = "swap_2";

// Cómo podemos intercambiar el texto entre los dos swaps?
function cambiarTextoDivs() {
    var divText1 = document.getElementById("swap_1").textContent;
    var divText2 = document.getElementById("swap_2").textContent;
    //condicion1 = ea - oa -> oa - oa
    // oa - oa = oa - ea 
    // oa - ea = ea - oa 
    if(divText1 != divText2){
        if(divText1 == "EAEAEAEAE" && divText2 == "OAOAOA"){
            document.getElementById("swap_1").textContent = "OAOAOA"
            document.getElementById("swap_2").textContent = "EAEAEAEAE"
        }
        else{
            document.getElementById("swap_1").textContent = "EAEAEAEAE"
            document.getElementById("swap_2").textContent = "OAOAOA"
        }
    }
}
setInterval(cambiarTextoDivs,1000);
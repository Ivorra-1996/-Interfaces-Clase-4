var listaParrafos = document.querySelectorAll("p#parrafo")

for(var i=0; i<listaParrafos.length; i++){
    listaParrafos[i].addEventListener("click",function(){
        this.classList.toggle("resaltador")
    })
}

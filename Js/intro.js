alert ("Pulse aceptar para entrar a la pagina URBANCHIC");


function cargar() {
    const sonidos = document.getElementById('sonidos') ;

 document.addEventListener('keydown', function (evento){
     if (evento.KeyCode ==32) {
         sonidos.innerHTML= '<audio src="audios/pajaritos.mp3" autoplay></audio>'; 
         }
 }) 

}
var Parrafo=Document.Create
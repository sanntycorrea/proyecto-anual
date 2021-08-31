alert ("Pulse aceptar para entrar a la pagina URBANCHIC");


const sonidos= document.getElementById('sonidos') ;

 document.addEventListener('keydown', function (evento){
     if (evento.KeyCode ==32) {
         sonidos.innerHTML= '<audio src="sonidos.pajaritos.mp3" autoplay¿></audio>'; 
         }
 }) 

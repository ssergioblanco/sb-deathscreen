$(function(){
      console.log("SB-DEATHSCREEN INICIADO")
  }); 

window.onData = function(data) {

      if (data.setDisplay == true) {
            $(".recuadro").css('display', 'flex');
        
      } else {
            $(".recuadro").css('display', 'none');
      }
      
}


window.onload = function(e) {
    window.addEventListener('message', function(event) {
        onData(event.data)
    });
}
function tocaSom(seletorAudio) {
   const elemento =  document.querySelector(seletorAudio);
        
    if (elemento  && elemento.localName === 'audio'){
        elemento.currentTime = 0;
        elemento.play();
       
   } else {
        console.log('Elemento não encontrado ou seletor invalido');
        }
}




const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador<listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    //template string
    const idAudio = `#som_${instrumento}`

    listaDeTeclas[contador].onclick = function(){

        tocaSom(idAudio);

    };
    tecla.onkeydown = function(evento){
        console.log(evento.code);
        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
            console.log('funcionou, a tecla pressionada foi: '+ evento.code);
        } else{
            console.log('Não funcionou pq a tecla pressionada foi: '+ evento.key +', seu bobão');
        }

    };
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    };

}


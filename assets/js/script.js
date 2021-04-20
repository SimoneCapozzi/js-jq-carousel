$(function(){

  var frecciaAvanti = $('.container i.fas.fa-angle-right');
  var frecciaIndietro = $('.container i.fas.fa-angle-left');

  frecciaAvanti.click(click_avanti);
  frecciaIndietro.click(click_indietro);



  function click_avanti(){
    var imgAttiva = $('.container .box-img img.active' );//prima immagine attiva
    var contatoreAttivo = $('.container .box-2 i.fas.fa-circle.active');//primo pallino attivo

    imgAttiva.removeClass('active');//leviamo la classe attiva all'immagine
    contatoreAttivo.removeClass('active');//leviamo la classe active al contatore

    if(imgAttiva.next('img').length === 0){
      $('.container .box-img img').first().addClass('active');
      $('.container .box-2 i.fas.fa-circle').first().addClass('active');
    }else{
      imgAttiva.next('img').addClass('active');
      contatoreAttivo.next('i.fas.fa-circle').addClass('active');
    }


  }

  function click_indietro(){
    var imgAttiva = $('.container .box-img img.active' );//prima immagine attiva
    var contatoreAttivo = $('.container .box-2 i.fas.fa-circle.active');//primo pallino attivo

    imgAttiva.removeClass('active');//leviamo la classe attiva all'immagine
    contatoreAttivo.removeClass('active');//leviamo la classe active al contatore

    if(imgAttiva.prev('img').length === 0){
      $('.container .box-img img').first().addClass('active');
      $('.container .box-2 i.fas.fa-circle').first().addClass('active');
    }else{
      imgAttiva.prev('img').addClass('active');
      contatoreAttivo.prev('i.fas.fa-circle').addClass('active');
    }


  }

})
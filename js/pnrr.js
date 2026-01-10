$(document).ready(function() {

  $('main').hide().fadeIn(1000);

// Inizializza il carosello
  var $aziendaCarousel = $('#aziendaCarousel').carousel({
    interval: false // Fermo, si muove solo al click
  });

  // Gestione click sulle miniature (Thumbnails)
  $('.carousel-thumbnails button').on('click', function() {
    var slideTo = $(this).attr('data-slide-to');
    $aziendaCarousel.carousel(parseInt(slideTo));
  });

  // Sincronizza miniature quando il carosello gira (con frecce o swipe)
  $aziendaCarousel.on('slide.bs.carousel', function(e) {
    var index = $(e.relatedTarget).index(); // Prende l'indice della prossima slide
    $('.carousel-thumbnails button').removeClass('active');
    $('.carousel-thumbnails button').eq(index).addClass('active');
  });

});


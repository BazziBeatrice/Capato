$(document).ready(function() {

  $('main').hide().fadeIn(1000);

  // Inizializza il carosello
  var $aziendaCarousel = $('#aziendaCarousel').carousel({
    interval: 5000,
    ride: 'carousel',
    pause: 'hover'
  });

  // Gestione click sulle miniature (Thumbnails)
  $('.carousel-thumbnails button').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    var slideTo = parseInt($(this).attr('data-slide-to'), 10);
    if (!isNaN(slideTo)) {
      $aziendaCarousel.carousel(slideTo);
    }
  });

  // Sincronizza miniature quando il carosello gira (con frecce o swipe)
  $aziendaCarousel.on('slide.bs.carousel', function(e) {
    var index = $(e.relatedTarget).index(); // Prende l'indice della prossima slide
    $('.carousel-thumbnails button').removeClass('active');
    $('.carousel-thumbnails button').eq(index).addClass('active');
  });

  function animateBentoNumbers() {
    $('.bento-item .odometer').each(function() {
      var $this = $(this);
      var target = $this.data('target');
      if (target && !$this.data('animated')) {
        $this.text('0');
        setTimeout(function() {
          $this.html(target);
          $this.data('animated', true);
        }, 120);
      }
    });
  }

  var bentoSection = document.querySelector('#numbersSection');
  if (bentoSection && window.IntersectionObserver) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateBentoNumbers();
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(bentoSection);
  } else {
    animateBentoNumbers();
  }

});


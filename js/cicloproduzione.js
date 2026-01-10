$(document).ready(function() {
    
    function activateStep(element) {
        var stepId = $(element).attr('id');
        if (!stepId) return;

        // 1. Gestione Box (Allargamento)
        $('.box').removeClass('active');
        $(element).addClass('active');

        // 2. Gestione Testi
        $('.step-text-box').hide(); 
        $('#' + stepId + '-text-box').fadeIn(300);

        // 3. Gestione Video
        $('video').each(function() {
            this.pause();
            $(this).css('opacity', '0');
        });

        var video = $(element).find('video')[0];
        if (video) {
            $(video).css('opacity', '1');
            video.currentTime = 0;
            video.play().catch(function(e) { console.log("Autoplay prevent", e); });
        }
    }

    function resetToDefault() {
        $('.box').removeClass('active');
        $('.step-text-box').hide();
        $('#step0-text-box').show();
        $('video').each(function() {
            this.pause();
            $(this).css('opacity', '0');
        });
    }

    // EVENTI
    $('.box').on('click', function(e) {
        // Su mobile attiva lo step al click/tap
        if ($(window).width() < 992) {
            activateStep(this);
        }
    });

    $('.box').on('mouseenter', function() {
        // Su desktop attiva all'hover
        if ($(window).width() >= 992) {
            activateStep(this);
        }
    });

    $('.container-cicloproduzione').on('mouseleave', function() {
        // Reset solo su desktop quando esci dal contenitore
        if ($(window).width() >= 992) {
            resetToDefault();
        }
    });
});
$(document).ready(function() {
    // La funzione viene attivata ogni volta che l'utente muove la rotella o trascina la barra
    $(window).scroll(function() {
        
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        // Logica: se la posizione attuale + l'altezza dello schermo 
        // è minore dell'altezza totale del documento meno 200px...
        if (scroll + windowHeight < documentHeight - 200) {
            // ...allora nascondi (perché siamo ancora a metà pagina)
            $("#main-footer-index").fadeOut(300); 
        } else {
            // ...altrimenti mostra (perché siamo arrivati in fondo)
            $("#main-footer-index").fadeIn(300);
        }
    });
});
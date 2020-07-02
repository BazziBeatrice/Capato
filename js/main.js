// JavaScript Document
// navbar background color change on scroll
$(window).scroll(function(){
                        var scroll = $(window).scrollTop();
                        if (scroll < 1000) {$('.nav-bar-transition').css('background','none');}
                        else {  $('.nav-bar-transition').css('background','#a1c7a4');}

                        if (scroll < 800) {$('.nav-bar-transition-colt').css('background','none');}
                        else {  $('.nav-bar-transition-colt').css('background','black');}

                        if (scroll < 400) {$('.full-img').css('visibility','visible');}
                        else {  $('.full-img').css('visibility','hidden');}

                        if (scroll < 1200) {$('#main-footer-index').hide();}
                        else {$('#main-footer-index').show();}
                  })


$('.carousel').carousel({
  interval: 3000
})

var language;

$(document).ready(function(){

// CheckLanguage();
// function CheckLanguage(){
// };
// $("").click(
//   function(){
//     localStorage.setItem(language, "true");
//     CheckLanguage();
//   }

        // category color change on hover and background image change
        //         $(".whiteHover").hover(
        // );

        //this function makes the category image appear on hover
                $("#MAKE").hover(
                        function(){
                                        $("#CategoryContainer").addClass("CategoryImgFadeIn");
                                        $("#CategoryContainer").css("background-image", "url('assets/images/categorie/cat1-black.jpg')")
                                  },

                        function(){     $("#CategoryContainer").removeClass("CategoryImgFadeIn");
                                        $("#CategoryContainer").css("background-image", "none")
                                  }
                );

                 $("#LEAVE").hover(
                        function(){
                                        $("#CategoryContainer").addClass("CategoryImgFadeIn");
                                        $("#CategoryContainer").css("background-image", "url('assets/images/categorie/cat2-black.jpg')")
                                  },

                        function(){
                                $("#CategoryContainer").removeClass("CategoryImgFadeIn");
                                        $("#CategoryContainer").css("background-image", "none")
                                  }
                );
                // 2 categoria
                 $("#SWIM").hover(
                        function(){
                                        $("#CategoryContainer").addClass("CategoryImgFadeIn");
                                        // $("#CategoryContainer").css("background-image", "url('assets/images/categorie/cat3-black.jpg')")
                                        $("#CategoryContainer").css("background-image", "url('assets/images/categorie/cat4-black.jpg')")
                                  },

                        function(){
                                        $("#CategoryContainer").removeClass("CategoryImgFadeIn");
                                        $("#CategoryContainer").css("background-image", "none")
                                  }
                );
                // 1 categoria
                //  $("#FEEL").hover(
                //         function(){
                //                         $("#CategoryContainer").addClass("CategoryImgFadeIn");
                //                         $("#CategoryContainer").css("background-image", "url('assets/images/category04.jpg')")
                //                   },
                //
                //         function(){
                //                         $("#CategoryContainer").removeClass("CategoryImgFadeIn");
                //                         $("#CategoryContainer").css("background-image", "none")
                //                   }
                // );


        //Quantity btn---------------------------------------------------------
                // $(".dropbtn").click(
                //         function() {
                //                         $(".dropdown-content").toggle();
                //                         $(this).toggleClass("noBottom");
                //         }
                // );
                // $(".dropbtn-cart").click(
                //         function() {
                //                         $(this).siblings(".dropdown-content-cart").toggle();
                //                         $(this).toggleClass("noBottom");
                //         }
                // );

        //about--------------------------------------------//

                $("#makeyourpresence").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#makeyourpresence_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#makeyourpresence_hover").css("opacity", "0");
                            }
                );

        // ----------------------
                $(" #feeltheadrenalina").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#feeltheadrenalina_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#feeltheadrenalina_hover").css("opacity", "0");
                            }
                );

        // ----------------------
                $(" #swimagainst").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#swimagainst_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#swimagainst_hover").css("opacity", "0");
                            }
                );

        // ----------------------
                $(" #leaveyourmark").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#leaveyourmark_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#leaveyourmark_hover").css("opacity", "0");
                            }
                );

        //svg mobile--------------------------------------------

    $("#makeyourpresence-mobile").hover(
      function() {
        $(this).css("opacity", "0");
        $("#makeyourpresence_hover-mobile").css("opacity", "1");
      },
      function() {
        $(this).css("opacity", "1");
        $("#makeyourpresence_hover-mobile").css("opacity", "0");
      }
    );

    // ----------------------
    $(" #feeltheadrenalina-mobile").hover(
      function() {
        $(this).css("opacity", "0");
        $("#feeltheadrenalina_hover-mobile").css("opacity", "1");
      },
      function() {
        $(this).css("opacity", "1");
        $("#feeltheadrenalina_hover-mobile").css("opacity", "0");
      }
    );

    // ----------------------
    $(" #swimagainst-mobile").hover(
      function() {
        $(this).css("opacity", "0");
        $("#swimagainst_hover-mobile").css("opacity", "1");
      },
      function() {
        $(this).css("opacity", "1");
        $("#swimagainst_hover-mobile").css("opacity", "0");
      }
    );

    // ----------------------
    $(" #leaveyourmark-mobile").hover(
      function() {
        $(this).css("opacity", "0");
        $("#leaveyourmark_hover-mobile").css("opacity", "1");
      },
      function() {
        $(this).css("opacity", "1");
        $("#leaveyourmark_hover-mobile").css("opacity", "0");
      }
    );

    //Audio
    $("#buttonAudio").click(function(){
        toggleMute();
    });

    //about--------------------------------------------

    $("#makeyourpresence").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#makeyourpresence_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#makeyourpresence_hover").css("opacity", "0");
                            }
                     );

        // ----------------------
        $(" #feeltheadrenalina").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#feeltheadrenalina_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#feeltheadrenalina_hover").css("opacity", "0");
                            }
                     );

        // ----------------------
        $(" #swimagainst").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#swimagainst_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#swimagainst_hover").css("opacity", "0");
                            }
                     );

        // ----------------------
        $(" #leaveyourmark").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#leaveyourmark_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#leaveyourmark_hover").css("opacity", "0");
                            }
                     );


        // ----------------------PAGINA DALLA PRODUZIONE AL TRASPORTO
               $("#step1").hover(
                 function() {
                   $("#step1-image").addClass("step-image");
                   $("#step1-image").css("display", "none");
                   $("#step1-video").addClass("video-step-responsive-ok");
                   $("#step1-video").css("display", "block");
                   $("#step0-text-box").addClass("step-box");
                   $("#step0-text-box").css("display", "none");
                   $("#step1-text-box").addClass("step-box-ok");
                   $("#step1-text-box").css("display", "block");
                 },

                 function() {
                   $("#step1-image").removeClass("step-image");
                   $("#step1-image").css("display", "flex");
                   $("#step1-video").removeClass("video-step-responsive-ok");
                   $("#step1-video").css("display", "none");
                   $("#step0-text-box").removeClass("step-box");
                   $("#step0-text-box").css("display", "block");
                   $("#step1-text-box").removeClass("step-box-ok");
                   $("#step1-text-box").css("display", "none");
                 }
               );
               $("#step2").hover(
                 function() {
                   $("#step2-image").addClass("step-image");
                   $("#step2-image").css("display", "none");
                   $("#step2-video").addClass("video-step-responsive-ok");
                   $("#step2-video").css("display", "block");
                   $("#step0-text-box").addClass("step-box");
                   $("#step0-text-box").css("display", "none");
                   $("#step2-text-box").addClass("step-box-ok");
                   $("#step2-text-box").css("display", "block");
                 },

                 function() {
                   $("#step2-image").removeClass("step-image");
                   $("#step2-image").css("display", "flex");
                   $("#step2-video").removeClass("video-step-responsive-ok");
                   $("#step2-video").css("display", "none");
                   $("#step0-text-box").removeClass("step-box");
                   $("#step0-text-box").css("display", "block");
                   $("#step2-text-box").removeClass("step-box-ok");
                   $("#step2-text-box").css("display", "none");
                 }
               );
               $("#step3").hover(
                 function() {
                   $("#step3-image").addClass("step-image");
                   $("#step3-image").css("display", "none");
                   $("#step3-video").addClass("video-step-responsive-ok");
                   $("#step3-video").css("display", "block");
                   $("#step0-text-box").addClass("step-box");
                   $("#step0-text-box").css("display", "none");
                   $("#step3-text-box").addClass("step-box-ok");
                   $("#step3-text-box").css("display", "block");
                 },

                 function() {
                   $("#step3-image").removeClass("step-image");
                   $("#step3-image").css("display", "flex");
                   $("#step3-video").removeClass("video-step-responsive-ok");
                   $("#step3-video").css("display", "none");
                   $("#step0-text-box").removeClass("step-box");
                   $("#step0-text-box").css("display", "block");
                   $("#step3-text-box").removeClass("step-box-ok");
                   $("#step3-text-box").css("display", "none");
                 }
               );
               $("#step4").hover(
                 function() {
                   $("#step4-image").addClass("step-image");
                   $("#step4-image").css("display", "none");
                   $("#step4-video").addClass("video-step-responsive-ok");
                   $("#step4-video").css("display", "block");
                   $("#step0-text-box").addClass("step-box");
                   $("#step0-text-box").css("display", "none");
                   $("#step4-text-box").addClass("step-box-ok");
                   $("#step4-text-box").css("display", "block");
                 },

                 function() {
                   $("#step4-image").removeClass("step-image");
                   $("#step4-image").css("display", "flex");
                   $("#step4-video").removeClass("video-step-responsive-ok");
                   $("#step4-video").css("display", "none");
                   $("#step0-text-box").removeClass("step-box");
                   $("#step0-text-box").css("display", "block");
                   $("#step4-text-box").removeClass("step-box-ok");
                   $("#step4-text-box").css("display", "none");
                 }
               );
               $("#step5").hover(
                 function() {
                   $("#step5-image").addClass("step-image");
                   $("#step5-image").css("display", "none");
                   $("#step5-video").addClass("video-step-responsive-ok");
                   $("#step5-video").css("display", "block");
                   $("#step0-text-box").addClass("step-box");
                   $("#step0-text-box").css("display", "none");
                   $("#step5-text-box").addClass("step-box-ok");
                   $("#step5-text-box").css("display", "block");
                 },

                 function() {
                   $("#step5-image").removeClass("step-image");
                   $("#step5-image").css("display", "flex");
                   $("#step5-video").removeClass("video-step-responsive-ok");
                   $("#step5-video").css("display", "none");
                   $("#step0-text-box").removeClass("step-box");
                   $("#step0-text-box").css("display", "block");
                   $("#step5-text-box").removeClass("step-box-ok");
                   $("#step5-text-box").css("display", "none");
                 }
               );
               $("#step6").hover(
                 function() {
                   $("#step6-image").addClass("step-image");
                   $("#step6-image").css("display", "none");
                   $("#step6-video").addClass("video-step-responsive-ok");
                   $("#step6-video").css("display", "block");
                   $("#step0-text-box").addClass("step-box");
                   $("#step0-text-box").css("display", "none");
                   $("#step6-text-box").addClass("step-box-ok");
                   $("#step6-text-box").css("display", "block");
                 },

                 function() {
                   $("#step6-image").removeClass("step-image");
                   $("#step6-image").css("display", "flex");
                   $("#step6-video").removeClass("video-step-responsive-ok");
                   $("#step6-video").css("display", "none");
                   $("#step0-text-box").removeClass("step-box");
                   $("#step0-text-box").css("display", "block");
                   $("#step6-text-box").removeClass("step-box-ok");
                   $("#step6-text-box").css("display", "none");
                 }
               );
               $("#step7").hover(
                 function() {
                   $("#step7-image").addClass("step-image");
                   $("#step7-image").css("display", "none");
                   $("#step7-video").addClass("video-step-responsive-ok");
                   $("#step7-video").css("display", "block");
                   $("#step0-text-box").addClass("step-box");
                   $("#step0-text-box").css("display", "none");
                   $("#step7-text-box").addClass("step-box-ok");
                   $("#step7-text-box").css("display", "block");
                 },

                 function() {
                   $("#step7-image").removeClass("step-image");
                   $("#step7-image").css("display", "flex");
                   $("#step7-video").removeClass("video-step-responsive-ok");
                   $("#step7-video").css("display", "none");
                   $("#step0-text-box").removeClass("step-box");
                   $("#step0-text-box").css("display", "block");
                   $("#step7-text-box").removeClass("step-box-ok");
                   $("#step7-text-box").css("display", "none");
                 }
               );


               CheckLanguage();
               function CheckLanguage(){
                 var it = true;
                 if (localStorage.getItem('en') == "true"){
                    it = false;
                 };
                 if (localStorage.getItem('it') == "true"){
                    it = true;
                 }
               };

// var body = document.body;
               //Language//
               $("#switch-en").on("click", function() {
                 $('#switch-en').css("display", "none");
                 $('#switch-it').css("display", "block");
                 closeNav();
                 // localStorage.setItem("body", "en");
                 // localStorage.setItem('en', language);
                 CheckLanguage();
               });

               $("#switch-it").on("click", function() {
               $('#switch-en').css("display", "block");
               $('#switch-it').css("display", "none");
               closeNav();
                // localStorage.setItem('it', language);
                // localStorage.setItem("body", "it");
                CheckLanguage();
               });

});

//Audio button//
function toggleMute() {

    var video=document.getElementById("coverVideo")
    if(video.muted){video.muted = false;
                    $('#buttonAudio').attr('src', "assets/images/icon-mutono.png");
                   }
    else {	video.muted = true;
          $('#buttonAudio').attr('src', "assets/images/icon-mutoyes.png");
         }
    console.log("ok!");
}

//Reviews//
$(".show-more a").on("click", function() {
    var $this = $(this);
    var $content = $this.parent().prev("div.content");
    var linkText = $this.text().toUpperCase();

    if(linkText === "SHOW MORE"){
        linkText = "show less";
        $content.switchClass("hideContent", "showContent", 400);
    }

    else {
        linkText = "show more";
        $content.switchClass("showContent", "hideContent", 400);
    };

    $this.text(linkText);

});


//Menu category//
function showMake() {
    $("#makebtn").css("display", "inline-block");
    $("#leavebtn, #swimbtn, #feelbtn").css("display", "none");
};

function showLeave() {
    $("#leavebtn").css("display", "inline-block");
    $("#makebtn, #swimbtn, #feelbtn").css("display", "none");
};

function showSwim() {
    $("#swimbtn").css("display", "inline-block");
    $("#leavebtn, #makebtn, #feelbtn").css("display", "none");
};

function showFeel() {
    $("#feelbtn").css("display", "inline-block");
    $("#leavebtn, #swimbtn, #makebtn").css("display", "none");
};

//menu
function openNav() {
  document.getElementById("myNav").style.width = "100%";
    $(".overlay-content").css("opacity", "1");
          $('#menuButton').hide();
          $('#exitButton').show();
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  $(".overlay-content").css("opacity", "0");
        $('#menuButton').show();
        $('#exitButton').hide();
}

//LOADER

var loader = document.getElementById("loader");

window.setTimeout(function(){
    loader.style.height="500px";
    loader.style.width="500px";
    loader.style.visibility ="hidden";
}, 2700);

//hover modal coltivazioni----------------------------
// Get the modal
// var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("img-colt");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('img-colt');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('img-colt').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// var modal2 = document.getElementById("myModal2");
// var img2 = document.getElementById("img-colt2");
// var modalImg2 = document.getElementById("img02");
// var captionText2 = document.getElementById("caption2");
// img2.onclick = function(){
//   modal2.style.display = "block";
//   modalImg2.src = this.src;
//   captionText2.innerHTML = this.alt;
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
//hover modal coltivazioni----------------------------

// sessionStorage.setItem('body', 'Tom');

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  // var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}

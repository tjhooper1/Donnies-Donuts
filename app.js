$(document).ready(function (){
    
    $("#arrow").click(function (){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });
    
    $("#about-link").click(function (){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });
    
    $("#gallery").click(function (){
        $('html, body').animate({
            scrollTop: $("#gallery-target").offset().top
        }, 2000);
    });
    
    $("#contact").click(function (){
        $('html, body').animate({
            scrollTop: $(".contact-us").offset().top
        }, 2000);
    });
   
    $(".back-to-top").click(function (){
        $('html, body').animate({
            scrollTop: $(".navbar").offset().top
        }, 2000);
    });
});
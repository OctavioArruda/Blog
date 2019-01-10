AOS.init();

var window_height = $(window).height() / 2;

$(document).on("scroll",function(){

    if($(document).scrollTop() > window_height){
        $("#main-nav").addClass("shrinknav");
    } else {
        $("#main-nav").removeClass("shrinknav");
    }
})
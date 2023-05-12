$(document).ready(function(){
    //scroll to Top
    $(document).on("scroll",function(evt){
        if(($(window).scrollTop()) <400){
            $(".upKey").css("display", "none");
        }
        else{
            $(".upKey").css("display", "block");
        }
    })
    $(".upKey").click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

//slow animation    
var $root = $('html, body');
$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});
});
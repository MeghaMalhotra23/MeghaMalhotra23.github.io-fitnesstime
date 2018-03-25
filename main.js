$(document).ready(function(){
    $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
        if(scroll>=100){
            $(".header").css("position","fixed");
            $(".header").css("z-index","9999");
        }
        else{
            $(".header").css("position","static");
        }
});
    $('.f1_container').click(function() {
    $(this).toggleClass('active');
});

});
$(document).ready(function(){
    $('.fa-code').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function(){
        $('.fa-code').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });
    $('.content').find('button').hover(
        function() {
          $( this ).addClass( "hover" );
        }, function() {
          $( this ).removeClass( "hover" );
        });
    $('.dot1').click(function(){
      $('.gif1').css('display','block');
      $('.gif2').css('display','none');
      $('.gif3').css('display','none');
    }) ; 
    $('.dot2').click(function(){
      $('.gif1').css('display','none');
      $('.gif2').css('display','block');
      $('.gif3').css('display','none');
    }) ; 
    $('.dot3').click(function(){
      $('.gif1').css('display','none');
      $('.gif2').css('display','none');
      $('.gif3').css('display','block');
    }) ; 
   
});
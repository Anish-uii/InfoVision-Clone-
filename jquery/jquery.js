$(document).ready(function(){
  console.log('Doc ready');
  $('.ham-icon').click( function(){
    $('nav ul').show();
    $('.close-icon').show();
    $('.ham-icon').hide();
  });
  $('.close-icon').click( function(){
    $('nav ul').hide();
    $('.close-icon').hide();
    $('.ham-icon').show();
  });
  $(window).resize(function(){
    var win_size = $(window).width();
    if( win_size > 992 ){
      $('nav ul').css('display','flex');
    }
    else 
    $('nav ul').css('display','none');
  });
});
$button = $(".header__button");
$menu = $(".menu")
$body = $("body") 

$(function(){
   $button.on('click', function(){
      $button.toggleClass('pressed');
      $menu.toggleClass('show');
      $body.toggleClass('lock') 
   })
});
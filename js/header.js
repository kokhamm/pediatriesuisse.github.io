$header = $(".header__block")
$(function () {
   window.onscroll = function () { scrollFunction() };

   function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
         $header.addClass('header-thin');
         $menu.addClass('thin');
      } else {
         $header.removeClass('header-thin');
         $menu.removeClass('thin');
      }
   }
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

function someFunc() {
var w = window.innerWidth;
if (w > 992) {
    jQuery('.menu__nav ul').css('display', 'flex'); 
    
}
if (w < 992) {
    jQuery('.menu__nav ul').css('display', 'none'); 
    jQuery('.header__burger').toggleClass("active", false);
     
}
}
window.addEventListener('resize', function() { 
    someFunc();
});


jQuery(document).ready(function() {
    jQuery(".header__burger").click(function() {
        jQuery(this).toggleClass("active");
        jQuery('.btn__custom ').toggleClass('noactive');
        jQuery('.call').toggleClass('noactive');
        jQuery('html').toggleClass('scrollnoactive');
        jQuery('body').toggleClass('scrollnoactive');
        jQuery('.menu__nav ul').slideToggle(300, function(){
        if(jQuery(this).css('display') === "none"){
            jQuery(this).removeAttr('style');
            
        }
        });
    });
}); 

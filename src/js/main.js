$('.dropdown-btn').click(function(e) {
  e.preventDefault()
  var content = $(this).next()
  if(content.is(":hidden")){
    $('.dropdown-btn').removeClass('active')
    $('.mobile-panel__content').hide()
    $(this).addClass('active')
    content.slideDown(250)
  }
  else{
    $(this).removeClass('active')
    content.slideUp(250)
  }
});

$('.main-slider .bxslider').bxSlider({
  mode: 'fade',
  captions: true
});

$(".fancybox").fancybox({
  padding : 0,
  openEffect  : 'elastic',
  closeEffect : 'elastic',
  helpers: {
    overlay: {
      locked: false
    }
  }
});

$.fn.equivalent = function (){
  var $blocks = $(this),
      maxH    = $blocks.eq(0).height(); 
  $blocks.each(function(){
      maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
  });

  $blocks.height(maxH); 
}
$('.product__name.autoheight').equivalent();
$('.product__title.autoheight').equivalent();
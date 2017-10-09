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
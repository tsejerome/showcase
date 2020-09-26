const cursor = document.getElementById("cursor-custom"),
  radius = cursor.offsetHeight / 2;

document.addEventListener("mousemove", (e) => {
  let top = e.clientY - radius,
    left = e.clientX - radius;

  cursor.style = `top: ${top}px; left: ${left}px`;
});

$('.error').draggable();

var error = '<div class="error">' + $('.error').html() + '</div>',
    	x = window.innerWidth / 3,
    y = window.innerHeight / 3;

$('body').on('click', '.ok, .close-button', function() {
  $('body').append(error);
  $('.error').last()
    .css({
      top: y + 'px',
      left: x + 'px'
    })
  			  .draggable();
  
  x+=4; y+=4;
});

$('.continue').click(function(){
  $([document.documentElement, document.body]).animate({
    scrollTop: $(".extra-about-me").offset().top
}, 2000);
})
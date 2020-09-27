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
    scrollTop: $(".tech-stuff-wrapper").offset().top
  }, 2000);
})

$('.close-button').on('click',function(){
  $(this).parents(('.plane')).remove();
})

$(document).on('scroll', function(){
  if(window.scrollY + 300 > $('.extra-about-me-main-wrapper .error.box:last-child').position()){
    const innerTemplate = $('.template.default.chatroom__no-chat__inner-wrapper');
    const innerDom = innerTemplate.clone();
    const template = $(".template.chatroom__no-chat__wrapper");
    const dom = template.clone();
    innerDom.appendTo($('.extra-about-me-wrapper'));
    return dom;
  }
})

$(function () { 
  let menuOpened = false;
  const closeMenu = () =>{
    $('#menu').removeClass('opened')
  }
  const openMenu = () =>{
    $('#menu').addClass('opened')
  }
  const setMenuOpened = () =>{
    if(menuOpened){ 
      closeMenu();
      menuOpened = false;
    } else{
      openMenu();
      menuOpened = true;
    }
  }
  $('.hamburger-trigger').click(function(){
    setMenuOpened();
  })
  
  $('.main').on('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    if(menuOpened){
      setMenuOpened();
    }
  })
});



// (function () {
//   var body, bodyClick, button, container;

//   button = $('.hamburger-trigger');

//   container = $('.container');

//   body = $('body');

//   bodyClick = function (event) {
//     if (!$(event.target).closest('.menu').length) {
//       body.off('click');
//       return container.toggleClass('menu-open');
//     }
//   };

//   button.on('click', function (event) {
//     event.stopPropagation();
//     event.preventDefault();
//     setTimeout(function () {
//       container.toggleClass('menu-open');
//     }, 25);
//     return body.on('click', function (event) {
//       if (container.hasClass('menu-open')) {
//         return bodyClick(event);
//       }
//     });
//   });

// }).call(this);

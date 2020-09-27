
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

let agent;
let agentSpeaked = false;
$(function () { 
  let menuOpened = false;
  const closeMenu = () =>{
    $('#menu').removeClass('opened')
  }
  
  function animate(agent, animations){  
    
    function doneCallback(animation){
      // console.log('done ' + animation);
    }
    
    let statesText = animations.join(' '),
        $state = $('.js-state'),
        $states = $('.js-states');
      
    for(var i = 0; i<animations.length; i++){      
      ((index)=>{
        setTimeout(_=>{
          let animation = animations[index];
          let currentStateInStates = statesText.replace(animation, `<b>${animation}</b>`);
          $state.text(animation);                
          $states.html(currentStateInStates);
          agent.play(animation, undefined, doneCallback.bind(null, animation));  
        }, index*8000);
      })(i);        
    }
  }
  
  const agentSpeaking = () => {
    const animations = agent.animations();    
    agent.moveTo(170,(window.innerHeight || document.body.clientHeight)-113);
    

    setTimeout(animate.bind(null, agent, animations), 8000);        
  
    setTimeout(function() {
      agent.speak("hmmm...");
      setTimeout(function() {
        agent.speak("Looks like you're trying to explore things about Jerome?");
      },1000)
    },1000)  
  }
  const openMenu = () =>{
    $('#menu').addClass('opened');
    let clippyBoi = document.getElementsByClassName('clippy')[0];
    let clippyBoiSays = document.getElementsByClassName('clippy-balloon')[0];
   
    if(!agentSpeaked) agentSpeaking();
    agentSpeaked = true;
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
  function runClippy(clippy) {
    agent = clippy;
    let clippyBoi = document.getElementsByClassName('clippy')[0];
    let clippyBoiSays = document.getElementsByClassName('clippy-balloon')[0];
  
    $('.nav-inner-wrapper').append($(clippyBoi));
    $('.nav-inner-wrapper').append($(clippyBoiSays));
    agent.show();
    
  
    // add stuff here:
  }  
  clippy.load('Clippy', runClippy);
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

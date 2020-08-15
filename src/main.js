import ScrollMagic from 'scrollmagic';

//Hamburger
$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });

  $("#nav-icon3").click(function() {
    $(".overlay_burger").toggleClass("slide_in");
  });

});

//Contact
$(function() {
  $(".header").hover(function() {
    $(".overlay").toggleClass("slide_in");
  });
});

//Image Tags
$(function() {
  $(".relative").hover(function() {
    $(this).children('.tag_animation').toggleClass("slide_in");
  });
});

//Smooth Scrolling Index
$(".hero_text_sticky_inner").click(function() {
    $('html').animate({
        scrollTop: $("body").offset().top
    }, 400);
});

//Flickity Carousel Interactivity
$(document).ready(function(){
    $('.container_slides').flickity({
    	prevNextButtons: false,
    	pageDots: true,
    	autoPlay: false,
    	dragThreshold: 8,
    	rightToLeft: false,
        wrapAround: true,
        cellAlign: 'right',
    });
  });




//Circle follows Cursor
jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 100;
    mouseY = e.pageY - 100; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/9);
    yp += ((mouseY - yp)/9);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);

    //Toggle color change circle
    $(".hwan").hover(function () {
        $(".circle").toggleClass("bg_2");
    });
    $(".hobby").hover(function () {
        $(".circle").toggleClass("bg_1");
    });
    $(".giriboy").hover(function () {
        $(".circle").toggleClass("bg_giriboy");
    });
    $(".movies").hover(function () {
        $(".circle").toggleClass("bg_movies");
    });
    $(".sneakers").hover(function () {
        $(".circle").toggleClass("bg_sneakers");
    });
    $(".spaghetti").hover(function () {
        $(".circle").toggleClass("bg_spaghetti");
    });
    $(".frank").hover(function () {
        $(".circle").toggleClass("bg_frank");
    });
    $(".neon").hover(function () {
        $(".circle").toggleClass("bg_1");
    });

    $(".pinkify").hover(function () {
        $(".circle").toggleClass("bg_1");
    });
    

});




   //show after certain distance
$(window).scrollTop($(window).scrollTop()+1);

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 400) {
    $('.circle').fadeIn();
  } else {
    $('.circle').fadeOut();
  }
});

    //Contact Header
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.header').fadeIn();
  } else {
    $('.header').fadeOut();
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.header_projects').fadeIn();
  } else {
    $('.header_projects').fadeOut();
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.burger').fadeIn();
  } else {
    $('.burger').fadeOut();
  }
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.overlay_burger').fadeIn();
  } else {
    $('.overlay_burger').fadeOut();
  }
});


//ScrollMagic

$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    //Loop
    $('.hobby').each(function(){

        var newScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.8,
            reverse: true
        })
        .setClassToggle(this, 'slide_in')
        .addTo(controller);
    });

    //Loop
    $('.hobby_secondary').each(function(){

        var newScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.8,
            reverse: true
        })
        .setClassToggle(this, 'slide_in')
        .addTo(controller);
    });

    //Loop Projects Page
    $('.s_magic').each(function(){

        console.log(this);

        var newScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.9,
            reverse: false
        })
        .setClassToggle(this, 'slide_in')
        .addTo(controller);
    });
    
});
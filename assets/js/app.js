'use strict';
$(function(){
  function collapseNavbar() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else if(!$(".navbar-toggle").hasClass("active")) {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  }

  $(window).scroll(collapseNavbar);
  $(document).ready(collapseNavbar);

  $(".navbar-toggle").on("click", function () {
      $(this).toggleClass("active");
      if($(this).hasClass("active")){
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      }
      else if($(".navbar").offset().top <= 50){
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });


  //Slick scripts
  $('.banner-content-slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed : 1000,
      dots: true,
      asNavFor: '.banner-background-slick',
      arrows:false
  });

  $('.banner-background-slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade : true,
      arrows : false,
      speed : 1000,
      asNavFor: '.banner-content-slick'
  });



  $('.service-slick').slick({
      autoplay: false,
      speed : 500
  });

  $('.comments-slick').slick({
      dots: false,
      autoplay: true,
      speed : 500,
      slidesToShow: 3,
      slidesToScroll : 3,
      arrows : false
  });

  $('.comments-slick-mobile').slick({
      dots: false,
      autoplay: true,
      speed : 500,
      slidesToShow: 1,
      slidesToScroll : 1,
      arrows : false
  });    

  $('.services-list-slick').slick({
      autoplay: false,
      arrows : false,
      slidesToScroll : 1,
      slidesToShow : 3
  });

  $('.services-list-slick-mobile').slick({
      autoplay: false,
      arrows : false,
      slidesToScroll : 1,
      slidesToShow : 1
  });

  $('#team-slick').slick({
      arrows:true,
      slidesToShow: 3
  });

  $('#team-slick-mobile').slick({
      arrows:false,
      slidesToShow: 1
  });

  var durationList = $('.banner-content-slick').map(function(index, item) {
      return item.getAttribute('data-time');
  });

  var slideIndex = 0;
  var changeSlide = function(timing) {
      setTimeout(function() {
          if (timing !== 0) {
              $('.banner-content-slick').slick('slickNext');
          }
          if (slideIndex >= durationList.length) slideIndex = 0;
              changeSlide(durationList[slideIndex++]);
      
      }, timing);
  }
  changeSlide(0);

  var durationListService = $('.services-list-slick').map(function(index, item) {
      return item.getAttribute('data-time');
  });

  var slideIndex1 = 0;
  var changeSlide1 = function(timing) {
      setTimeout(function() {
          if (timing !== 0) {
              $('.services-list-slick').slick('slickNext');
          }
          if (slideIndex1 >= durationListService.length) slideIndex1 = 0;
              changeSlide1(durationListService[slideIndex1++]);
      
      }, timing);
  }
  changeSlide1(0);

  var durationListService1 = $('.services-list-slick-mobile').map(function(index, item) {
      return item.getAttribute('data-time');
  });

  var slideIndex2 = 0;
  var changeSlide2 = function(timing) {
      setTimeout(function() {
          if (timing !== 0) {
              $('.services-list-slick-mobile').slick('slickNext');
          }
          if (slideIndex2 >= durationListService1.length) slideIndex2 = 0;
              changeSlide2(durationListService1[slideIndex2++]);
      
      }, timing);
  }
  changeSlide2(0);

  $('a.nav-link').click(function(e){
  // prevent default action
  e.preventDefault();

  // get id of target div (placed in href attribute of anchor element)
  // and pass it to the scrollToElement function
      // also, use 2000 as an argument for the scroll speed (2 seconds, 2000 milliseconds)
  scrollToElement( $(this).attr('href'), 1000 );
  });

  var scrollToElement = function(el, ms){
      var speed = (ms) ? ms : 600;
      $('html,body').animate({
          scrollTop: $(el).offset().top
      }, speed);
  };

  $(document).ready(function(){
    $('.instructorCarousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true
    });
  });
});
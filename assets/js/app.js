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

});

(function () {
  var vm = this;

  $(document).ready(function(){
    $('.hero-slider').slick({
      accessibility: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: 'ease',
      easing: 'linear',
      infinite: true,
      pauseOnHover: true,
      speed: 300

    });
  });
  var hideMenu = function() {
    if ( document.getElementById("navigation").className.match(/(?:^|\s)hide-menu(?!\S)/) ) {
      document.getElementById("navigation").className =
        document.getElementById("navigation").className.replace
        ( /(?:^|\s)hide-menu(?!\S)/g , '' )
        console.info('menu closed');
    }
    else {
      document.getElementById("navigation").className += " hide-menu";
      console.info('menu open');
    }
  }
  var initializeParallax = function(){
    if ($(window).width() < 600 && vm.parallaxOn) {
      turnOffParallax();
    }
    else if ($(window).width() >= 600 && !vm.parallaxOn){
      turnOnParallax();
    }
  }
  var turnOnParallax = function(){
      console.log("Turn on parallax")
      vm.parallaxOn = true;
      vm.pwindow = new Rellax('.parallax-window',{
        center: true,
        speed: -6,
        percentage: .5
      });
      vm.pslider = new Rellax('.parallax-slider',{
        center: true,
        speed: -1,
        percentage: .9
      });
  }
  var turnOffParallax = function() {
      console.log("Turn off parallax")
      vm.parallaxOn = false;
      vm.target = document.querySelectorAll('.parallax-window');
      Array.prototype.forEach.call(target, function(element){
        element.removeAttribute('style');
      });
      vm.pwindow.destroy();
      vm.target = document.querySelectorAll('.parallax-slider');
      Array.prototype.forEach.call(target, function(element){
        element.removeAttribute('style');
      });
      vm.pslider.destroy();
  }
  $(window).resize(function() {
    initializeParallax();
  });
  initializeParallax();
  window.onload = function() {
    document.getElementById("menu-icon").addEventListener( 'click' , hideMenu );
  }
})();

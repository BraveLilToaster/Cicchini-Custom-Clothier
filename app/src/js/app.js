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

window.onload = function() {
  document.getElementById("menu-icon").addEventListener( 'click' , hideMenu );
}

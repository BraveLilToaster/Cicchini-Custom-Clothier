(function () {
  var vm = this;

  // Toggle Nav Menu
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

  // Homepage Slider
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

  // Parallax
  $('.parallax-window').parallax({
    naturalWidth: 600,
    naturalHeight: 400,
    iosFix: true,
    androidFix: true
  });

// Smooth Scrolling
  smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 80, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
  });

  // Modal
  var modal = document.getElementById('modal');

  var btn = document.getElementById("myBtn");

  var span = document.getElementsByClassName("modal-close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  window.onload = function() {
    document.getElementById("menu-icon").addEventListener( 'click' , hideMenu );
  }
})();

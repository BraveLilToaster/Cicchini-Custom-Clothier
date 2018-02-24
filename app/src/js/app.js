(function(){

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


// masonry
var msnry = (function() {
  var masonry
  var galleryContainer
  return {
    load: function(id, gridClass, gridItemClass){
      galleryContainer = document.getElementById(id);
      galleryContainer.setAttribute('class', gridClass)
      masonry = new Masonry( galleryContainer, {
        itemSelector: '.'+gridItemClass,
        percentPosition: true,
      })
    },
    layout: function(gridItemClass){
      imagesLoaded( galleryContainer ).on( 'progress', function() {
        masonry.layout()
      })
    },
    append: function(elements){
      masonry.appended(elements)
      msnry.layout()
    },
    removeAll: function(elements){
      elements = masonry.getItemElements()
      masonry.remove(elements)
    }
  }
})();

// lightGallery
loadLightGallery = function(){
  lightGallery(document.getElementById('test-gallery'), {
    thumbnail:true,
    animateThumb: false,
    showThumbByDefault: false,
    selector: '.gallery-grid-item',
  });
}

loadGallery = function(id, category){
  return new Promise(function(res,rej){
      var galleryDom = document.getElementById(id);
      var galleryImages = {
        suits: [
          'Cicchini Custom Clothier Photos Web Size-41.jpg',
          'Cicchini Custom Clothier Photos Web Size-80.jpg',
          'Cicchini Custom Clothier Photos Web Size-84.jpg',
          'Cicchini Custom Clothier Photos Web Size-25.jpg',
          'Cicchini Custom Clothier Photos Web Size-92.jpg',
          'Cicchini Custom Clothier Photos Web Size-105.jpg',
          'Cicchini Custom Clothier Photos Web Size-115.jpg',
          'Cicchini Custom Clothier Photos Web Size-125.jpg',
        ],
        shirts: [
          'Cicchini Custom Clothier Photos Web Size-92.jpg',
          'Cicchini Custom Clothier Photos Web Size-105.jpg',
          'Cicchini Custom Clothier Photos Web Size-115.jpg',
          'Cicchini Custom Clothier Photos Web Size-125.jpg',
        ],
      }
    msnry.append(
      galleryImages.suits.map(function(imageSrc){
        var galleryImageContainer = document.createElement('div')
        galleryImageContainer.setAttribute('class', 'gallery-grid-item');
        galleryImageContainer.setAttribute('data-src', 'img/'+imageSrc);
        var galleryImage = document.createElement('img')
        galleryImage.setAttribute('src', 'img/'+imageSrc);
        galleryImageContainer.appendChild(galleryImage)
        galleryDom.appendChild(galleryImageContainer)
        return galleryImageContainer
      })
    )
  })
}

function initGallery(galleryID, galleryCategory){
  msnry.load(galleryID, 'gallery-grid', 'gallery-grid-item')
  loadGallery(galleryID, galleryCategory)
  loadLightGallery()
}

initGallery('test-gallery', 'suits')

// Parallax
$('.parallax-window').parallax({
  naturalWidth: 600,
  naturalHeight: 400,
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
var modal = (function() {
 var modal = null;
 var modalId = "modal";
 var modalOverlay = "modal-overlay";
 var closeBtn = "modal-close";
 var delay = 0;

  var open = function(d, delay) {
    console.log(typeof d);
    if((typeof d) === "string"){
      console.log(d);
      modalId = d;
      delay = delay;
    }
    else if((typeof d) === "object"){
      console.log(d);
      modalId = d.getAttribute("data-modal-id");
      delay = d.getAttribute("data-modal-delay")
    }
    modal = $('#' + modalId);
    setTimeout(function(){
        modal.show();
      },
      parseInt(delay)
    );
    modal.prepend('<div class="modal-overlay"></div>');
    closeBtn = modal.find('.modal-close');
    closeBtn.on("click", closeBtn, close);
    modalOverlay = modal.find('.modal-overlay');
    modalOverlay.on("click", close);
  }
  var close = function() {
    modalOverlay.remove();
    modal.hide();
  }
  return {
    open: open,
    close: close
  };
})()

window.onload = function() {
  document.getElementById("menu-icon").addEventListener( 'click' , hideMenu );
}
})();

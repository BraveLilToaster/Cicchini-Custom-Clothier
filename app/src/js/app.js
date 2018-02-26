(function(){

var galleries = [
  {
    'name': 'lookbook',
    'id': 'lookbook-gallery',
    'defaultCategory': 'all',
    'gridClass': 'gallery-grid',
    'gridItemClass': 'gallery-grid-item',
    'images': {
      'all': [],
      'formalWear': [
        'Cicchini Custom Clothier Photos Web Size-115.jpg',
        'Cicchini Custom Clothier Photos Web Size-125.jpg',
      ],
      'suits': [
        'Cicchini Custom Clothier Photos Web Size-41.jpg',
        'Cicchini Custom Clothier Photos Web Size-80.jpg',
        'Cicchini Custom Clothier Photos Web Size-84.jpg',
        'Cicchini Custom Clothier Photos Web Size-25.jpg',
      ],
      'shirts': [
        'Cicchini Custom Clothier Photos Web Size-92.jpg',
        'Cicchini Custom Clothier Photos Web Size-105.jpg',
      ],
    }
  },
]

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
    build: function(id, category, images){
      msnry.append(
        images.map(function(imageSrc){
          var galleryImageContainer = document.createElement('div')
          galleryImageContainer.setAttribute('class', 'gallery-grid-item');
          galleryImageContainer.setAttribute('data-src', 'img/'+imageSrc);
          var galleryImage = document.createElement('img')
          galleryImage.setAttribute('src', 'img/'+imageSrc);
          galleryImageContainer.appendChild(galleryImage)
          galleryContainer.appendChild(galleryImageContainer)
          return galleryImageContainer
        })
      )
    },
    remove: function(elements){
      masonry.remove(elements)
    },
    removeAll: function(elements){
      elements = masonry.getItemElements()
      masonry.remove(elements)
    }
  }
})();

// lightGallery
var lGallery = (function() {
  var galleryID
  return {
    load: function(gID, gallerySelector){
      galleryID = document.getElementById(gID)
      lightGallery(document.getElementById(gID), {
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false,
        selector: '.'+gallerySelector,
        mode: 'lg-fade',
        cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)',
      })
    },
    destroy: function() {
      window.lgData[galleryID.getAttribute('lg-uid')].destroy(true)
    },
    reload: function(gID, gallerySelector) {
      lGallery.destroy()
      lGallery.load(gID, gallerySelector)
    },
  }
})();

var Gallery = (function(){
  var gallery
  return {
    init: function(galleries, galleryName){
      gallery = galleries.find(function(gallery){
        return gallery.name === galleryName
      })
      gallery.images.all = Object.values(gallery.images)
        .reduce(function(a, b){
          return a.concat(b)
        })
      msnry.load(gallery.id, gallery.gridClass, gallery.gridItemClass)
      msnry.build(gallery.id, gallery.defaultCategory, gallery.images[gallery.defaultCategory])
      lGallery.load(gallery.id, gallery.gridItemClass)
      document.getElementById("filterAll").addEventListener("click", function(){
        Gallery.filter(gallery.id, "all", gallery.images)
      });
      document.getElementById("filterShirts").addEventListener("click", function(){
        Gallery.filter(gallery.id, "shirts", gallery.images)
      });
      document.getElementById("filterSuits").addEventListener("click", function(){
        Gallery.filter(gallery.id, "suits", gallery.images)
      });
      document.getElementById("filterFormalWear").addEventListener("click", function(){
        Gallery.filter(gallery.id, "formalWear", gallery.images)
      });
    },
    filter: function(galleryID, galleryCategory, images){
      msnry.removeAll()
      msnry.build(galleryID, galleryCategory, images[galleryCategory])
      lGallery.reload(galleryID, gallery.gridItemClass)
    },
  }

})();

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
Gallery.init(galleries, "lookbook")

})();

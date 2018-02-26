
var loadImagesFromSrc = function(imgSrc, imgNum, ext){
  return Array.apply(null, Array(imgNum))
    .map(function(val, idx){
      return imgSrc + (idx+1) + ext
    })
    .reverse()
}

var galleries = [
  {
    'name': 'lookbook',
    'id': 'lookbook-gallery',
    'defaultCategory': 'all',
    'gridClass': 'gallery-grid',
    'gridItemClass': 'gallery-grid-item',
    'images': {
      'all': [],
      'formalWear': loadImagesFromSrc('img/Cicchini Custom Clothier - Formal Wear - ', 13, '.jpg'),
      'suits': loadImagesFromSrc('img/Cicchini Custom Clothier - Custom Suits - ', 52, '.jpg'),
      'shirts': loadImagesFromSrc('img/Cicchini Custom Clothier - Shirts - ', 34, '-min.jpg'),
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
          galleryImageContainer.setAttribute('data-src', imageSrc);
          var galleryImage = document.createElement('img')
          galleryImage.setAttribute('src', imageSrc);
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
      setTimeout(function(){lGallery.load(gID, gallerySelector)},1000)
    },
  }
})();

var Gallery = (function(){
  var gallery
  var category
  return {
    init: function(galleries, galleryName){
      gallery = galleries.find(function(gallery){
        return gallery.name === galleryName
      })
      category = gallery.defaultCategory
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
      if(category !== galleryCategory){
        category = galleryCategory
        msnry.removeAll()
        msnry.build(galleryID, galleryCategory, images[galleryCategory])
        lGallery.reload(galleryID, gallery.gridItemClass)
      }
    },
  }

})();

// Parallax
$('.parallax-window').parallax({
  naturalWidth: 600,
  naturalHeight: 400,
});

// Smooth Scrolling
var scroll = new SmoothScroll('[data-scroll]',{
  header: null,
  speed: 800,
  easing: 'easeInOutCubic',
  offset: 80,
});

// Modal
var modal = (function() {
  var modal = null;
  var modalId = "modal";
  var modalOverlay = "modal-overlay";
  var closeBtn = "modal-close";
  var delay = 0;

  var open = function(d, delay) {
    if((typeof d) === "string"){
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


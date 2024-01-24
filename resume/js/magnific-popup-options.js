$(document).ready(function() {
  // MagnificPopup
  var magnifPopup = function() {
    $('.image-popup').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it!!

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', 
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        //don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };

  
  // Call the functions 
  magnifPopup();

});
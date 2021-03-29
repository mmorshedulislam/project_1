

// ===OWL OLD====

$(document).ready(function(){

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    
    
       
    
});


// INTERNATIONAL TEL

$('#telephone').intlTelInput({
		initialCountry: "auto",
		geoIpLookup: function(callback){
			jQuery.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp){
				var countryCode = (resp && resp.country) ? resp.country : "";
				callback(countryCode); 
			});
		},
		utilsScript: 'js/utils.js'
	});


/*

//==SLICK SLIDER==

$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

*/









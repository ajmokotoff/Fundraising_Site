jQuery(function ($) {

    'use strict';

	// ----------------------------------------------
    // Table of index
    // ----------------------------------------------

    /*-----------------------------------------------
    # Slider Height
    # Menu Toggle
    # Menu Scrolling
	# Animated Progress bar
    # Parallax Scroll
    # Fun Fact Timer
    # Pretty Photo
    # Portfolio Filter
    # Style Chooser
    # Google Map Customization
    -------------------------------------------------*/

	 // ----------------------------------------------
    // # Demo Chooser
    // ----------------------------------------------

    (function() {

		$('.demo-chooser .toggler').on('click', function(event){
			event.preventDefault();
			$(this).closest('.demo-chooser').toggleClass('opened');
		})

    }());


	// ----------------------------------------------
    // Slider images Source
    // ----------------------------------------------
	(function () {
		$('#slider-section').vegas({
			slides: [
				{ src: 'images/slider/0.jpg' },
				{ src: 'images/slider/1.jpg' },
				{ src: 'images/slider/2.jpg' },
				{ src: 'images/slider/3.jpg' },
			]
		});
	}());



	// ----------------------------------------------
    // Parallax Scrolling
    // ----------------------------------------------

	(function () {
		function parallaxInit() {
			$("#help-overview").parallax("50%", 0.3);
			$("#video-section").parallax("50%", 0.3);
			$("#who-we-are").parallax("50%", 0.3);
		}
		parallaxInit();
	}());

	// ----------------------------------------------
    // Payment-select
    // ----------------------------------------------
	(function () {
		$('.payment-select').on("click",function(){
			$(this).addClass('active').parent().siblings().children().removeClass('active');
		});
	}());

	// ----------------------------------------------
    // Magnific Popup
    // ----------------------------------------------

	(function () {
		$('#photo-gallery .image-link').magnificPopup({
			gallery: {
			  enabled: true
			},
			type: 'image'
		});
		$('.video-link').magnificPopup({type:'iframe'});
	}());



	// ----------------------------------------------
    // # Google Map Customization
    // ----------------------------------------------


	(function(){

		var map;

		map = new GMaps({
			el: '#gmap',
			lat: 42.274806,
			lng: -71.8072616,
			scrollwheel:false,
			zoom: 16,
			zoomControl : true,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});

		var image = 'images/map-icon.png';
		map.addMarker({
			lat: 42.274806,
			lng: -71.8072616,
			icon: image,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#d3cfcf',
			 infoWindow: {
				content: '<div class="map-info"><address>The Lodge<br />99 Salisbury Street<br />Worcester, MA 01609</address></div>',
				borderColor: 'red',
			}
		});

		var styles = [

			{
			  "featureType": "road",
			  "stylers": [
				{ "color": "#000000" }
			  ]
			  },{
			  "featureType": "landscape",
			  "stylers": [
				{ "color": "#141414" }
			  ]
			  },{
			  "elementType": "labels.text.fill",
			  "stylers": [
				{ "color": "#808080" }
			  ]
			  },{
			  "featureType": "poi",
			  "stylers": [
				{ "color": "#161616" }
			  ]
			  },{
			  "elementType": "labels.text",
			  "stylers": [
				{ "saturation": 1 },
				{ "weight": 0.1 },
				{ "color": "#7f8080" }
			  ]
			}

		];

		map.addStyle({
			styledMapName:"Styled Map",
			styles: styles,
			mapTypeId: "map_style"
		});

		map.setStyle("map_style");
	}());


});

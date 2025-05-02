// jQuery(document).ready(function($) {
//
// 	'use strict';
//
//
//     // Multi-Toggle Navigation
//     $(function() {
//       $('body').addClass('js');
//         var $menu = $('#menu'),
//           $menulink = $('.menu-link'),
//           $menuTrigger = $('.has-subnav');
//
//       $menulink.on("click", function(e) {
//         e.preventDefault();
//         $menulink.toggleClass('active');
//         $menu.toggleClass('active');
//       });
//
//       $menuTrigger.on("click", function(e) {
//         e.preventDefault();
//         var $this = $(this);
//         $this.toggleClass('active').next('ul').toggleClass('active');
//       });
//
//     });
//
//     //***************************
//     // BannerOne Functions
//     //***************************
//       jQuery('.hotmeal-banner').slick({
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           autoplay: true,
//           autoplaySpeed: 2000,
//           infinite: true,
//           dots: false,
//           arrows: false,
//           fade: true,
//           responsive: [
//                 {
//                   breakpoint: 1024,
//                   settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                   }
//                 },
//                 {
//                   breakpoint: 800,
//                   settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                   }
//                 },
//                 {
//                   breakpoint: 400,
//                   settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                   }
//                 }
//               ]
//         });
//
//       //***************************
//     // CartToggle Function
//     //***************************
//     jQuery('.hotmeal-user-list li a.fa-shopping-bag').on("click", function(){
//           jQuery('.hotmeal-cart-box').fadeToggle('slow');
//           return false;
//       });
//       jQuery('html').on("click", function() { jQuery(".hotmeal-cart-box").fadeOut(); });
//
// $(function () {
//           $('[data-toggle="tooltip"]').tooltip()
//         })
//     //***************************
//     // BannerOne Functions
//     //***************************
//       jQuery('.hotmeal-testimonial').slick({
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           autoplay: true,
//           autoplaySpeed: 2000,
//           infinite: true,
//           dots: true,
//           prevArrow: "<span class='slick-arrow-left'><i class='icon hotmeal-arrows32'></i></span>",
//           nextArrow: "<span class='slick-arrow-right'><i class='icon hotmeal-arrows32'></i></span>",
//           fade: false,
//           responsive: [
//                 {
//                   breakpoint: 1024,
//                   settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                   }
//                 },
//                 {
//                   breakpoint: 800,
//                   settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                   }
//                 },
//                 {
//                   breakpoint: 400,
//                   settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                   }
//                 }
//               ]
//         });
//     //***************************
//     // BannerOne Functions
//     //***************************
//       jQuery('.hotmeal-blog-medium-slide').slick({
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           autoplay: true,
//           autoplaySpeed: 2000,
//           infinite: true,
//           dots: true,
//           arrows: false,
//           fade: false,
//           responsive: [
//                 {
//                   breakpoint: 1024,
//                   settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                   }
//                 },
//                 {
//                   breakpoint: 800,
//                   settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                   }
//                 },
//                 {
//                   breakpoint: 400,
//                   settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                   }
//                 }
//               ]
//         });
//
//       //***************************
//     // Progressbar Function
//     //***************************
//     jQuery('.progressbar1').progressBar({
//       percentage : false,
//       animation : true,
//       backgroundColor : "",
//       barColor : "",
//       height : "2",
//     });
//
//
//       //***************************
//     // ThumbSlider Functions
//     //***************************
//     jQuery('.hotmeal-shop-thumb').slick({
//           slidesToShow: 1,
//           autoplay: true,
//           slidesToScroll: 1,
//           arrows: false,
//           fade: true,
//           dots: true,
//           asNavFor: '.hotmeal-shop-thumb-list'
//         });
//         jQuery('.hotmeal-shop-thumb-list').slick({
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           autoplay: true,
//           asNavFor: '.hotmeal-shop-thumb',
//           dots: false,
//           arrows: false,
//           vertical: false,
//           centerMode: false,
//           focusOnSelect: true,
//           responsive: [
//                 {
//                   breakpoint: 1024,
//                   settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     vertical: false,
//                   }
//                 },
//                 {
//                   breakpoint: 800,
//                   settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     vertical: false,
//                   }
//                 },
//                 {
//                   breakpoint: 400,
//                   settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     vertical: false,
//                   }
//                 }
//               ],
//         });
//
// //***************************
//     // Fancybox Function
//     //***************************
//     jQuery(".fancybox").fancybox({
//       openEffect  : 'elastic',
//       closeEffect : 'elastic',
//     });
//
//
//
//
// });


//***************************
// TOUR GRID Function
//***************************

jQuery(window).on('load', function () {
    var $grid = $('.hotmeal-menu-filter,.hotmeal-gallery-filter').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };
    // bind filter button click
    $('.filters-button-group').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({filter: filterValue});
    });
    // change is-checked class on buttons
    $('.filters-button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

});

//***************************
// TOUR GRID Function
//***************************
//     jQuery(window).on('load', function() {
//     var $grid = $('.hotmeal-breakfast-manu').isotope({
//       itemSelector: '.element-item',
//       layoutMode: 'fitRows'
//     });
//     // filter functions
//     var filterFns = {
//       // show if number is greater than 50
//       numberGreaterThan50: function() {
//         var number = $(this).find('.number').text();
//         return parseInt( number, 10 ) > 50;
//       },
//       // show if name ends with -ium
//       ium: function() {
//         var name = $(this).find('.name').text();
//         return name.match( /ium$/ );
//       }
//     };
//     // bind filter button click
//     $('.filters-buttonone-group').on( 'click', 'a', function() {
//       var filterValue = $( this ).attr('data-filter');
//       // use filterFn if matches value
//       filterValue = filterFns[ filterValue ] || filterValue;
//       $grid.isotope({ filter: filterValue });
//     });
//     // change is-checked class on buttons
//     $('.filters-buttonone-group').each( function( i, buttonGroup ) {
//       var $buttonGroup = $( buttonGroup );
//       $buttonGroup.on( 'click', 'a', function() {
//         $buttonGroup.find('.is-checked').removeClass('is-checked');
//         $( this ).addClass('is-checked');
//       });
//     });
//
// });
//***************************
// TOUR GRID Function
//***************************
// jQuery(window).on('load', function() {
//     var $grid = $('.hotmeal-dinner-manu').isotope({
//         itemSelector: '.element-item',
//         layoutMode: 'fitRows'
//     });
//     // filter functions
//     var filterFns = {
//         // show if number is greater than 50
//         numberGreaterThan50: function() {
//             var number = $(this).find('.number').text();
//             return parseInt( number, 10 ) > 50;
//         },
//         // show if name ends with -ium
//         ium: function() {
//             var name = $(this).find('.name').text();
//             return name.match( /ium$/ );
//         }
//     };
//     // bind filter button click
//     $('.filters-buttontwo-group').on( 'click', 'a', function() {
//         var filterValue = $( this ).attr('data-filter');
//         // use filterFn if matches value
//         filterValue = filterFns[ filterValue ] || filterValue;
//         $grid.isotope({ filter: filterValue });
//     });
//     // change is-checked class on buttons
//     $('.filters-buttontwo-group').each( function( i, buttonGroup ) {
//         var $buttonGroup = $( buttonGroup );
//         $buttonGroup.on( 'click', 'a', function() {
//             $buttonGroup.find('.is-checked').removeClass('is-checked');
//             $( this ).addClass('is-checked');
//         });
//     });
//
// });

//***************************
// ContactForm Function
//***************************
// $('.myform').on('submit',function(){
//     // Add text 'loading...' right after clicking on the submit button.
//     $('.output_message').text('Loading...');
//
//     var form = $(this);
//     $.ajax({
//         url: form.attr('action'),
//         method: form.attr('method'),
//         data: form.serialize(),
//         success: function(result){
//             if (result == 'success'){
//                 $('.output_message').html('<span class="success-msg"><i class="fa fa-check-circle"></i> Message Sent successfully!</span>');
//             } else if (result == 'validate'){
//                 $('.output_message').html('<span class="spam-error-msg"><i class="fa fa-warning"></i> You have already sent message. Try again after one hour.</span>');
//             } else {
//                 $('.output_message').html('<span class="error-msg"><i class="fa fa-times-circle"></i> Error Sending email!</span>');
//             }
//         }
//     });
//
//     // Prevents default submission of the form after clicking on the submit button.
//     return false;
// });


$(document).ready(function () {

    $(document).on('click', function () {
        $(".shop-list").css("display", "none");


    });

    $("#wpmenucartli").click(function (e) {
        $(".shop-list").css("display", "block");

        e.stopPropagation()

    });


    $(".dish-image").click(function () {

        $('.dish-content').removeClass("active-content")
        $(this).next().addClass("active-content")


        console.log("sd")
    });

    var buynumber = $(".cartcontents-text").html();

    if (buynumber == 0) {
        $(".cartcontents").css("display", "none")
    }
    else {
        $(".cartcontents").css("display", "block")

    }

    $(".buy").click(function () {

        var buynumber = $(".cartcontents-text").html();
        var buytext = $(".quantity input").val();
        buynumber = parseInt(buynumber);
        buytext = parseInt(buytext);
        buynumber += buytext;
        $(".cartcontents-text").html(buynumber);
        $(".cartcontents").css("display", "block")


    });
    $("#update-cart").click(function () {

        var buynumber = $(".cartcontents-text").html();
        var buytext = $(".quantity input").val();
        buynumber = parseInt(buynumber);
        buytext = parseInt(buytext);
        buynumber += buytext;
        $(".cartcontents-text").html(buynumber);
        $(".cartcontents").css("display", "block")


    });


    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    var r1 = randomNumber(1, 10);
    var r2 = randomNumber(1, 10);

    $('#captchaOperation').html(['=', r1, '+', r2].join(' '));

    var options = {
        custom: {
            cu: function ($el) {
                if ($el.val() != r1 + r2) {
                    return "Hey, that's not valid! It's gotta be "
                }
            }
        }
    };

    $('.qty').change(function () {
        $("#update-cart").removeAttr("disabled");
        console.log("sda")
    })
    $('.dish:first').before($('.dish:last'));
    $('.lt_special-content').animate({scrollTop: 196}, 0);

    $("#arrow-bottom").click(function () {
        var y = $('.lt_special-content').scrollTop();

        y = y + 196;
        // console.log("sss")
        $('.lt_special-content').animate({scrollTop: y}, 1000, function () {
            $('.dish:last').after($('.dish:first'));
        });
        // $('.lt_special-content').scrollTop(y);


    });
    $("#arrow-top").click(function () {
        var y = $('.lt_special-content').scrollTop();

        y = y - 196;
        // console.log("sss")
        $('.lt_special-content').animate({scrollTop: y}, 1000, function () {
            $('.dish:first').before($('.dish:last'));
            $('.lt_special-content').animate({scrollTop: 196}, 0);
        });

        // $('.lt_special-content').scrollTop(y);


    });


    $('.items:first').before($('.items:last'));
    var widthteam = $('.items').width() + 30;
    var left_value = widthteam * (-1);
    $('.box-items').css("left", widthteam);

    $("#arrow-left").click(function () {


        var left_indent = parseInt($('.box-items').css('left')) + widthteam;

        $('.box-items').animate({'left': left_indent}, 1000, function () {
            $('.items:last').after($('.items:first'));
            $('.box-items').css({'left': widthteam});

        });


    });

    $("#arrow-right").click(function () {
        var left_indent = parseInt($('.box-items').css('left')) - widthteam;
        // $('#box-team').scrollLeft();
        // $('.items').width();

        // var c = $('#box-team').scrollLeft();
        // h = h + 35

        // c = c + h;
        $('.box-items').animate({'left': left_indent}, 1000, function () {
            $('.items:first').before($('.items:last'));
            $('.box-items').css({'left': widthteam});

        });

        // $('.lt_special-content').scrollTop(y);


    });
    var xsection1 = $('#site-warapper').offset().top;
    var xsection2 = $('#lt-featured').offset().top;
    var xsection3 = $('#hotmeal-main').offset().top;

    var xsection4 = $('#hotmeal-menu').offset().top;
    var xsection5 = $('#lt-product').offset().top;
    var xsection6 = $('#lt-team').offset().top;

    var xsection7 = $('#footer').offset().top;
    var xsection8 = $('#download-app').offset().top;
    var xsection9 = $('#booking').offset().top;

    $('#home-btn').click(function () {
        $('html , body').animate({scrollTop: xsection1}, 2000);

    });

    $('#featured-btn').click(function () {
        $('html , body').animate({scrollTop: xsection2}, 2000);

    });

    var flg = false;

    $('#main-btn').click(function () {
        $('html , body').animate({scrollTop: xsection3}, 2000, function () {
            //if (!flg) {
            //    $("#section3-bottom-item").addClass('section3-bottom-item-after');
            //    flg = true;
            //}
        });


    });

    $('#menu-btn').click(function () {
        $('html , body').animate({scrollTop: xsection4}, 2000);

    });
    $('#product-btn').click(function () {
        $('html , body').animate({scrollTop: xsection5}, 2000);

    });
    $('#team-btn').click(function () {
        $('html , body').animate({scrollTop: xsection6}, 2000);

    });
    $('#footer-btn').click(function () {
        $('html , body').animate({scrollTop: xsection7}, 2000);

    });
    $('#dl-app').click(function () {
        $('html , body').animate({scrollTop: xsection8}, 2000);

    });
    $('#booking-btn').click(function () {
        $('html , body').animate({scrollTop: xsection9}, 2000, function () {
            //if (!flg) {
            //    $("#section3-bottom-item").addClass('section3-bottom-item-after');
            //    flg = true;
            //}
        });


    });

//section1-scrollbar


});

var currentMapCenter;

function initializeMap(configs, markersCode, stylesCode, boxStyles) {
    var myLatlng;

    configs.width = configs.width == 'auto' || configs.width == '100%' ? "100%" : configs.width + 'px';
    configs.height = configs.height == 'auto' || configs.height == '100%' ? "100%" : configs.height + 'px';

    document.getElementById(configs.cavas_id).style.width = configs.width;
    document.getElementById(configs.cavas_id).style.height = configs.height;

    if (configs.owm_api == '') {
        configs.weather = false;
    }
    var markersJson = BT.Base64.base64Decode(markersCode);
    var markers = JSON.parse(markersJson);
    var max = markers.length;
    var stylesJson = BT.Base64.base64Decode(stylesCode);
    var styles = JSON.parse(stylesJson);
    var infowindowData = Array();

    /** create map  */
    createMapCenter(configs, markers, styles, boxStyles);

    /**
     * Create Map center
     * @param configs
     * @param markers
     * @returns {Latitude,Longitude}
     */
    function createMapCenter(configs, markers, styles, boxStyles) {
        if (configs.mapCenterType == 'address' && configs.mapCenterAddress == '' || configs.mapCenterType == 'coordinate' && configs.mapCenterCoordinate == '') {
            if (markers.length == 0) {
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({'address': 'A2DN3 Nguyen Khanh Toan, Cau Giay, Ha Noi'}, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        mapCenter = results[0].geometry.location;
                        return createMap(configs, styles, markers, mapCenter, boxStyles);
                    } else {
                        alert("Geocode map center was not successful for the following reason: " + status);
                    }
                });
            } else {
                if (markers[0].markerType == 'address') {
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({'address': markers[0].markerValue}, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            mapCenter = results[0].geometry.location;
                            return createMap(configs, styles, markers, mapCenter, boxStyles);
                        } else {
                            alert("Geocode was not successful for the following reason: " + status + '! Map address: ' + markers[0].markerValue);
                        }
                    })
                } else {
                    mapCenterCoordinate = markers[0].markerValue.split(',');
                    mapCenter = new google.maps.LatLng(mapCenterCoordinate[0], mapCenterCoordinate[1]);
                    return createMap(configs, styles, markers, mapCenter, boxStyles);
                }
            }
        } else {
            if (configs.mapCenterType == 'address') {
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({'address': configs.mapCenterAddress}, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        mapCenter = results[0].geometry.location;
                        return createMap(configs, styles, markers, mapCenter, boxStyles);
                    } else {
                        alert("Geocode was not successful for the following reason: " + status + '! Map address: ' + configs.mapCenterAddress);
                    }
                })
            } else {
                mapCenterCoordinate = configs.mapCenterCoordinate.split(',');
                mapCenter = new google.maps.LatLng(mapCenterCoordinate[0], mapCenterCoordinate[1]);
                return createMap(configs, styles, markers, mapCenter, boxStyles);
            }
        }
    }

    /**
     * Create Map
     * @param Object configs
     * @param Array Object styles
     * @param Array Object markers
     * @returns {google.maps.Map}
     */

    function createMap(configs, styles, markers, mapCenter, boxStyles) {

        if (configs.enableStyle == 1 || configs.enableStyle == '1') {
            var stylesArr = [];
            for (var j = 0; j < styles.length; j++) {
                var style = {};
                style.stylers = [];
                if (styles[j].featureType != 'all') {
                    style.featureType = styles[j].featureType;

                }
                if (styles[j].elementType != 'all') {
                    style.elementType = styles[j].elementType;
                }
                if (styles[j].invertLightness == 'true') {
                    style.stylers.push({"invert_lightness": true});
                }
                if (styles[j].visibility) {
                    style.stylers.push({"visibility": styles[j].visibility});
                }
                if (styles[j].mapColor) {
                    style.stylers.push({"color": styles[j].mapColor});
                }
                if (styles[j].weight) {
                    style.stylers.push({"weight": styles[j].weight});
                }
                if (styles[j].hue) {
                    style.stylers.push({"hue": styles[j].hue});
                }
                if (styles[j].saturation) {
                    style.stylers.push({"saturation": styles[j].saturation});
                }
                if (styles[j].lightness) {
                    style.stylers.push({"lightness": styles[j].lightness});
                }
                if (styles[j].gamma) {
                    style.stylers.push({"gamma": styles[j].gamma});
                }

                stylesArr.push(style);
            }

            if (configs.createNewOrDefault == "applyDefault") {
                if (stylesArr.length != 0) {
                    var mapOptions = {
                        zoom: configs.zoom,
                        zoomControl: configs.zoomControl,
                        scaleControl: configs.scaleControl,
                        mapTypeControl: configs.mapTypeControl,
                        panControl: configs.panControl,
                        streetViewControl: configs.streetViewControl,
                        overviewMapControl: configs.overviewMapControl,
                        draggable: configs.draggable,
                        disableDoubleClickZoom: configs.disableDoubleClickZoom,
                        scrollwheel: configs.scrollwheel,
                        center: mapCenter,
                        mapTypeId: configs.mapType,
                        styles: stylesArr
                    }
                } else {
                    var mapOptions = {
                        zoom: configs.zoom,
                        zoomControl: configs.zoomControl,
                        scaleControl: configs.scaleControl,
                        mapTypeControl: configs.mapTypeControl,
                        panControl: configs.panControl,
                        streetViewControl: configs.streetViewControl,
                        overviewMapControl: configs.overviewMapControl,
                        draggable: configs.draggable,
                        disableDoubleClickZoom: configs.disableDoubleClickZoom,
                        scrollwheel: configs.scrollwheel,
                        center: mapCenter,
                        mapTypeId: configs.mapType
                    }
                }
            } else {
                var mapOptions = {
                    zoom: configs.zoom,
                    zoomControl: configs.zoomControl,
                    scaleControl: configs.scaleControl,
                    mapTypeControl: configs.mapTypeControl,
                    panControl: configs.panControl,
                    streetViewControl: configs.streetViewControl,
                    overviewMapControl: configs.overviewMapControl,
                    draggable: configs.draggable,
                    disableDoubleClickZoom: configs.disableDoubleClickZoom,
                    scrollwheel: configs.scrollwheel,
                    center: mapCenter,
                    mapTypeControlOptions: {mapTypeIds: [configs.mapType, 'map_style']}
                }
                var styledMap = new google.maps.StyledMapType(stylesArr, {name: configs.styleTitle});
            }
        } else {
            var mapOptions = {
                zoom: configs.zoom,
                zoomControl: configs.zoomControl,
                scaleControl: configs.scaleControl,
                mapTypeControl: configs.mapTypeControl,
                panControl: configs.panControl,
                streetViewControl: configs.streetViewControl,
                overviewMapControl: configs.overviewMapControl,
                draggable: configs.draggable,
                disableDoubleClickZoom: configs.disableDoubleClickZoom,

                scrollwheel: configs.scrollwheel,
                center: mapCenter,
                mapTypeId: configs.mapType
            }
        }
        var map = new google.maps.Map(document.getElementById(configs.cavas_id), mapOptions);

        // set style for map
        if ((configs.enableStyle == 1 || configs.enableStyle == '1') && configs.createNewOrDefault == "createNew") {
            //Associate the styled map with the MapTypeId and set it to display.
            map.mapTypes.set('map_style', styledMap);
            map.setMapTypeId('map_style');
        }

        /** create marker in map*/
        for (i = 0; i < markers.length; i++) {
            getMarker(configs, markers[i], map, boxStyles, i);
        }
        currentMapCenter = map.getCenter();
        google.maps.event.addDomListener(map, 'idle', function () {
            currentMapCenter = map.getCenter();
        });
        google.maps.event.addDomListener(window, 'resize', function () {
            map.setCenter(currentMapCenter);
        });
    }

    /**
     * Get Coordinate of maker and create marker
     * @param markerSource
     */
    function getMarker(configs, markerSource, map, boxStyles, i) {
        if (markerSource.markerType == 'coordinate') {
            coordinate = markerSource.markerValue.split(',');
            var pos = new google.maps.LatLng(coordinate[0], coordinate[1]);
            if (configs.weather) {
                createMakerWithWeather(configs, markerSource, map, pos, boxStyles, i);
            } else {
                createMarker(configs, markerSource, map, pos, boxStyles, i);
            }

        } else {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({'address': markerSource.markerValue}, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var pos = results[0].geometry.location;
                    if (configs.weather) {
                        createMakerWithWeather(configs, markerSource, map, pos, boxStyles, i);
                    } else {
                        createMarker(configs, markerSource, map, pos, boxStyles, i);
                    }
                } else {
                    alert("Geocode was not successful for the following reason: " + status + '! Map address: ' + markerSource.markerValue);
                }
            })
        }
    }

    /**
     * function create marker for map
     * @param ObjectJS marker
     * @param {google.maps.Map}
     * @param pos: Coordinate of marker
     */
    function createMarker(configs, markerSource, map, pos, boxStyles, i) {
        /** set option of marker */
        var marker, image, shadow;
        if (configs.weather && markerSource.weatherInfo && configs.replaceMarkerIcon) {
            image = new google.maps.MarkerImage('http://openweathermap.org/img/w/' + markerSource.weatherInfo.weather[0].icon + '.png');
        } else {
            if (markerSource.markerIcon == '') {
                markerSource.markerIcon = configs.url + 'modules/mod_bt_googlemaps/tmpl/images/marker.png';
            } else {
                markerSource.markerIcon = configs.url + markerSource.markerIcon;
            }

            if (markerSource.markerShadowImage == '') {
                markerSource.markerShadowImage = configs.url + 'modules/mod_bt_googlemaps/tmpl/images/shadow.png';
            } else {
                markerSource.markerShadowImage = configs.url + markerSource.markerShadowImage;
            }
            image = new google.maps.MarkerImage(markerSource.markerIcon);
            shadow = new google.maps.MarkerImage(
                markerSource.markerShadowImage,
                new google.maps.Size(41, 32),
                new google.maps.Point(0, 0),
                new google.maps.Point(11, 32)
            );
        }

        if (configs.weather && markerSource.weatherInfo) {
            marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: image,
                title: markerSource.markerTitle,
                zIndex: i * 10
            });
        } else {
            marker = new google.maps.Marker({
                position: pos,
                map: map,
                shadow: shadow,
                icon: image,
                title: markerSource.markerTitle,
                zIndex: i * 10
            });
        }

        /** create infoWindow */
        if (configs.weather && configs.displayWeatherInfo && markerSource.weatherInfo) {
            markerSource.markerInfoWindow += '<p class="weather-info">'
                + '<img src="' + 'http://openweathermap.org/img/w/' + markerSource.weatherInfo.weather[0].icon + '.png' + '" alt=""/><br/>'
                + markerSource.weatherInfo.main.temp + '&deg;' + (configs.temperatureUnit == 'c' ? 'C' : 'F') + '<br/>'
                + markerSource.weatherInfo.weather[0].main
                + '</p>';
        }

        if (markerSource.markerInfoWindow) {
            if (configs.enableCustomInfoBox == 1 || configs.enableCustomInfoBox == '1') {
                var pixelOffset = configs.boxPosition.split(',');
                if (configs.closeBoxImage == '') {
                    configs.closeBoxImage = 'modules/mod_bt_googlemaps/tmpl/images/close.gif';
                }
                var infoBoxOption = {
                    content: markerSource.markerInfoWindow,
                    disableAutoPan: false,
                    maxWidth: 0,
                    pixelOffset: new google.maps.Size(Number(pixelOffset[0]), Number(pixelOffset[1])),
                    zIndex: i * 10,
                    boxStyle: boxStyles,
                    closeBoxMargin: configs.closeBoxMargin,
                    closeBoxURL: configs.url + '/' + configs.closeBoxImage,
                    infoBoxClearance: new google.maps.Size(1, 1),
                    isHidden: false,
                    pane: "floatPane",
                    enableEventPropagation: false
                }

                var infowindow = new InfoBox(infoBoxOption);
            } else {
                var infowindow = new google.maps.InfoWindow({
                    content: markerSource.markerInfoWindow
                });
            }
            infowindowData.push(infowindow);
            if (markerSource.markerShowInfoWindow == 1) {
                infowindow.open(map, marker);
            }
            google.maps.event.addListener(marker, 'click', function () {
                for (var i = 0; i < infowindowData.length; i++) {
                    infowindowData[i].close();
                }
                infowindow.open(map, marker);
            });
        }
    }


    function createMakerWithWeather(configs, markerSource, map, pos, boxStyles, i) {
        var requestString = "http://api.openweathermap.org/data/2.5/weather?lat=" + pos.lat() + '&lon=' + pos.lng()
            + "&cluster=yes&format=json"
            + (configs.temperatureUnit == 'c' ? '&units=metric' : '')
            + "&APPID=" + configs.owm_api;

        var request = new XMLHttpRequest();
        request.onload = function () {
            var results = JSON.parse(this.responseText);
            if (results.cod == 200) {
                markerSource.weatherInfo = results;
            } else {
                markerSource.weatherInfo = false;
            }
            createMarker(configs, markerSource, map, pos, boxStyles, i);

        };
        request.open("get", requestString, true);
        request.send();
    }
}

var BT = BT || {};
(function () {
    BT.Base64 =
        {
            keyString: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            UTF8Encode: function (b) {
                b = b.replace(/\x0d\x0a/g, "\x0a");
                var a = "";
                for (var e = 0; e < b.length; e++) {
                    var d = b.charCodeAt(e);
                    if (d < 128) {
                        a += String.fromCharCode(d)
                    } else {
                        if ((d > 127) && (d < 2048)) {
                            a += String.fromCharCode((d >> 6) | 192);
                            a += String.fromCharCode((d & 63) | 128)
                        } else {
                            a += String.fromCharCode((d >> 12) | 224);
                            a += String.fromCharCode(((d >> 6) & 63) | 128);
                            a += String.fromCharCode((d & 63) | 128)
                        }
                    }
                }
                return a
            },
            UTF8Decode: function (a) {
                var b = "";
                var d = 0;
                var e = c1 = c2 = 0;
                while (d < a.length) {
                    e = a.charCodeAt(d);
                    if (e < 128) {
                        b += String.fromCharCode(e);
                        d++
                    } else {
                        if ((e > 191) && (e < 224)) {
                            c2 = a.charCodeAt(d + 1);
                            b += String.fromCharCode(((e & 31) << 6)
                                | (c2 & 63));
                            d += 2
                        } else {
                            c2 = a.charCodeAt(d + 1);
                            c3 = a.charCodeAt(d + 2);
                            b += String.fromCharCode(((e & 15) << 12)
                                | ((c2 & 63) << 6) | (c3 & 63));
                            d += 3
                        }
                    }
                }
                return b
            },
            base64Encode: function (c) {
                var a = "";
                var k, h, f, j, g, e, d;
                var b = 0;
                c = this.UTF8Encode(c);
                while (b < c.length) {
                    k = c.charCodeAt(b++);
                    h = c.charCodeAt(b++);
                    f = c.charCodeAt(b++);
                    j = k >> 2;
                    g = ((k & 3) << 4) | (h >> 4);
                    e = ((h & 15) << 2) | (f >> 6);
                    d = f & 63;
                    if (isNaN(h)) {
                        e = d = 64
                    } else {
                        if (isNaN(f)) {
                            d = 64
                        }
                    }
                    a = a + this.keyString.charAt(j)
                        + this.keyString.charAt(g)
                        + this.keyString.charAt(e)
                        + this.keyString.charAt(d)
                }
                return a
            },
            base64Decode: function (c) {
                var a = "";
                var k, h, f;
                var j, g, e, d;
                var b = 0;
                c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                while (b < c.length) {
                    j = this.keyString.indexOf(c.charAt(b++));
                    g = this.keyString.indexOf(c.charAt(b++));
                    e = this.keyString.indexOf(c.charAt(b++));
                    d = this.keyString.indexOf(c.charAt(b++));
                    k = (j << 2) | (g >> 4);
                    h = ((g & 15) << 4) | (e >> 2);
                    f = ((e & 3) << 6) | d;
                    a = a + String.fromCharCode(k);
                    if (e != 64) {
                        a = a + String.fromCharCode(h)
                    }
                    if (d != 64) {
                        a = a + String.fromCharCode(f)
                    }
                }
                a = this.UTF8Decode(a);
                return a
            }
        }
})();
$(function () {

    var $formLogin = $('#login-form');
    var $formLost = $('#lost-form');
    var $formRegister = $('#register-form');
    var $divForms = $('#div-forms');
    var $modalAnimateTime = 300;
    var $msgAnimateTime = 150;
    var $msgShowTime = 2000;

    $("form").submit(function () {
        switch (this.id) {
            case "login-form":
                var $lg_username = $('#login_username').val();
                var $lg_password = $('#login_password').val();
                if ($lg_username == "ERROR") {
                    msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "error", "glyphicon-remove", "Login error");
                } else {
                    msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "success", "glyphicon-ok", "Login OK");
                }
                return false;
                break;
            case "lost-form":
                var $ls_email = $('#lost_email').val();
                if ($ls_email == "ERROR") {
                    msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), "error", "glyphicon-remove", "Send error");
                } else {
                    msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), "success", "glyphicon-ok", "Send OK");
                }
                return false;
                break;
            case "register-form":
                var $rg_username = $('#register_username').val();
                var $rg_email = $('#register_email').val();
                var $rg_password = $('#register_password').val();
                if ($rg_username == "ERROR") {
                    msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "error", "glyphicon-remove", "Register error");
                } else {
                    msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "success", "glyphicon-ok", "Register OK");
                }
                return false;
                break;
            default:
                return false;
        }
        return false;
    });

    $('#login_register_btn').click(function () {
        modalAnimate($formLogin, $formRegister)
    });
    $('#register_login_btn').click(function () {
        modalAnimate($formRegister, $formLogin);
    });
    $('#login_lost_btn').click(function () {
        modalAnimate($formLogin, $formLost);
    });
    $('#lost_login_btn').click(function () {
        modalAnimate($formLost, $formLogin);
    });
    $('#lost_register_btn').click(function () {
        modalAnimate($formLost, $formRegister);
    });
    $('#register_lost_btn').click(function () {
        modalAnimate($formRegister, $formLost);
    });

    function modalAnimate($oldForm, $newForm) {
        var $oldH = $oldForm.height();
        var $newH = $newForm.height();
        $divForms.css("height", $oldH);
        $oldForm.fadeToggle($modalAnimateTime, function () {
            $divForms.animate({height: $newH}, $modalAnimateTime, function () {
                $newForm.fadeToggle($modalAnimateTime);
            });
        });
    }

    function msgFade($msgId, $msgText) {
        $msgId.fadeOut($msgAnimateTime, function () {
            $(this).text($msgText).fadeIn($msgAnimateTime);
        });
    }

    function msgChange($divTag, $iconTag, $textTag, $divClass, $iconClass, $msgText) {
        var $msgOld = $divTag.text();
        msgFade($textTag, $msgText);
        $divTag.addClass($divClass);
        $iconTag.removeClass("glyphicon-chevron-right");
        $iconTag.addClass($iconClass + " " + $divClass);
        setTimeout(function () {
            msgFade($textTag, $msgOld);
            $divTag.removeClass($divClass);
            $iconTag.addClass("glyphicon-chevron-right");
            $iconTag.removeClass($iconClass + " " + $divClass);
        }, $msgShowTime);
    }
});

// import utils = require('./utils')

// console.log('Hello wworld');

declare var isMobile: any;
declare var Modernizr: any;
declare var $: any;

Modernizr.addTest('ismobile', function() {
 return isMobile.any;
});

// console.log(Modernizr.ismobile);


$(".pieces").stick_in_parent({offset_top: 36});
$(".year-image").stick_in_parent({bottoming: true});
$(".year-image dt").stick_in_parent({bottoming: false});

$("dd a").hover(function() {
    var featuredUrl:string = $(this).attr("data-featured-image-url");
    if(featuredUrl) {
        $(this).parent().parent().parent().find(".featured-image")
            .attr("style", "background: url("+ featuredUrl +") no-repeat center center;")
            .removeClass("hidden-featured-image");
    }
    
}, function () {
    $(this).parent().parent().parent().find(".featured-image")
        .addClass("hidden-featured-image")
});
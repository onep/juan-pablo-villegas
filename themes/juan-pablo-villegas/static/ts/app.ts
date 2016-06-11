declare var isMobile: any;
declare var enquire: any;

interface JQueryStatic {
    stick_in_parent: any;   
}
interface JQuery {
    stick_in_parent: any;   
}

Modernizr.addTest('ismobile', function() {
 return isMobile.any;
});
// console.log(Modernizr.ismobile);

enquire.register("screen and (max-width: 768px)", {
    match: function () {
        console.log('matched mobile');
        $(".year-image").stick_in_parent({offset_top: 36});
    },
    unmatch: function () {
        console.log('unmatched mobile');
        $(".year-image").trigger("sticky_kit:detach");
    },
});

enquire.register("screen and (min-width: 769px)", {
    match: function () {
        console.log('matched desktop');
        $(".pieces").stick_in_parent({offset_top: 36});
        $(".year-image").stick_in_parent({bottoming: true, offset_top: 72});
        $(".year-image dt").stick_in_parent({bottoming: false, offset_top: 0});
    },
    unmatch: function () {
        console.log('unmatched desktop');
        $(".pieces").trigger("sticky_kit:detach");
        $(".year-image").trigger("sticky_kit:detach");
        $(".year-image dt").trigger("sticky_kit:detach");
    },
});

// $(".pieces").stick_in_parent({offset_top: 36});
// $(".year-image").stick_in_parent({bottoming: true, offset_top: 72});
// $(".year-image dt").stick_in_parent({bottoming: false, offset_top: 0});

// $(".year-image").stick_in_parent({bottoming: true});
// $(".year-image dd").stick_in_parent({bottoming: true, offset_top: 90});
// $(".year-image dt").stick_in_parent({bottoming: false});

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
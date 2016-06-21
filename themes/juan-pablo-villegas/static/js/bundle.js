(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// interface JQueryStatic {
//     stick_in_parent: any;
// }
// interface JQuery {
//     stick_in_parent: any;
// }
objectFitImages();
Modernizr.addTest('ismobile', function () {
    return isMobile.any;
});
enquire.register("screen and (max-width: 768px)", {
    match: function () {
        console.log('matched mobile');
        $(".year-image").stick_in_parent({ offset_top: 36 });
    },
    unmatch: function () {
        console.log('unmatched mobile');
        $(".year-image").trigger("sticky_kit:detach");
    }
});
enquire.register("screen and (min-width: 769px)", {
    match: function () {
        console.log('matched desktop');
        $(".pieces").stick_in_parent({ offset_top: 36 });
        $(".year-image").stick_in_parent({ bottoming: true, offset_top: 72 });
        $(".year-image dt").stick_in_parent({ bottoming: false, offset_top: 0 });
    },
    unmatch: function () {
        console.log('unmatched desktop');
        $(".pieces").trigger("sticky_kit:detach");
        $(".year-image").trigger("sticky_kit:detach");
        $(".year-image dt").trigger("sticky_kit:detach");
    }
});
$("dd a").hover(function () {
    var featuredUrl = $(this).attr("data-featured-image-url");
    $(this).parent().parent().parent().find(".featured-image")
        .find('img[src="' + featuredUrl + '"]')
        .addClass('visible-image');
}, function () {
    var featuredUrl = $(this).attr("data-featured-image-url");
    $(this).parent().parent().parent().find(".featured-image")
        .find('img[src="' + featuredUrl + '"]')
        .removeClass('visible-image');
});
var imgArr = [];
$("dd a").each(function () {
    imgArr.push($(this).attr("data-featured-image-url"));
});
new preLoader(imgArr, {
    onProgress: function (src, element, index) {
        if (element) {
            console.log('loaded ' + src);
            console.log($('nav')
                .find('dd a[data-featured-image-url="' + src + '"]')
                .parent().parent().parent()
                .find(".year-image .featured-image")
                .append(element));
        }
        else {
            console.log('failed ' + src);
        }
    }
});

},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],4:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],5:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}]},{},[1,2,3,4,5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvanVhbi1wYWJsby12aWxsZWdhcy9zdGF0aWMvdHMvYXBwLnRzIiwidHlwaW5ncy9nbG9iYWxzL2pxdWVyeS9pbmRleC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDS0EsMkJBQTJCO0FBQzNCLDRCQUE0QjtBQUM1QixJQUFJO0FBQ0oscUJBQXFCO0FBQ3JCLDRCQUE0QjtBQUM1QixJQUFJO0FBRUosZUFBZSxFQUFFLENBQUM7QUFFbEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7SUFDN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsUUFBUSxDQUFDLCtCQUErQixFQUFFO0lBQzlDLEtBQUssRUFBRTtRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsVUFBVSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNKLENBQUMsQ0FBQztBQUVILE9BQU8sQ0FBQyxRQUFRLENBQUMsK0JBQStCLEVBQUU7SUFDOUMsS0FBSyxFQUFFO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBQyxVQUFVLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0osQ0FBQyxDQUFDO0FBRUgsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNaLElBQUksV0FBVyxHQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBRXJELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN0QyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFdkMsQ0FBQyxFQUFFO0lBQ0MsSUFBSSxXQUFXLEdBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3RDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtJQUNsQixVQUFVLEVBQUUsVUFBVSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUs7UUFDckMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQ1AsQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDSCxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztpQkFDbkQsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFO2lCQUMxQixJQUFJLENBQUMsNkJBQTZCLENBQUM7aUJBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDdkIsQ0FBQztRQUNOLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDTCxDQUFDO0NBQ0osQ0FBQyxDQUFDOzs7QUM5RUgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZGVjbGFyZSB2YXIgaXNNb2JpbGU6IGFueTtcbmRlY2xhcmUgdmFyIGVucXVpcmU6IGFueTtcbmRlY2xhcmUgdmFyIHByZUxvYWRlcjogYW55O1xuZGVjbGFyZSB2YXIgb2JqZWN0Rml0SW1hZ2VzOiBhbnk7XG5cbi8vIGludGVyZmFjZSBKUXVlcnlTdGF0aWMge1xuLy8gICAgIHN0aWNrX2luX3BhcmVudDogYW55O1xuLy8gfVxuLy8gaW50ZXJmYWNlIEpRdWVyeSB7XG4vLyAgICAgc3RpY2tfaW5fcGFyZW50OiBhbnk7XG4vLyB9XG5cbm9iamVjdEZpdEltYWdlcygpO1xuXG5Nb2Rlcm5penIuYWRkVGVzdCgnaXNtb2JpbGUnLCBmdW5jdGlvbigpIHtcbiByZXR1cm4gaXNNb2JpbGUuYW55O1xufSk7XG5cbmVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KVwiLCB7XG4gICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hdGNoZWQgbW9iaWxlJyk7XG4gICAgICAgICQoXCIueWVhci1pbWFnZVwiKS5zdGlja19pbl9wYXJlbnQoe29mZnNldF90b3A6IDM2fSk7XG4gICAgfSxcbiAgICB1bm1hdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1bm1hdGNoZWQgbW9iaWxlJyk7XG4gICAgICAgICQoXCIueWVhci1pbWFnZVwiKS50cmlnZ2VyKFwic3RpY2t5X2tpdDpkZXRhY2hcIik7XG4gICAgfSxcbn0pO1xuXG5lbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweClcIiwge1xuICAgIG1hdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIGRlc2t0b3AnKTtcbiAgICAgICAgJChcIi5waWVjZXNcIikuc3RpY2tfaW5fcGFyZW50KHtvZmZzZXRfdG9wOiAzNn0pO1xuICAgICAgICAkKFwiLnllYXItaW1hZ2VcIikuc3RpY2tfaW5fcGFyZW50KHtib3R0b21pbmc6IHRydWUsIG9mZnNldF90b3A6IDcyfSk7XG4gICAgICAgICQoXCIueWVhci1pbWFnZSBkdFwiKS5zdGlja19pbl9wYXJlbnQoe2JvdHRvbWluZzogZmFsc2UsIG9mZnNldF90b3A6IDB9KTtcbiAgICB9LFxuICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VubWF0Y2hlZCBkZXNrdG9wJyk7XG4gICAgICAgICQoXCIucGllY2VzXCIpLnRyaWdnZXIoXCJzdGlja3lfa2l0OmRldGFjaFwiKTtcbiAgICAgICAgJChcIi55ZWFyLWltYWdlXCIpLnRyaWdnZXIoXCJzdGlja3lfa2l0OmRldGFjaFwiKTtcbiAgICAgICAgJChcIi55ZWFyLWltYWdlIGR0XCIpLnRyaWdnZXIoXCJzdGlja3lfa2l0OmRldGFjaFwiKTtcbiAgICB9LFxufSk7XG5cbiQoXCJkZCBhXCIpLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgIHZhciBmZWF0dXJlZFVybDpzdHJpbmcgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWZlYXR1cmVkLWltYWdlLXVybFwiKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLmZlYXR1cmVkLWltYWdlXCIpXG4gICAgICAgICAgICAvLyAuYXR0cihcInN0eWxlXCIsIFwiYmFja2dyb3VuZDogdXJsKFwiKyBmZWF0dXJlZFVybCArXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1wiKVxuICAgICAgICAgICAgLmZpbmQoJ2ltZ1tzcmM9XCInICsgZmVhdHVyZWRVcmwgKyAnXCJdJylcbiAgICAgICAgICAgIC5hZGRDbGFzcygndmlzaWJsZS1pbWFnZScpO1xuICAgIFxufSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBmZWF0dXJlZFVybDpzdHJpbmcgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWZlYXR1cmVkLWltYWdlLXVybFwiKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLmZlYXR1cmVkLWltYWdlXCIpXG4gICAgICAgICAgICAuZmluZCgnaW1nW3NyYz1cIicgKyBmZWF0dXJlZFVybCArICdcIl0nKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCd2aXNpYmxlLWltYWdlJyk7XG59KTtcblxudmFyIGltZ0FyciA9IFtdO1xuJChcImRkIGFcIikuZWFjaChmdW5jdGlvbigpe1xuICAgIGltZ0Fyci5wdXNoKCQodGhpcykuYXR0cihcImRhdGEtZmVhdHVyZWQtaW1hZ2UtdXJsXCIpKTtcbn0pO1xuXG5uZXcgcHJlTG9hZGVyKGltZ0Fyciwge1xuICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uIChzcmMsIGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9hZGVkICcgKyBzcmMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgJCgnbmF2JylcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ2RkIGFbZGF0YS1mZWF0dXJlZC1pbWFnZS11cmw9XCInICsgc3JjICsgJ1wiXScpXG4gICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKVxuICAgICAgICAgICAgICAgICAgICAuZmluZChcIi55ZWFyLWltYWdlIC5mZWF0dXJlZC1pbWFnZVwiKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKGVsZW1lbnQpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCAnICsgc3JjKTtcbiAgICAgICAgfVxuICAgIH1cbn0pOyIsIiJdfQ==

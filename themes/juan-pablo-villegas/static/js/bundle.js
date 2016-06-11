(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// import utils = require('./utils')
Modernizr.addTest('ismobile', function () {
    return isMobile.any;
});
// console.log(Modernizr.ismobile);
enquire.register("screen and (max-width: 768px)", {
    match: function () {
        console.log('matched mobile');
        $(".year-image").stick_in_parent({ offset_top: 18 });
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
$(".pieces").stick_in_parent({ offset_top: 36 });
$(".year-image").stick_in_parent({ bottoming: true, offset_top: 72 });
$(".year-image dt").stick_in_parent({ bottoming: false, offset_top: 0 });
// $(".year-image").stick_in_parent({bottoming: true});
// $(".year-image dd").stick_in_parent({bottoming: true, offset_top: 90});
// $(".year-image dt").stick_in_parent({bottoming: false});
$("dd a").hover(function () {
    var featuredUrl = $(this).attr("data-featured-image-url");
    if (featuredUrl) {
        $(this).parent().parent().parent().find(".featured-image")
            .attr("style", "background: url(" + featuredUrl + ") no-repeat center center;")
            .removeClass("hidden-featured-image");
    }
}, function () {
    $(this).parent().parent().parent().find(".featured-image")
        .addClass("hidden-featured-image");
});

},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],4:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],5:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}]},{},[1,2,3,4,5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvanVhbi1wYWJsby12aWxsZWdhcy9zdGF0aWMvdHMvYXBwLnRzIiwidHlwaW5ncy9nbG9iYWxzL2pxdWVyeS9pbmRleC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsb0NBQW9DO0FBY3BDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO0lBQzdCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsbUNBQW1DO0FBRW5DLE9BQU8sQ0FBQyxRQUFRLENBQUMsK0JBQStCLEVBQUU7SUFDOUMsS0FBSyxFQUFFO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBQyxVQUFVLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNsRCxDQUFDO0NBQ0osQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLFFBQVEsQ0FBQywrQkFBK0IsRUFBRTtJQUM5QyxLQUFLLEVBQUU7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDSixDQUFDLENBQUM7QUFFSCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsVUFBVSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7QUFDcEUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUV2RSx1REFBdUQ7QUFDdkQsMEVBQTBFO0FBQzFFLDJEQUEyRDtBQUUzRCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ1osSUFBSSxXQUFXLEdBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ2pFLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2FBQ3JELElBQUksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEdBQUUsV0FBVyxHQUFFLDRCQUE0QixDQUFDO2FBQzVFLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzlDLENBQUM7QUFFTCxDQUFDLEVBQUU7SUFDQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQ3JELFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzFDLENBQUMsQ0FBQyxDQUFDOzs7QUNoRUgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gaW1wb3J0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG5cbi8vIGNvbnNvbGUubG9nKCdIZWxsbyB3d29ybGQnKTtcblxuZGVjbGFyZSB2YXIgaXNNb2JpbGU6IGFueTtcbmRlY2xhcmUgdmFyIGVucXVpcmU6IGFueTtcblxuaW50ZXJmYWNlIEpRdWVyeVN0YXRpYyB7XG4gICAgc3RpY2tfaW5fcGFyZW50OiBhbnk7ICAgXG59XG5pbnRlcmZhY2UgSlF1ZXJ5IHtcbiAgICBzdGlja19pbl9wYXJlbnQ6IGFueTsgICBcbn1cblxuTW9kZXJuaXpyLmFkZFRlc3QoJ2lzbW9iaWxlJywgZnVuY3Rpb24oKSB7XG4gcmV0dXJuIGlzTW9iaWxlLmFueTtcbn0pO1xuLy8gY29uc29sZS5sb2coTW9kZXJuaXpyLmlzbW9iaWxlKTtcblxuZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpXCIsIHtcbiAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCBtb2JpbGUnKTtcbiAgICAgICAgJChcIi55ZWFyLWltYWdlXCIpLnN0aWNrX2luX3BhcmVudCh7b2Zmc2V0X3RvcDogMTh9KTtcbiAgICB9LFxuICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VubWF0Y2hlZCBtb2JpbGUnKTtcbiAgICAgICAgJChcIi55ZWFyLWltYWdlXCIpLnRyaWdnZXIoXCJzdGlja3lfa2l0OmRldGFjaFwiKTtcbiAgICB9LFxufSk7XG5cbmVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KVwiLCB7XG4gICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hdGNoZWQgZGVza3RvcCcpO1xuICAgICAgICAkKFwiLnBpZWNlc1wiKS5zdGlja19pbl9wYXJlbnQoe29mZnNldF90b3A6IDM2fSk7XG4gICAgICAgICQoXCIueWVhci1pbWFnZVwiKS5zdGlja19pbl9wYXJlbnQoe2JvdHRvbWluZzogdHJ1ZSwgb2Zmc2V0X3RvcDogNzJ9KTtcbiAgICAgICAgJChcIi55ZWFyLWltYWdlIGR0XCIpLnN0aWNrX2luX3BhcmVudCh7Ym90dG9taW5nOiBmYWxzZSwgb2Zmc2V0X3RvcDogMH0pO1xuICAgIH0sXG4gICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndW5tYXRjaGVkIGRlc2t0b3AnKTtcbiAgICAgICAgJChcIi5waWVjZXNcIikudHJpZ2dlcihcInN0aWNreV9raXQ6ZGV0YWNoXCIpO1xuICAgICAgICAkKFwiLnllYXItaW1hZ2VcIikudHJpZ2dlcihcInN0aWNreV9raXQ6ZGV0YWNoXCIpO1xuICAgICAgICAkKFwiLnllYXItaW1hZ2UgZHRcIikudHJpZ2dlcihcInN0aWNreV9raXQ6ZGV0YWNoXCIpO1xuICAgIH0sXG59KTtcblxuJChcIi5waWVjZXNcIikuc3RpY2tfaW5fcGFyZW50KHtvZmZzZXRfdG9wOiAzNn0pO1xuJChcIi55ZWFyLWltYWdlXCIpLnN0aWNrX2luX3BhcmVudCh7Ym90dG9taW5nOiB0cnVlLCBvZmZzZXRfdG9wOiA3Mn0pO1xuJChcIi55ZWFyLWltYWdlIGR0XCIpLnN0aWNrX2luX3BhcmVudCh7Ym90dG9taW5nOiBmYWxzZSwgb2Zmc2V0X3RvcDogMH0pO1xuXG4vLyAkKFwiLnllYXItaW1hZ2VcIikuc3RpY2tfaW5fcGFyZW50KHtib3R0b21pbmc6IHRydWV9KTtcbi8vICQoXCIueWVhci1pbWFnZSBkZFwiKS5zdGlja19pbl9wYXJlbnQoe2JvdHRvbWluZzogdHJ1ZSwgb2Zmc2V0X3RvcDogOTB9KTtcbi8vICQoXCIueWVhci1pbWFnZSBkdFwiKS5zdGlja19pbl9wYXJlbnQoe2JvdHRvbWluZzogZmFsc2V9KTtcblxuJChcImRkIGFcIikuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZlYXR1cmVkVXJsOnN0cmluZyA9ICQodGhpcykuYXR0cihcImRhdGEtZmVhdHVyZWQtaW1hZ2UtdXJsXCIpO1xuICAgIGlmKGZlYXR1cmVkVXJsKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZChcIi5mZWF0dXJlZC1pbWFnZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJzdHlsZVwiLCBcImJhY2tncm91bmQ6IHVybChcIisgZmVhdHVyZWRVcmwgK1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImhpZGRlbi1mZWF0dXJlZC1pbWFnZVwiKTtcbiAgICB9XG4gICAgXG59LCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLmZlYXR1cmVkLWltYWdlXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImhpZGRlbi1mZWF0dXJlZC1pbWFnZVwiKVxufSk7IiwiIl19

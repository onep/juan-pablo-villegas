(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvanVhbi1wYWJsby12aWxsZWdhcy9zdGF0aWMvdHMvYXBwLnRzIiwidHlwaW5ncy9nbG9iYWxzL2pxdWVyeS9pbmRleC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDVUEsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7SUFDN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFDSCxtQ0FBbUM7QUFFbkMsT0FBTyxDQUFDLFFBQVEsQ0FBQywrQkFBK0IsRUFBRTtJQUM5QyxLQUFLLEVBQUU7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDSixDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsUUFBUSxDQUFDLCtCQUErQixFQUFFO0lBQzlDLEtBQUssRUFBRTtRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsVUFBVSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNKLENBQUMsQ0FBQztBQUVILENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBQyxVQUFVLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztBQUNwRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBRXZFLHVEQUF1RDtBQUN2RCwwRUFBMEU7QUFDMUUsMkRBQTJEO0FBRTNELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDWixJQUFJLFdBQVcsR0FBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDakUsRUFBRSxDQUFBLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7YUFDckQsSUFBSSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsR0FBRSxXQUFXLEdBQUUsNEJBQTRCLENBQUM7YUFDNUUsV0FBVyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDOUMsQ0FBQztBQUVMLENBQUMsRUFBRTtJQUNDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDckQsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUE7QUFDMUMsQ0FBQyxDQUFDLENBQUM7OztBQzVESCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJkZWNsYXJlIHZhciBpc01vYmlsZTogYW55O1xuZGVjbGFyZSB2YXIgZW5xdWlyZTogYW55O1xuXG5pbnRlcmZhY2UgSlF1ZXJ5U3RhdGljIHtcbiAgICBzdGlja19pbl9wYXJlbnQ6IGFueTsgICBcbn1cbmludGVyZmFjZSBKUXVlcnkge1xuICAgIHN0aWNrX2luX3BhcmVudDogYW55OyAgIFxufVxuXG5Nb2Rlcm5penIuYWRkVGVzdCgnaXNtb2JpbGUnLCBmdW5jdGlvbigpIHtcbiByZXR1cm4gaXNNb2JpbGUuYW55O1xufSk7XG4vLyBjb25zb2xlLmxvZyhNb2Rlcm5penIuaXNtb2JpbGUpO1xuXG5lbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweClcIiwge1xuICAgIG1hdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIG1vYmlsZScpO1xuICAgICAgICAkKFwiLnllYXItaW1hZ2VcIikuc3RpY2tfaW5fcGFyZW50KHtvZmZzZXRfdG9wOiAxOH0pO1xuICAgIH0sXG4gICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndW5tYXRjaGVkIG1vYmlsZScpO1xuICAgICAgICAkKFwiLnllYXItaW1hZ2VcIikudHJpZ2dlcihcInN0aWNreV9raXQ6ZGV0YWNoXCIpO1xuICAgIH0sXG59KTtcblxuZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpXCIsIHtcbiAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCBkZXNrdG9wJyk7XG4gICAgICAgICQoXCIucGllY2VzXCIpLnN0aWNrX2luX3BhcmVudCh7b2Zmc2V0X3RvcDogMzZ9KTtcbiAgICAgICAgJChcIi55ZWFyLWltYWdlXCIpLnN0aWNrX2luX3BhcmVudCh7Ym90dG9taW5nOiB0cnVlLCBvZmZzZXRfdG9wOiA3Mn0pO1xuICAgICAgICAkKFwiLnllYXItaW1hZ2UgZHRcIikuc3RpY2tfaW5fcGFyZW50KHtib3R0b21pbmc6IGZhbHNlLCBvZmZzZXRfdG9wOiAwfSk7XG4gICAgfSxcbiAgICB1bm1hdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1bm1hdGNoZWQgZGVza3RvcCcpO1xuICAgICAgICAkKFwiLnBpZWNlc1wiKS50cmlnZ2VyKFwic3RpY2t5X2tpdDpkZXRhY2hcIik7XG4gICAgICAgICQoXCIueWVhci1pbWFnZVwiKS50cmlnZ2VyKFwic3RpY2t5X2tpdDpkZXRhY2hcIik7XG4gICAgICAgICQoXCIueWVhci1pbWFnZSBkdFwiKS50cmlnZ2VyKFwic3RpY2t5X2tpdDpkZXRhY2hcIik7XG4gICAgfSxcbn0pO1xuXG4kKFwiLnBpZWNlc1wiKS5zdGlja19pbl9wYXJlbnQoe29mZnNldF90b3A6IDM2fSk7XG4kKFwiLnllYXItaW1hZ2VcIikuc3RpY2tfaW5fcGFyZW50KHtib3R0b21pbmc6IHRydWUsIG9mZnNldF90b3A6IDcyfSk7XG4kKFwiLnllYXItaW1hZ2UgZHRcIikuc3RpY2tfaW5fcGFyZW50KHtib3R0b21pbmc6IGZhbHNlLCBvZmZzZXRfdG9wOiAwfSk7XG5cbi8vICQoXCIueWVhci1pbWFnZVwiKS5zdGlja19pbl9wYXJlbnQoe2JvdHRvbWluZzogdHJ1ZX0pO1xuLy8gJChcIi55ZWFyLWltYWdlIGRkXCIpLnN0aWNrX2luX3BhcmVudCh7Ym90dG9taW5nOiB0cnVlLCBvZmZzZXRfdG9wOiA5MH0pO1xuLy8gJChcIi55ZWFyLWltYWdlIGR0XCIpLnN0aWNrX2luX3BhcmVudCh7Ym90dG9taW5nOiBmYWxzZX0pO1xuXG4kKFwiZGQgYVwiKS5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICB2YXIgZmVhdHVyZWRVcmw6c3RyaW5nID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1mZWF0dXJlZC1pbWFnZS11cmxcIik7XG4gICAgaWYoZmVhdHVyZWRVcmwpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLmZlYXR1cmVkLWltYWdlXCIpXG4gICAgICAgICAgICAuYXR0cihcInN0eWxlXCIsIFwiYmFja2dyb3VuZDogdXJsKFwiKyBmZWF0dXJlZFVybCArXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1wiKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiaGlkZGVuLWZlYXR1cmVkLWltYWdlXCIpO1xuICAgIH1cbiAgICBcbn0sIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIuZmVhdHVyZWQtaW1hZ2VcIilcbiAgICAgICAgLmFkZENsYXNzKFwiaGlkZGVuLWZlYXR1cmVkLWltYWdlXCIpXG59KTsiLCIiXX0=

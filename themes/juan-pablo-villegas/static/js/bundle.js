(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// import utils = require('./utils')
Modernizr.addTest('ismobile', function () {
    return isMobile.any;
});
// console.log(Modernizr.ismobile);
$(".pieces").stick_in_parent({ offset_top: 36 });
$(".year-image").stick_in_parent({ bottoming: true });
$(".year-image dt").stick_in_parent({ bottoming: false });
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
},{"dup":2}]},{},[1,2,3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvanVhbi1wYWJsby12aWxsZWdhcy9zdGF0aWMvdHMvYXBwLnRzIiwidHlwaW5ncy9pbmRleC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsb0NBQW9DO0FBUXBDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO0lBQzdCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDO0FBRUgsbUNBQW1DO0FBR25DLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBQyxVQUFVLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7QUFFeEQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNaLElBQUksV0FBVyxHQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUNqRSxFQUFFLENBQUEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzthQUNyRCxJQUFJLENBQUMsT0FBTyxFQUFFLGtCQUFrQixHQUFFLFdBQVcsR0FBRSw0QkFBNEIsQ0FBQzthQUM1RSxXQUFXLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0FBRUwsQ0FBQyxFQUFFO0lBQ0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUNyRCxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtBQUMxQyxDQUFDLENBQUMsQ0FBQzs7O0FDOUJIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGltcG9ydCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxuXG4vLyBjb25zb2xlLmxvZygnSGVsbG8gd3dvcmxkJyk7XG5cbmRlY2xhcmUgdmFyIGlzTW9iaWxlOiBhbnk7XG5kZWNsYXJlIHZhciBNb2Rlcm5penI6IGFueTtcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuTW9kZXJuaXpyLmFkZFRlc3QoJ2lzbW9iaWxlJywgZnVuY3Rpb24oKSB7XG4gcmV0dXJuIGlzTW9iaWxlLmFueTtcbn0pO1xuXG4vLyBjb25zb2xlLmxvZyhNb2Rlcm5penIuaXNtb2JpbGUpO1xuXG5cbiQoXCIucGllY2VzXCIpLnN0aWNrX2luX3BhcmVudCh7b2Zmc2V0X3RvcDogMzZ9KTtcbiQoXCIueWVhci1pbWFnZVwiKS5zdGlja19pbl9wYXJlbnQoe2JvdHRvbWluZzogdHJ1ZX0pO1xuJChcIi55ZWFyLWltYWdlIGR0XCIpLnN0aWNrX2luX3BhcmVudCh7Ym90dG9taW5nOiBmYWxzZX0pO1xuXG4kKFwiZGQgYVwiKS5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICB2YXIgZmVhdHVyZWRVcmw6c3RyaW5nID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1mZWF0dXJlZC1pbWFnZS11cmxcIik7XG4gICAgaWYoZmVhdHVyZWRVcmwpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLmZlYXR1cmVkLWltYWdlXCIpXG4gICAgICAgICAgICAuYXR0cihcInN0eWxlXCIsIFwiYmFja2dyb3VuZDogdXJsKFwiKyBmZWF0dXJlZFVybCArXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1wiKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiaGlkZGVuLWZlYXR1cmVkLWltYWdlXCIpO1xuICAgIH1cbiAgICBcbn0sIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIuZmVhdHVyZWQtaW1hZ2VcIilcbiAgICAgICAgLmFkZENsYXNzKFwiaGlkZGVuLWZlYXR1cmVkLWltYWdlXCIpXG59KTsiLCIiXX0=

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function siblingArray(arr, key, match) {
    var matches;
    matches = arr.filter(function (val, index, array) {
        return val[key] === match;
    });
    return matches;
}
function toDataUrl(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        };
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.send();
}
imgArr = [];
Modernizr.addTest('ismobile', function () {
    return isMobile.any;
});
enquire.register("screen and (max-width: 768px)", {
    match: function () {
        $(".year-image").stick_in_parent({ offset_top: 36 });
    },
    unmatch: function () {
        $(".year-image").trigger("sticky_kit:detach");
    }
});
enquire.register("screen and (min-width: 769px)", {
    deferSetup: true,
    setup: function () {
        if (!isMobile.any) {
            $("dd a").each(function () {
                var imageUrl = $(this).attr("data-featured-image-url");
                toDataUrl(imageUrl, function (base64Img) {
                    imgArr.push({ "url": imageUrl, "base64": base64Img });
                });
            });
        }
    },
    match: function () {
        $(".pieces").stick_in_parent({ offset_top: 36 });
        $(".year-image").stick_in_parent({ bottoming: true, offset_top: 72 });
        $(".year-image dt").stick_in_parent({ bottoming: false, offset_top: 0 });
        if (!isMobile.any) {
            $("dd a").hover(function () {
                var featuredUrl = $(this).attr("data-featured-image-url");
                var featuredImg = $(this).parents(".year-box").find(".featured-image");
                var base64 = siblingArray(imgArr, "url", featuredUrl)[0].base64;
                featuredImg.css("background", "url(" + base64 + ") no-repeat center center").css('opacity', '1');
            }, function () {
                var featuredUrl = $(this).attr("data-featured-image-url");
                var featuredImg = $(this).parents(".year-box").find(".featured-image");
                featuredImg.css('opacity', '0');
            });
        }
    },
    unmatch: function () {
        $(".pieces").trigger("sticky_kit:detach");
        $(".year-image").trigger("sticky_kit:detach");
        $(".year-image dt").trigger("sticky_kit:detach");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvanVhbi1wYWJsby12aWxsZWdhcy9zdGF0aWMvdHMvYXBwLnRzIiwidHlwaW5ncy9nbG9iYWxzL2pxdWVyeS9pbmRleC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDR0Esc0JBQXNCLEdBQWMsRUFBRSxHQUFVLEVBQUUsS0FBWTtJQUMxRCxJQUFJLE9BQU8sQ0FBQztJQUNaLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFnQjtRQUN4RCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQztJQUM1QixDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVILG1CQUFtQixHQUFHLEVBQUUsUUFBUTtJQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQy9CLEdBQUcsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO0lBQzFCLEdBQUcsQ0FBQyxNQUFNLEdBQUc7UUFDWCxJQUFJLE1BQU0sR0FBSSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxTQUFTLEdBQUc7WUFDZixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQTtRQUNELE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQztJQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBRVosU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7SUFDN0IsTUFBTSxDQUFDLFFBQVEsQ0FB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QUMxQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNKLENBQUMsQ0FBQzs7O0FDM0VIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImRlY2xhcmUgdmFyIGlzTW9iaWxlOiBhbnk7XG5kZWNsYXJlIHZhciBlbnF1aXJlOiBhbnk7XG5cbmZ1bmN0aW9uIHNpYmxpbmdBcnJheShhcnI6QXJyYXk8YW55Piwga2V5OnN0cmluZywgbWF0Y2g6c3RyaW5nKSB7XG4gICAgbGV0IG1hdGNoZXM7XG4gICAgbWF0Y2hlcyA9IGFyci5maWx0ZXIoZnVuY3Rpb24odmFsLCBpbmRleCwgYXJyYXk6QXJyYXk8YW55Pikge1xuICAgICAgcmV0dXJuIHZhbFtrZXldID09PSBtYXRjaDtcbiAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG5mdW5jdGlvbiB0b0RhdGFVcmwodXJsLCBjYWxsYmFjayl7XG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHJlYWRlciAgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYWxsYmFjayhyZWFkZXIucmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHhoci5yZXNwb25zZSk7XG4gICAgfTtcbiAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICB4aHIuc2VuZCgpO1xufVxuXG5pbWdBcnIgPSBbXTtcblxuTW9kZXJuaXpyLmFkZFRlc3QoJ2lzbW9iaWxlJywgZnVuY3Rpb24oKSB7XG4gcmV0dXJuIGlzTW9iaWxlLmFueTtcbn0pO1xuXG5lbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweClcIiwge1xuICAgIG1hdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIueWVhci1pbWFnZVwiKS5zdGlja19pbl9wYXJlbnQoe29mZnNldF90b3A6IDM2fSk7XG4gICAgfSxcbiAgICB1bm1hdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIueWVhci1pbWFnZVwiKS50cmlnZ2VyKFwic3RpY2t5X2tpdDpkZXRhY2hcIik7XG4gICAgfSxcbn0pO1xuXG5lbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweClcIiwge1xuICAgIGRlZmVyU2V0dXA6IHRydWUsXG4gICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoIWlzTW9iaWxlLmFueSkge1xuICAgICAgICAgICAgJChcImRkIGFcIikuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBpbWFnZVVybCA9ICQodGhpcykuYXR0cihcImRhdGEtZmVhdHVyZWQtaW1hZ2UtdXJsXCIpO1xuICAgICAgICAgICAgICAgIHRvRGF0YVVybChpbWFnZVVybCwgZnVuY3Rpb24oYmFzZTY0SW1nKXtcbiAgICAgICAgICAgICAgICAgICAgaW1nQXJyLnB1c2goe1widXJsXCI6IGltYWdlVXJsLCBcImJhc2U2NFwiOiBiYXNlNjRJbWd9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLnBpZWNlc1wiKS5zdGlja19pbl9wYXJlbnQoe29mZnNldF90b3A6IDM2fSk7XG4gICAgICAgICQoXCIueWVhci1pbWFnZVwiKS5zdGlja19pbl9wYXJlbnQoe2JvdHRvbWluZzogdHJ1ZSwgb2Zmc2V0X3RvcDogNzJ9KTtcbiAgICAgICAgJChcIi55ZWFyLWltYWdlIGR0XCIpLnN0aWNrX2luX3BhcmVudCh7Ym90dG9taW5nOiBmYWxzZSwgb2Zmc2V0X3RvcDogMH0pO1xuICAgICAgICBpZighaXNNb2JpbGUuYW55KSB7XG4gICAgICAgICAgICAkKFwiZGQgYVwiKS5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmVhdHVyZWRVcmw6c3RyaW5nID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1mZWF0dXJlZC1pbWFnZS11cmxcIik7XG4gICAgICAgICAgICAgICAgbGV0IGZlYXR1cmVkSW1nID0gJCh0aGlzKS5wYXJlbnRzKFwiLnllYXItYm94XCIpLmZpbmQoXCIuZmVhdHVyZWQtaW1hZ2VcIilcbiAgICAgICAgICAgICAgICBsZXQgYmFzZTY0ID0gc2libGluZ0FycmF5KGltZ0FyciwgXCJ1cmxcIiwgZmVhdHVyZWRVcmwpWzBdLmJhc2U2NDtcbiAgICAgICAgICAgICAgICBmZWF0dXJlZEltZy5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwidXJsKFwiICsgYmFzZTY0ICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyXCIgKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBmZWF0dXJlZFVybDpzdHJpbmcgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWZlYXR1cmVkLWltYWdlLXVybFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgZmVhdHVyZWRJbWcgPSAkKHRoaXMpLnBhcmVudHMoXCIueWVhci1ib3hcIikuZmluZChcIi5mZWF0dXJlZC1pbWFnZVwiKTtcbiAgICAgICAgICAgICAgICBmZWF0dXJlZEltZy5jc3MoJ29wYWNpdHknLCAnMCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5waWVjZXNcIikudHJpZ2dlcihcInN0aWNreV9raXQ6ZGV0YWNoXCIpO1xuICAgICAgICAkKFwiLnllYXItaW1hZ2VcIikudHJpZ2dlcihcInN0aWNreV9raXQ6ZGV0YWNoXCIpO1xuICAgICAgICAkKFwiLnllYXItaW1hZ2UgZHRcIikudHJpZ2dlcihcInN0aWNreV9raXQ6ZGV0YWNoXCIpO1xuICAgIH0sXG59KTtcblxuIiwiIl19

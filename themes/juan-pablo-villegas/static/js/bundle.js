(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Modernizr.addTest('ismobile', function () {
    return isMobile.any;
});
enquire.register("screen and (max-width: 768px)", {
    match: function () {
        // console.log('matched mobile');
        $(".year-image").stick_in_parent({ offset_top: 36 });
    },
    unmatch: function () {
        // console.log('unmatched mobile');
        $(".year-image").trigger("sticky_kit:detach");
    }
});
enquire.register("screen and (min-width: 769px)", {
    match: function () {
        // console.log('matched desktop');
        $(".pieces").stick_in_parent({ offset_top: 36 });
        $(".year-image").stick_in_parent({ bottoming: true, offset_top: 72 });
        $(".year-image dt").stick_in_parent({ bottoming: false, offset_top: 0 });
    },
    unmatch: function () {
        // console.log('unmatched desktop');
        $(".pieces").trigger("sticky_kit:detach");
        $(".year-image").trigger("sticky_kit:detach");
        $(".year-image dt").trigger("sticky_kit:detach");
    }
});
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
$("dd a").each(function () {
    var imageUrl = $(this).attr("data-featured-image-url");
    toDataUrl(imageUrl, function (base64Img) {
        imgArr.push({ "url": imageUrl, "base64": base64Img });
    });
});
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

},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],4:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],5:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}]},{},[1,2,3,4,5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvanVhbi1wYWJsby12aWxsZWdhcy9zdGF0aWMvdHMvYXBwLnRzIiwidHlwaW5ncy9nbG9iYWxzL2pxdWVyeS9pbmRleC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDR0EsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7SUFDN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsUUFBUSxDQUFDLCtCQUErQixFQUFFO0lBQzlDLEtBQUssRUFBRTtRQUNILGlDQUFpQztRQUNqQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsVUFBVSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLG1DQUFtQztRQUNuQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNKLENBQUMsQ0FBQztBQUVILE9BQU8sQ0FBQyxRQUFRLENBQUMsK0JBQStCLEVBQUU7SUFDOUMsS0FBSyxFQUFFO1FBQ0gsa0NBQWtDO1FBQ2xDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBQyxVQUFVLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxvQ0FB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QUMsQ0FBQzs7O0FDekVIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImRlY2xhcmUgdmFyIGlzTW9iaWxlOiBhbnk7XG5kZWNsYXJlIHZhciBlbnF1aXJlOiBhbnk7XG5cbk1vZGVybml6ci5hZGRUZXN0KCdpc21vYmlsZScsIGZ1bmN0aW9uKCkge1xuIHJldHVybiBpc01vYmlsZS5hbnk7XG59KTtcblxuZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpXCIsIHtcbiAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbWF0Y2hlZCBtb2JpbGUnKTtcbiAgICAgICAgJChcIi55ZWFyLWltYWdlXCIpLnN0aWNrX2luX3BhcmVudCh7b2Zmc2V0X3RvcDogMzZ9KTtcbiAgICB9LFxuICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VubWF0Y2hlZCBtb2JpbGUnKTtcbiAgICAgICAgJChcIi55ZWFyLWltYWdlXCIpLnRyaWdnZXIoXCJzdGlja3lfa2l0OmRldGFjaFwiKTtcbiAgICB9LFxufSk7XG5cbmVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KVwiLCB7XG4gICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21hdGNoZWQgZGVza3RvcCcpO1xuICAgICAgICAkKFwiLnBpZWNlc1wiKS5zdGlja19pbl9wYXJlbnQoe29mZnNldF90b3A6IDM2fSk7XG4gICAgICAgICQoXCIueWVhci1pbWFnZVwiKS5zdGlja19pbl9wYXJlbnQoe2JvdHRvbWluZzogdHJ1ZSwgb2Zmc2V0X3RvcDogNzJ9KTtcbiAgICAgICAgJChcIi55ZWFyLWltYWdlIGR0XCIpLnN0aWNrX2luX3BhcmVudCh7Ym90dG9taW5nOiBmYWxzZSwgb2Zmc2V0X3RvcDogMH0pO1xuICAgIH0sXG4gICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndW5tYXRjaGVkIGRlc2t0b3AnKTtcbiAgICAgICAgJChcIi5waWVjZXNcIikudHJpZ2dlcihcInN0aWNreV9raXQ6ZGV0YWNoXCIpO1xuICAgICAgICAkKFwiLnllYXItaW1hZ2VcIikudHJpZ2dlcihcInN0aWNreV9raXQ6ZGV0YWNoXCIpO1xuICAgICAgICAkKFwiLnllYXItaW1hZ2UgZHRcIikudHJpZ2dlcihcInN0aWNreV9raXQ6ZGV0YWNoXCIpO1xuICAgIH0sXG59KTtcblxuZnVuY3Rpb24gc2libGluZ0FycmF5KGFycjpBcnJheTxhbnk+LCBrZXk6c3RyaW5nLCBtYXRjaDpzdHJpbmcpIHtcbiAgICBsZXQgbWF0Y2hlcztcbiAgICBtYXRjaGVzID0gYXJyLmZpbHRlcihmdW5jdGlvbih2YWwsIGluZGV4LCBhcnJheTpBcnJheTxhbnk+KSB7XG4gICAgICByZXR1cm4gdmFsW2tleV0gPT09IG1hdGNoO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbmZ1bmN0aW9uIHRvRGF0YVVybCh1cmwsIGNhbGxiYWNrKXtcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgcmVhZGVyICA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxiYWNrKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoeGhyLnJlc3BvbnNlKTtcbiAgICB9O1xuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgIHhoci5zZW5kKCk7XG59XG5cbmltZ0FyciA9IFtdO1xuJChcImRkIGFcIikuZWFjaChmdW5jdGlvbigpe1xuICAgIGxldCBpbWFnZVVybCA9ICQodGhpcykuYXR0cihcImRhdGEtZmVhdHVyZWQtaW1hZ2UtdXJsXCIpO1xuICAgIHRvRGF0YVVybChpbWFnZVVybCwgZnVuY3Rpb24oYmFzZTY0SW1nKXtcbiAgICAgICAgaW1nQXJyLnB1c2goe1widXJsXCI6IGltYWdlVXJsLCBcImJhc2U2NFwiOiBiYXNlNjRJbWd9KTtcbiAgICB9KTtcbn0pO1xuXG4kKFwiZGQgYVwiKS5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICBsZXQgZmVhdHVyZWRVcmw6c3RyaW5nID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1mZWF0dXJlZC1pbWFnZS11cmxcIik7XG4gICAgbGV0IGZlYXR1cmVkSW1nID0gJCh0aGlzKS5wYXJlbnRzKFwiLnllYXItYm94XCIpLmZpbmQoXCIuZmVhdHVyZWQtaW1hZ2VcIilcbiAgICBsZXQgYmFzZTY0ID0gc2libGluZ0FycmF5KGltZ0FyciwgXCJ1cmxcIiwgZmVhdHVyZWRVcmwpWzBdLmJhc2U2NDtcbiAgICBmZWF0dXJlZEltZy5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwidXJsKFwiICsgYmFzZTY0ICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyXCIgKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgIFxufSwgZnVuY3Rpb24gKCkge1xuICAgIGxldCBmZWF0dXJlZFVybDpzdHJpbmcgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWZlYXR1cmVkLWltYWdlLXVybFwiKTtcbiAgICBsZXQgZmVhdHVyZWRJbWcgPSAkKHRoaXMpLnBhcmVudHMoXCIueWVhci1ib3hcIikuZmluZChcIi5mZWF0dXJlZC1pbWFnZVwiKTtcbiAgICBmZWF0dXJlZEltZy5jc3MoJ29wYWNpdHknLCAnMCcpO1xufSk7IiwiIl19

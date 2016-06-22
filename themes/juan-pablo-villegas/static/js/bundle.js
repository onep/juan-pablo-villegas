(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// interface JQueryStatic {
//     stick_in_parent: any;
// }
// interface JQuery {
//     stick_in_parent: any;
// }
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
// $("dd a").hover(function() {
//     var featuredUrl:string = $(this).attr("data-featured-image-url");
//         $(this).parent().parent().parent().find(".featured-image")
//             // .attr("style", "background: url("+ featuredUrl +") no-repeat center center;")
//             .find('img[src="' + featuredUrl + '"]')
//             .addClass('visible-image');
// }, function () {
//     var featuredUrl:string = $(this).attr("data-featured-image-url");
//         $(this).parent().parent().parent().find(".featured-image")
//             .find('img[src="' + featuredUrl + '"]')
//             .removeClass('visible-image');
// });
// var imgArr = [];
// $("dd a").each(function(){
//     imgArr.push($(this).attr("data-featured-image-url"));
// });
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
// new preLoader(imgArr, {
//     onProgress: function (src, element, index) {
//         if (element) {
//             console.log('loaded ' + src);
//             console.log(
//                 $('nav')
//                     .find('dd a[data-featured-image-url="' + src + '"]')
//                     .parent().parent().parent()
//                     .find(".year-image .featured-image")
//                     .append(element)
//             );
//         } else {
//             console.log('failed ' + src);
//         }
//     }
// }); 

},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],4:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],5:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}]},{},[1,2,3,4,5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvanVhbi1wYWJsby12aWxsZWdhcy9zdGF0aWMvdHMvYXBwLnRzIiwidHlwaW5ncy9nbG9iYWxzL2pxdWVyeS9pbmRleC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDSUEsMkJBQTJCO0FBQzNCLDRCQUE0QjtBQUM1QixJQUFJO0FBQ0oscUJBQXFCO0FBQ3JCLDRCQUE0QjtBQUM1QixJQUFJO0FBRUosU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7SUFDN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsUUFBUSxDQUFDLCtCQUErQixFQUFFO0lBQzlDLEtBQUssRUFBRTtRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsVUFBVSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNKLENBQUMsQ0FBQztBQUVILE9BQU8sQ0FBQyxRQUFRLENBQUMsK0JBQStCLEVBQUU7SUFDOUMsS0FBSyxFQUFFO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBQyxVQUFVLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxV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LENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDaEUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxHQUFHLE1BQU0sR0FBRywyQkFBMkIsQ0FBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFdEcsQ0FBQyxFQUFFO0lBQ0MsSUFBSSxXQUFXLEdBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ2pFLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdkUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDLENBQUM7QUFFSCwwQkFBMEI7QUFDMUIsbURBQW1EO0FBQ25ELHlCQUF5QjtBQUN6Qiw0Q0FBNEM7QUFDNUMsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQiwyRUFBMkU7QUFDM0Usa0RBQWtEO0FBQ2xELDJEQUEyRDtBQUMzRCx1Q0FBdUM7QUFDdkMsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQiw0Q0FBNEM7QUFDNUMsWUFBWTtBQUNaLFFBQVE7QUFDUixNQUFNOzs7QUNySE4iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZGVjbGFyZSB2YXIgaXNNb2JpbGU6IGFueTtcbmRlY2xhcmUgdmFyIGVucXVpcmU6IGFueTtcblxuXG4vLyBpbnRlcmZhY2UgSlF1ZXJ5U3RhdGljIHtcbi8vICAgICBzdGlja19pbl9wYXJlbnQ6IGFueTtcbi8vIH1cbi8vIGludGVyZmFjZSBKUXVlcnkge1xuLy8gICAgIHN0aWNrX2luX3BhcmVudDogYW55O1xuLy8gfVxuXG5Nb2Rlcm5penIuYWRkVGVzdCgnaXNtb2JpbGUnLCBmdW5jdGlvbigpIHtcbiByZXR1cm4gaXNNb2JpbGUuYW55O1xufSk7XG5cbmVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KVwiLCB7XG4gICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hdGNoZWQgbW9iaWxlJyk7XG4gICAgICAgICQoXCIueWVhci1pbWFnZVwiKS5zdGlja19pbl9wYXJlbnQoe29mZnNldF90b3A6IDM2fSk7XG4gICAgfSxcbiAgICB1bm1hdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1bm1hdGNoZWQgbW9iaWxlJyk7XG4gICAgICAgICQoXCIueWVhci1pbWFnZVwiKS50cmlnZ2VyKFwic3RpY2t5X2tpdDpkZXRhY2hcIik7XG4gICAgfSxcbn0pO1xuXG5lbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweClcIiwge1xuICAgIG1hdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIGRlc2t0b3AnKTtcbiAgICAgICAgJChcIi5waWVjZXNcIikuc3RpY2tfaW5fcGFyZW50KHtvZmZzZXRfdG9wOiAzNn0pO1xuICAgICAgICAkKFwiLnllYXItaW1hZ2VcIikuc3RpY2tfaW5fcGFyZW50KHtib3R0b21pbmc6IHRydWUsIG9mZnNldF90b3A6IDcyfSk7XG4gICAgICAgICQoXCIueWVhci1pbWFnZSBkdFwiKS5zdGlja19pbl9wYXJlbnQoe2JvdHRvbWluZzogZmFsc2UsIG9mZnNldF90b3A6IDB9KTtcbiAgICB9LFxuICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VubWF0Y2hlZCBkZXNrdG9wJyk7XG4gICAgICAgICQoXCIucGllY2VzXCIpLnRyaWdnZXIoXCJzdGlja3lfa2l0OmRldGFjaFwiKTtcbiAgICAgICAgJChcIi55ZWFyLWltYWdlXCIpLnRyaWdnZXIoXCJzdGlja3lfa2l0OmRldGFjaFwiKTtcbiAgICAgICAgJChcIi55ZWFyLWltYWdlIGR0XCIpLnRyaWdnZXIoXCJzdGlja3lfa2l0OmRldGFjaFwiKTtcbiAgICB9LFxufSk7XG5cbi8vICQoXCJkZCBhXCIpLmhvdmVyKGZ1bmN0aW9uKCkge1xuLy8gICAgIHZhciBmZWF0dXJlZFVybDpzdHJpbmcgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWZlYXR1cmVkLWltYWdlLXVybFwiKTtcbi8vICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLmZlYXR1cmVkLWltYWdlXCIpXG4vLyAgICAgICAgICAgICAvLyAuYXR0cihcInN0eWxlXCIsIFwiYmFja2dyb3VuZDogdXJsKFwiKyBmZWF0dXJlZFVybCArXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1wiKVxuLy8gICAgICAgICAgICAgLmZpbmQoJ2ltZ1tzcmM9XCInICsgZmVhdHVyZWRVcmwgKyAnXCJdJylcbi8vICAgICAgICAgICAgIC5hZGRDbGFzcygndmlzaWJsZS1pbWFnZScpO1xuICAgIFxuLy8gfSwgZnVuY3Rpb24gKCkge1xuLy8gICAgIHZhciBmZWF0dXJlZFVybDpzdHJpbmcgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWZlYXR1cmVkLWltYWdlLXVybFwiKTtcbi8vICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLmZlYXR1cmVkLWltYWdlXCIpXG4vLyAgICAgICAgICAgICAuZmluZCgnaW1nW3NyYz1cIicgKyBmZWF0dXJlZFVybCArICdcIl0nKVxuLy8gICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCd2aXNpYmxlLWltYWdlJyk7XG4vLyB9KTtcblxuLy8gdmFyIGltZ0FyciA9IFtdO1xuLy8gJChcImRkIGFcIikuZWFjaChmdW5jdGlvbigpe1xuLy8gICAgIGltZ0Fyci5wdXNoKCQodGhpcykuYXR0cihcImRhdGEtZmVhdHVyZWQtaW1hZ2UtdXJsXCIpKTtcbi8vIH0pO1xuXG5mdW5jdGlvbiBzaWJsaW5nQXJyYXkoYXJyOkFycmF5PGFueT4sIGtleTpzdHJpbmcsIG1hdGNoOnN0cmluZykge1xuICAgIGxldCBtYXRjaGVzO1xuICAgIG1hdGNoZXMgPSBhcnIuZmlsdGVyKGZ1bmN0aW9uKHZhbCwgaW5kZXgsIGFycmF5OkFycmF5PGFueT4pIHtcbiAgICAgIHJldHVybiB2YWxba2V5XSA9PT0gbWF0Y2g7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuZnVuY3Rpb24gdG9EYXRhVXJsKHVybCwgY2FsbGJhY2spe1xuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCByZWFkZXIgID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FsbGJhY2socmVhZGVyLnJlc3VsdCk7XG4gICAgICB9XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh4aHIucmVzcG9uc2UpO1xuICAgIH07XG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgeGhyLnNlbmQoKTtcbn1cblxuaW1nQXJyID0gW107XG4kKFwiZGQgYVwiKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgbGV0IGltYWdlVXJsID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1mZWF0dXJlZC1pbWFnZS11cmxcIik7XG4gICAgdG9EYXRhVXJsKGltYWdlVXJsLCBmdW5jdGlvbihiYXNlNjRJbWcpe1xuICAgICAgICBpbWdBcnIucHVzaCh7XCJ1cmxcIjogaW1hZ2VVcmwsIFwiYmFzZTY0XCI6IGJhc2U2NEltZ30pO1xuICAgIH0pO1xufSk7XG5cbiQoXCJkZCBhXCIpLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgIGxldCBmZWF0dXJlZFVybDpzdHJpbmcgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWZlYXR1cmVkLWltYWdlLXVybFwiKTtcbiAgICBsZXQgZmVhdHVyZWRJbWcgPSAkKHRoaXMpLnBhcmVudHMoXCIueWVhci1ib3hcIikuZmluZChcIi5mZWF0dXJlZC1pbWFnZVwiKVxuICAgIGxldCBiYXNlNjQgPSBzaWJsaW5nQXJyYXkoaW1nQXJyLCBcInVybFwiLCBmZWF0dXJlZFVybClbMF0uYmFzZTY0O1xuICAgIGZlYXR1cmVkSW1nLmNzcyhcImJhY2tncm91bmRcIiwgXCJ1cmwoXCIgKyBiYXNlNjQgKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXJcIiApLmNzcygnb3BhY2l0eScsICcxJyk7XG4gICAgXG59LCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGZlYXR1cmVkVXJsOnN0cmluZyA9ICQodGhpcykuYXR0cihcImRhdGEtZmVhdHVyZWQtaW1hZ2UtdXJsXCIpO1xuICAgIGxldCBmZWF0dXJlZEltZyA9ICQodGhpcykucGFyZW50cyhcIi55ZWFyLWJveFwiKS5maW5kKFwiLmZlYXR1cmVkLWltYWdlXCIpO1xuICAgIGZlYXR1cmVkSW1nLmNzcygnb3BhY2l0eScsICcwJyk7XG59KTtcblxuLy8gbmV3IHByZUxvYWRlcihpbWdBcnIsIHtcbi8vICAgICBvblByb2dyZXNzOiBmdW5jdGlvbiAoc3JjLCBlbGVtZW50LCBpbmRleCkge1xuLy8gICAgICAgICBpZiAoZWxlbWVudCkge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvYWRlZCAnICsgc3JjKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuLy8gICAgICAgICAgICAgICAgICQoJ25hdicpXG4vLyAgICAgICAgICAgICAgICAgICAgIC5maW5kKCdkZCBhW2RhdGEtZmVhdHVyZWQtaW1hZ2UtdXJsPVwiJyArIHNyYyArICdcIl0nKVxuLy8gICAgICAgICAgICAgICAgICAgICAucGFyZW50KCkucGFyZW50KCkucGFyZW50KClcbi8vICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIueWVhci1pbWFnZSAuZmVhdHVyZWQtaW1hZ2VcIilcbi8vICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChlbGVtZW50KVxuLy8gICAgICAgICAgICAgKTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgJyArIHNyYyk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9KTsiLCIiXX0=

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var App = (function () {
    function App() {
        var _this = this;
        this.imgArr = [];
        this.init = function () {
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
                        $("dd a").each(function (index, el) {
                            var imageUrl = $(el).attr("data-featured-image-url");
                            _this.toDataUrl(imageUrl, function (base64Img) {
                                _this.imgArr.push({ "url": imageUrl, "base64": base64Img });
                            });
                        });
                    }
                },
                match: function () {
                    $(".pieces").stick_in_parent({ offset_top: 36 });
                    $(".year-image").stick_in_parent({ bottoming: true, offset_top: 72 });
                    $(".year-image dt").stick_in_parent({ bottoming: false, offset_top: 0 });
                    if (!isMobile.any) {
                        $("dd a").hover(function (ev) {
                            var featuredUrl = $(ev.target).attr("data-featured-image-url");
                            var featuredImg = $(ev.target).parents(".year-box").find(".featured-image");
                            var base64 = _this.siblingArray(_this.imgArr, "url", featuredUrl)[0].base64;
                            featuredImg.css("background", "url(" + base64 + ") no-repeat center center").css('opacity', '1');
                        }, function (ev) {
                            var featuredUrl = $(ev.target).attr("data-featured-image-url");
                            var featuredImg = $(ev.target).parents(".year-box").find(".featured-image");
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
        };
    }
    App.prototype.siblingArray = function (arr, key, match) {
        var matches;
        matches = arr.filter(function (val, index, array) {
            return val[key] === match;
        });
        return matches;
    };
    App.prototype.toDataUrl = function (url, callback) {
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
    };
    return App;
}());
var app = new App;
app.init();

},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],4:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],5:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}]},{},[1,2,3,4,5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvanVhbi1wYWJsby12aWxsZWdhcy9zdGF0aWMvdHMvYXBwLnRzIiwidHlwaW5ncy9nbG9iYWxzL2pxdWVyeS9pbmRleC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDR0E7SUFBQTtRQUFBLGlCQXlFQztRQXhFRyxXQUFNLEdBQWMsRUFBRSxDQUFDO1FBcUJ2QixTQUFJLEdBQUc7WUFDSCxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFDMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsUUFBUSxDQUFDLCtCQUErQixFQUFFO2dCQUM5QyxLQUFLLEVBQUU7b0JBQ0gsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ2xELENBQUM7YUFDSixDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsUUFBUSxDQUFDLCtCQUErQixFQUFFO2dCQUM5QyxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsS0FBSyxFQUFFO29CQUNILEVBQUUsQ0FBQSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUssRUFBRSxFQUFFOzRCQUNyQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7NEJBQ3JELEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFVBQUMsU0FBUztnQ0FDL0IsS0FB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QyxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxNQUFNLEdBQUc7WUFDYixJQUFJLE1BQU0sR0FBSSxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxTQUFTLEdBQUc7Z0JBQ2YsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUE7WUFDRCxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZixDQUFDO0lBb0RMLFVBQUM7QUFBRCxDQXpFQSxBQXlFQyxJQUFBO0FBRUQsSUFBSSxHQUFHLEdBQU8sSUFBSSxHQUFHLENBQUM7QUFDdEIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDOzs7QUMvRVgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZGVjbGFyZSB2YXIgaXNNb2JpbGU6IGFueTtcbmRlY2xhcmUgdmFyIGVucXVpcmU6IGFueTtcblxuY2xhc3MgQXBwIHtcbiAgICBpbWdBcnI6QXJyYXk8YW55PiA9IFtdO1xuICAgIHNpYmxpbmdBcnJheShhcnI6QXJyYXk8YW55Piwga2V5OnN0cmluZywgbWF0Y2g6c3RyaW5nKSB7XG4gICAgICAgIGxldCBtYXRjaGVzO1xuICAgICAgICBtYXRjaGVzID0gYXJyLmZpbHRlcihmdW5jdGlvbih2YWwsIGluZGV4LCBhcnJheTpBcnJheTxhbnk+KSB7XG4gICAgICAgIHJldHVybiB2YWxba2V5XSA9PT0gbWF0Y2g7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICB9XG4gICAgdG9EYXRhVXJsKHVybDpzdHJpbmcsIGNhbGxiYWNrOkZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcmVhZGVyICA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh4aHIucmVzcG9uc2UpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgTW9kZXJuaXpyLmFkZFRlc3QoJ2lzbW9iaWxlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNNb2JpbGUuYW55O1xuICAgICAgICB9KTtcblxuICAgICAgICBlbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweClcIiwge1xuICAgICAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnllYXItaW1hZ2VcIikuc3RpY2tfaW5fcGFyZW50KHtvZmZzZXRfdG9wOiAzNn0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnllYXItaW1hZ2VcIikudHJpZ2dlcihcInN0aWNreV9raXQ6ZGV0YWNoXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpXCIsIHtcbiAgICAgICAgICAgIGRlZmVyU2V0dXA6IHRydWUsXG4gICAgICAgICAgICBzZXR1cDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCFpc01vYmlsZS5hbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcImRkIGFcIikuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VVcmwgPSAkKGVsKS5hdHRyKFwiZGF0YS1mZWF0dXJlZC1pbWFnZS11cmxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvRGF0YVVybChpbWFnZVVybCwgKGJhc2U2NEltZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1nQXJyLnB1c2goe1widXJsXCI6IGltYWdlVXJsLCBcImJhc2U2NFwiOiBiYXNlNjRJbWd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWF0Y2g6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKFwiLnBpZWNlc1wiKS5zdGlja19pbl9wYXJlbnQoe29mZnNldF90b3A6IDM2fSk7XG4gICAgICAgICAgICAgICAgJChcIi55ZWFyLWltYWdlXCIpLnN0aWNrX2luX3BhcmVudCh7Ym90dG9taW5nOiB0cnVlLCBvZmZzZXRfdG9wOiA3Mn0pO1xuICAgICAgICAgICAgICAgICQoXCIueWVhci1pbWFnZSBkdFwiKS5zdGlja19pbl9wYXJlbnQoe2JvdHRvbWluZzogZmFsc2UsIG9mZnNldF90b3A6IDB9KTtcbiAgICAgICAgICAgICAgICBpZighaXNNb2JpbGUuYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCJkZCBhXCIpLmhvdmVyKChldikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZlYXR1cmVkVXJsOnN0cmluZyA9ICQoZXYudGFyZ2V0KS5hdHRyKFwiZGF0YS1mZWF0dXJlZC1pbWFnZS11cmxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmVhdHVyZWRJbWcgPSAkKGV2LnRhcmdldCkucGFyZW50cyhcIi55ZWFyLWJveFwiKS5maW5kKFwiLmZlYXR1cmVkLWltYWdlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZTY0ID0gdGhpcy5zaWJsaW5nQXJyYXkodGhpcy5pbWdBcnIsIFwidXJsXCIsIGZlYXR1cmVkVXJsKVswXS5iYXNlNjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlZEltZy5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwidXJsKFwiICsgYmFzZTY0ICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyXCIgKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZlYXR1cmVkVXJsOnN0cmluZyA9ICQoZXYudGFyZ2V0KS5hdHRyKFwiZGF0YS1mZWF0dXJlZC1pbWFnZS11cmxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmVhdHVyZWRJbWcgPSAkKGV2LnRhcmdldCkucGFyZW50cyhcIi55ZWFyLWJveFwiKS5maW5kKFwiLmZlYXR1cmVkLWltYWdlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZWRJbWcuY3NzKCdvcGFjaXR5JywgJzAnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnBpZWNlc1wiKS50cmlnZ2VyKFwic3RpY2t5X2tpdDpkZXRhY2hcIik7XG4gICAgICAgICAgICAgICAgJChcIi55ZWFyLWltYWdlXCIpLnRyaWdnZXIoXCJzdGlja3lfa2l0OmRldGFjaFwiKTtcbiAgICAgICAgICAgICAgICAkKFwiLnllYXItaW1hZ2UgZHRcIikudHJpZ2dlcihcInN0aWNreV9raXQ6ZGV0YWNoXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5sZXQgYXBwOkFwcCA9IG5ldyBBcHA7XG5hcHAuaW5pdCgpO1xuXG4iLCIiXX0=

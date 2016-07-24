(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var JpvdApp = (function () {
    function JpvdApp() {
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
    JpvdApp.prototype.siblingArray = function (arr, key, match) {
        var matches;
        matches = arr.filter(function (val, index, array) {
            return val[key] === match;
        });
        return matches;
    };
    JpvdApp.prototype.toDataUrl = function (url, callback) {
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
    return JpvdApp;
}());
var jpvdApp = new JpvdApp;
jpvdApp.init();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvanVhbi1wYWJsby12aWxsZWdhcy9zdGF0aWMvdHMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDaUJBO0lBQUE7UUFBQSxpQkF5RUM7UUF4RUcsV0FBTSxHQUFjLEVBQUUsQ0FBQztRQXFCdkIsU0FBSSxHQUFHO1lBQ0gsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQzFCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxDQUFDLFFBQVEsQ0FBQywrQkFBK0IsRUFBRTtnQkFDOUMsS0FBSyxFQUFFO29CQUNlLENBQUMsQ0FBQyxhQUFhLENBQUUsQ0FBQyxlQUFlLENBQUMsRUFBQyxVQUFVLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztnQkFDMUUsQ0FBQztnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2FBQ0osQ0FBQyxDQUFDO1lBRUgsT0FBTyxDQUFDLFFBQVEsQ0FBQywrQkFBK0IsRUFBRTtnQkFDOUMsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLEtBQUssRUFBRTtvQkFDSCxFQUFFLENBQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNmLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLLEVBQUUsRUFBRTs0QkFDckIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOzRCQUNyRCxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxVQUFDLFNBQVM7Z0NBQy9CLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQzs0QkFDN0QsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQztnQkFDTCxDQUFDO2dCQUNELEtBQUssRUFBRTtvQkFDZSxDQUFDLENBQUMsU0FBUyxDQUFFLENBQUMsZUFBZSxDQUFDLEVBQUMsVUFBVSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7b0JBQ2hELENBQUMsQ0FBQyxhQUFhLENBQUUsQ0FBQyxlQUFlLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO29CQUNyRSxDQUFDLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxlQUFlLENBQUMsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO29CQUMxRixFQUFFLENBQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNmLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxFQUFFOzRCQUNmLElBQUksV0FBVyxHQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7NEJBQ3RFLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBOzRCQUMzRSxJQUFJLE1BQU0sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs0QkFDMUUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxHQUFHLE1BQU0sR0FBRywyQkFBMkIsQ0FBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBRXRHLENBQUMsRUFBRSxVQUFVLEVBQUU7NEJBQ1gsSUFBSSxXQUFXLEdBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQzs0QkFDdEUsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7NEJBQzVFLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQyxDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDMUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUM5QyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDckQsQ0FBQzthQUNKLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQTtJQUNMLENBQUM7SUF2RUcsOEJBQVksR0FBWixVQUFhLEdBQWMsRUFBRSxHQUFVLEVBQUUsS0FBWTtRQUNqRCxJQUFJLE9BQU8sQ0FBQztRQUNaLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFnQjtZQUMxRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNELDJCQUFTLEdBQVQsVUFBVSxHQUFVLEVBQUUsUUFBaUI7UUFDbkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUMvQixHQUFHLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMxQixHQUFHLENBQUMsTUFBTSxHQUFHO1lBQ2IsSUFBSSxNQUFNLEdBQUksSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUMvQixNQUFNLENBQUMsU0FBUyxHQUFHO2dCQUNmLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFBO1lBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQW9ETCxjQUFDO0FBQUQsQ0F6RUEsQUF5RUMsSUFBQTtBQUVELElBQUksT0FBTyxHQUFXLElBQUksT0FBTyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJkZWNsYXJlIHZhciBpc01vYmlsZTogYW55O1xuZGVjbGFyZSB2YXIgZW5xdWlyZTogYW55O1xuXG5pbnRlcmZhY2UgSlF1ZXJ5U3RpY2t5S2l0U2V0dGluZ3Mge1xuICAgIHN0aWNreV9jbGFzcz86IHN0cmluZztcbiAgICBpbm5lcl9zY3JvbGxpbmc/OiBib29sZWFuO1xuICAgIHJlY2FsY19ldmVyeT86IG51bWJlcjtcbiAgICBwYXJlbnQ/OiBzdHJpbmc7XG4gICAgb2Zmc2V0X3RvcD86IG51bWJlcjtcbiAgICBzcGFjZXI/OiBzdHJpbmd8Ym9vbGVhbjtcbiAgICBib3R0b21pbmc/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBKUXVlcnlTdGlja3lLaXQgZXh0ZW5kcyBKUXVlcnkge1xuICAgIHN0aWNrX2luX3BhcmVudChzZXR0aW5nczogSlF1ZXJ5U3RpY2t5S2l0U2V0dGluZ3MpOkpRdWVyeVN0aWNreUtpdDtcbn1cblxuY2xhc3MgSnB2ZEFwcCB7XG4gICAgaW1nQXJyOkFycmF5PGFueT4gPSBbXTtcbiAgICBzaWJsaW5nQXJyYXkoYXJyOkFycmF5PGFueT4sIGtleTpzdHJpbmcsIG1hdGNoOnN0cmluZykge1xuICAgICAgICBsZXQgbWF0Y2hlcztcbiAgICAgICAgbWF0Y2hlcyA9IGFyci5maWx0ZXIoZnVuY3Rpb24odmFsLCBpbmRleCwgYXJyYXk6QXJyYXk8YW55Pikge1xuICAgICAgICByZXR1cm4gdmFsW2tleV0gPT09IG1hdGNoO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgfVxuICAgIHRvRGF0YVVybCh1cmw6c3RyaW5nLCBjYWxsYmFjazpGdW5jdGlvbikge1xuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHJlYWRlciAgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2socmVhZGVyLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICAgIE1vZGVybml6ci5hZGRUZXN0KCdpc21vYmlsZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzTW9iaWxlLmFueTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpXCIsIHtcbiAgICAgICAgICAgIG1hdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgKDxKUXVlcnlTdGlja3lLaXQ+JChcIi55ZWFyLWltYWdlXCIpKS5zdGlja19pbl9wYXJlbnQoe29mZnNldF90b3A6IDM2fSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoXCIueWVhci1pbWFnZVwiKS50cmlnZ2VyKFwic3RpY2t5X2tpdDpkZXRhY2hcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBlbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweClcIiwge1xuICAgICAgICAgICAgZGVmZXJTZXR1cDogdHJ1ZSxcbiAgICAgICAgICAgIHNldHVwOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIWlzTW9iaWxlLmFueSkge1xuICAgICAgICAgICAgICAgICAgICAkKFwiZGQgYVwiKS5lYWNoKChpbmRleCwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZVVybCA9ICQoZWwpLmF0dHIoXCJkYXRhLWZlYXR1cmVkLWltYWdlLXVybFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9EYXRhVXJsKGltYWdlVXJsLCAoYmFzZTY0SW1nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWdBcnIucHVzaCh7XCJ1cmxcIjogaW1hZ2VVcmwsIFwiYmFzZTY0XCI6IGJhc2U2NEltZ30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXRjaDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICg8SlF1ZXJ5U3RpY2t5S2l0PiQoXCIucGllY2VzXCIpKS5zdGlja19pbl9wYXJlbnQoe29mZnNldF90b3A6IDM2fSk7XG4gICAgICAgICAgICAgICAgKDxKUXVlcnlTdGlja3lLaXQ+JChcIi55ZWFyLWltYWdlXCIpKS5zdGlja19pbl9wYXJlbnQoe2JvdHRvbWluZzogdHJ1ZSwgb2Zmc2V0X3RvcDogNzJ9KTtcbiAgICAgICAgICAgICAgICAoPEpRdWVyeVN0aWNreUtpdD4kKFwiLnllYXItaW1hZ2UgZHRcIikpLnN0aWNrX2luX3BhcmVudCh7Ym90dG9taW5nOiBmYWxzZSwgb2Zmc2V0X3RvcDogMH0pO1xuICAgICAgICAgICAgICAgIGlmKCFpc01vYmlsZS5hbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcImRkIGFcIikuaG92ZXIoKGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmVhdHVyZWRVcmw6c3RyaW5nID0gJChldi50YXJnZXQpLmF0dHIoXCJkYXRhLWZlYXR1cmVkLWltYWdlLXVybFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmZWF0dXJlZEltZyA9ICQoZXYudGFyZ2V0KS5wYXJlbnRzKFwiLnllYXItYm94XCIpLmZpbmQoXCIuZmVhdHVyZWQtaW1hZ2VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiYXNlNjQgPSB0aGlzLnNpYmxpbmdBcnJheSh0aGlzLmltZ0FyciwgXCJ1cmxcIiwgZmVhdHVyZWRVcmwpWzBdLmJhc2U2NDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVkSW1nLmNzcyhcImJhY2tncm91bmRcIiwgXCJ1cmwoXCIgKyBiYXNlNjQgKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXJcIiApLmNzcygnb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmVhdHVyZWRVcmw6c3RyaW5nID0gJChldi50YXJnZXQpLmF0dHIoXCJkYXRhLWZlYXR1cmVkLWltYWdlLXVybFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmZWF0dXJlZEltZyA9ICQoZXYudGFyZ2V0KS5wYXJlbnRzKFwiLnllYXItYm94XCIpLmZpbmQoXCIuZmVhdHVyZWQtaW1hZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlZEltZy5jc3MoJ29wYWNpdHknLCAnMCcpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoXCIucGllY2VzXCIpLnRyaWdnZXIoXCJzdGlja3lfa2l0OmRldGFjaFwiKTtcbiAgICAgICAgICAgICAgICAkKFwiLnllYXItaW1hZ2VcIikudHJpZ2dlcihcInN0aWNreV9raXQ6ZGV0YWNoXCIpO1xuICAgICAgICAgICAgICAgICQoXCIueWVhci1pbWFnZSBkdFwiKS50cmlnZ2VyKFwic3RpY2t5X2tpdDpkZXRhY2hcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmxldCBqcHZkQXBwOkpwdmRBcHAgPSBuZXcgSnB2ZEFwcDtcbmpwdmRBcHAuaW5pdCgpO1xuXG4iXX0=

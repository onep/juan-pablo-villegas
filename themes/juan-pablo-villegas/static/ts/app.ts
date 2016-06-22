declare var isMobile: any;
declare var enquire: any;

function siblingArray(arr:Array<any>, key:string, match:string) {
    let matches;
    matches = arr.filter(function(val, index, array:Array<any>) {
      return val[key] === match;
    });
    return matches;
  }

function toDataUrl(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function() {
      let reader  = new FileReader();
      reader.onloadend = function () {
          callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.send();
}

imgArr = [];

Modernizr.addTest('ismobile', function() {
 return isMobile.any;
});

enquire.register("screen and (max-width: 768px)", {
    match: function () {
        $(".year-image").stick_in_parent({offset_top: 36});
    },
    unmatch: function () {
        $(".year-image").trigger("sticky_kit:detach");
    },
});

enquire.register("screen and (min-width: 769px)", {
    deferSetup: true,
    setup: function () {
        if(!isMobile.any) {
            $("dd a").each(function(){
                let imageUrl = $(this).attr("data-featured-image-url");
                toDataUrl(imageUrl, function(base64Img){
                    imgArr.push({"url": imageUrl, "base64": base64Img});
                });
            });
        }
    },
    match: function () {
        $(".pieces").stick_in_parent({offset_top: 36});
        $(".year-image").stick_in_parent({bottoming: true, offset_top: 72});
        $(".year-image dt").stick_in_parent({bottoming: false, offset_top: 0});
        if(!isMobile.any) {
            $("dd a").hover(function() {
                let featuredUrl:string = $(this).attr("data-featured-image-url");
                let featuredImg = $(this).parents(".year-box").find(".featured-image")
                let base64 = siblingArray(imgArr, "url", featuredUrl)[0].base64;
                featuredImg.css("background", "url(" + base64 + ") no-repeat center center" ).css('opacity', '1');
                
            }, function () {
                let featuredUrl:string = $(this).attr("data-featured-image-url");
                let featuredImg = $(this).parents(".year-box").find(".featured-image");
                featuredImg.css('opacity', '0');
            });
        }
    },
    unmatch: function () {
        $(".pieces").trigger("sticky_kit:detach");
        $(".year-image").trigger("sticky_kit:detach");
        $(".year-image dt").trigger("sticky_kit:detach");
    },
});


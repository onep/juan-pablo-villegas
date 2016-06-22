declare var isMobile: any;
declare var enquire: any;


// interface JQueryStatic {
//     stick_in_parent: any;
// }
// interface JQuery {
//     stick_in_parent: any;
// }

Modernizr.addTest('ismobile', function() {
 return isMobile.any;
});

enquire.register("screen and (max-width: 768px)", {
    match: function () {
        console.log('matched mobile');
        $(".year-image").stick_in_parent({offset_top: 36});
    },
    unmatch: function () {
        console.log('unmatched mobile');
        $(".year-image").trigger("sticky_kit:detach");
    },
});

enquire.register("screen and (min-width: 769px)", {
    match: function () {
        console.log('matched desktop');
        $(".pieces").stick_in_parent({offset_top: 36});
        $(".year-image").stick_in_parent({bottoming: true, offset_top: 72});
        $(".year-image dt").stick_in_parent({bottoming: false, offset_top: 0});
    },
    unmatch: function () {
        console.log('unmatched desktop');
        $(".pieces").trigger("sticky_kit:detach");
        $(".year-image").trigger("sticky_kit:detach");
        $(".year-image dt").trigger("sticky_kit:detach");
    },
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
$("dd a").each(function(){
    let imageUrl = $(this).attr("data-featured-image-url");
    toDataUrl(imageUrl, function(base64Img){
        imgArr.push({"url": imageUrl, "base64": base64Img});
    });
});

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
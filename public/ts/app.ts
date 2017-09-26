declare var isMobile: any;
declare var enquire: any;

interface JQueryStickyKitSettings {
    sticky_class?: string;
    inner_scrolling?: boolean;
    recalc_every?: number;
    parent?: string;
    offset_top?: number;
    spacer?: string|boolean;
    bottoming?: boolean
}

interface JQueryStickyKit extends JQuery {
    stick_in_parent(settings: JQueryStickyKitSettings):JQueryStickyKit;
}

class JpvdApp {
    imgArr:Array<any> = [];
    siblingArray(arr:Array<any>, key:string, match:string) {
        let matches;
        matches = arr.filter(function(val, index, array:Array<any>) {
        return val[key] === match;
        });
        return matches;
    }
    toDataUrl(url:string, callback:Function) {
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
    init = () => {
        Modernizr.addTest('ismobile', function() {
            return isMobile.any;
        });

        enquire.register("screen and (max-width: 768px)", {
            match: function () {
                (<JQueryStickyKit>$(".year-image")).stick_in_parent({offset_top: 36});
            },
            unmatch: function () {
                $(".year-image").trigger("sticky_kit:detach");
            },
        });

        enquire.register("screen and (min-width: 769px)", {
            deferSetup: true,
            setup: () => {
                if(!isMobile.any) {
                    $("dd a").each((index, el) => {
                        let imageUrl = $(el).attr("data-featured-image-url");
                        this.toDataUrl(imageUrl, (base64Img) => {
                            this.imgArr.push({"url": imageUrl, "base64": base64Img});
                        });
                    });
                }
            },
            match: () => {
                (<JQueryStickyKit>$(".pieces")).stick_in_parent({offset_top: 36});
                (<JQueryStickyKit>$(".year-image")).stick_in_parent({bottoming: true, offset_top: 72});
                (<JQueryStickyKit>$(".year-image dt")).stick_in_parent({bottoming: false, offset_top: 0});
                if(!isMobile.any) {
                    $("dd a").hover((ev) => {
                        let featuredUrl:string = $(ev.target).attr("data-featured-image-url");
                        let featuredImg = $(ev.target).parents(".year-box").find(".featured-image")
                        let base64 = this.siblingArray(this.imgArr, "url", featuredUrl)[0].base64;
                        featuredImg.css("background", "url(" + base64 + ") no-repeat center center" ).css('opacity', '1');
                        
                    }, function (ev) {
                        let featuredUrl:string = $(ev.target).attr("data-featured-image-url");
                        let featuredImg = $(ev.target).parents(".year-box").find(".featured-image");
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
    }
}

let jpvdApp:JpvdApp = new JpvdApp;
jpvdApp.init();


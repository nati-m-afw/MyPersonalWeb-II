// Lightbox for Bootstrap 
// Author - Natnael Mekonnen




$(document).ready(function(){
    $("#0").click(function(){
        $("ol.carousel-indicators > li.active").attr("class", "")
        $("div.carousel-inner > div.active").attr("class", "carousel-item");
        $("[data-slide-to='" + $(this).attr("id") + "']").attr("class", "active");
        $("div.carousel-item:has(img[alt='" + $(this).attr("alt") + "'])").attr("class", "carousel-item active");
    });
    $("#1").click(function(){
        $("ol.carousel-indicators > li.active").attr("class", "")
        $("div.carousel-inner > div.active").attr("class", "carousel-item");
        $("[data-slide-to='" + $(this).attr("id") + "']").attr("class", "active");
        $("div.carousel-item:has(img[alt='" + $(this).attr("alt") + "'])").attr("class", "carousel-item active");
    });
    $("#2").click(function(){
        $("ol.carousel-indicators > li.active").attr("class", "")
        $("div.carousel-inner > div.active").attr("class", "carousel-item");
        $("[data-slide-to='" + $(this).attr("id") + "']").attr("class", "active");
        $("div.carousel-item:has(img[alt='" + $(this).attr("alt") + "'])").attr("class", "carousel-item active");
    });
    $("#3").click(function(){
        $("ol.carousel-indicators > li.active").attr("class", "")
        $("div.carousel-inner > div.active").attr("class", "carousel-item");
        $("[data-slide-to='" + $(this).attr("id") + "']").attr("class", "active");
        $("div.carousel-item:has(img[alt='" + $(this).attr("alt") + "'])").attr("class", "carousel-item active");
    });
    $("#4").click(function(){
        $("ol.carousel-indicators > li.active").attr("class", "")
        $("div.carousel-inner > div.active").attr("class", "carousel-item");
        $("[data-slide-to='" + $(this).attr("id") + "']").attr("class", "active");
        $("div.carousel-item:has(img[alt='" + $(this).attr("alt") + "'])").attr("class", "carousel-item active");
    });
    $("#5").click(function(){
        $("ol.carousel-indicators > li.active").attr("class", "")
        $("div.carousel-inner > div.active").attr("class", "carousel-item");
        $("[data-slide-to='" + $(this).attr("id") + "']").attr("class", "active");
        $("div.carousel-item:has(img[alt='" + $(this).attr("alt") + "'])").attr("class", "carousel-item active");
    });
    $("#6").click(function(){
        $("ol.carousel-indicators > li.active").attr("class", "")
        $("div.carousel-inner > div.active").attr("class", "carousel-item");
        $("[data-slide-to='" + $(this).attr("id") + "']").attr("class", "active");
        $("div.carousel-item:has(img[alt='" + $(this).attr("alt") + "'])").attr("class", "carousel-item active");
    });
    $("#7").click(function(){
        $("ol.carousel-indicators > li.active").attr("class", "")
        $("div.carousel-inner > div.active").attr("class", "carousel-item");
        $("[data-slide-to='" + $(this).attr("id") + "']").attr("class", "active");
        $("div.carousel-item:has(img[alt='" + $(this).attr("alt") + "'])").attr("class", "carousel-item active");
    });
});


// CHANGE "data-slide-to" value to single quotes
// CHANGE carousel item img "alt" value to single quotes 
"use strict";
$(document).ready(() => {
    
    //preload the images
    $("#image_list a").each((index, link) => {
        const image = new Image();
        image.src = link.href;
    });

    //setup evt handlers for links (which are images in this case)
    $("#image_list a").click(evt => {
        //get the clicked <a> tag (image)
        const link = evt.currentTarget;

        //swap the image
        $("#main_image").attr("src", link.href);

        //swap caption
        $("#caption").text(link.title);

        //cancel the default action
        evt.preventDefault();
    });

    //move focus to first thumbnail
    $("li:first-child a").focus();

});
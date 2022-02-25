"use strict";
$(document).ready(() => {

    //process each img tag
    $("#image_rollovers img").each((index, img) => {
        const oldURL = img.src; //gets the source attr
        const newURL = img.id;  //gets the id attr (which is the filepath to the other image)

        //preload rollover image
        const rolloverImage = new Image();
        rolloverImage.src = newURL;

        //set up the evt handler for hovering over the image
        $(img).hover(
            () => img.src = newURL, //hover over, set the src to the other image
            () => img.src = oldURL //hover out, set the src back to the original image
        );
    })
})

"use strict";

//create the selector query shortcut
const $ = selector => document.querySelector(selector);

//set the things to happen when the page loads its content
document.addEventListener("DOMContentLoaded", () => {

    //get the h2 caption and main image from the index page so we can change it later to whatever thumbnail is clicked on
    const caption = $("#caption");
    const mainImage = $("#main_image");

    //select of the the images in the ul by their <a> tag to loop through them and add event listeners to them
    const imageLinks = $("#image_list").querySelectorAll("a");

    //loop through all the images, add click events which will adjust the image/title/alt text depending on which has been clicked
    for (let link of imageLinks) {

        //create a new Image object
        const image = new Image();

        //point the src of the image to the href of the the linked image
        image.src = link.href;

        //add the event listener to the images so we can update on the fly
        link.addEventListener("mouseover", evt => {

            //change the main images src/alt and the content of the caption to match that of the clicked thumbnail (linked image)
            mainImage.src = link.href;
            mainImage.alt = link.title;
            caption.textContent = link.title;            

        });

        //prevent the user from affecting the page if they click on an image in the list
        link.addEventListener("click", evt => {
            //don't let the page reload when clicked
            evt.preventDefault();
        })
    }


});
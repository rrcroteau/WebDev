"use strict";

//create the selector query shortcut
const $ = selector => document.querySelector(selector);

//set the things to happen when the page loads its content
document.addEventListener("DOMContentLoaded", () => {

    //get the h2 caption and main image from the index page so we can change it later to whatever thumbnail is clicked on
    const caption = $("#caption");
    const mainImage = $("#main_image");

    //select of the the images in the ul by their <a> tag to loop through them and add event listeners to them
    const links = $("#image_list").querySelectorAll("a");

    //create an empty array to store the images we will scroll through
    const imageCache = [];
    //create a null image variable that we will use in the coming functions
    let image = null;

    //loop through all the images in the ul to set their attributes and then add them to the list
    for (let link of links) {

        //create a new Image object and assign it to our image var
        image = new Image();
        //point the src/alt of the image to the href/title image
        image.src = link.href;
        image.alt = link.title;
        imageCache[imageCache.length] = image; //adds the image into the array at the next available index
    }

    //create a counting variable that will be used to cycle through the pictures based on an interval
    let imageCounter = 0;

    //create an interval which passes a function by definition into the first argument, instead of defining it and then passing it
    setInterval(() => {
        imageCounter = (imageCounter + 1) % imageCache.length; //this ensures the interval never takes the images out of index of the array, by setting counter back to zero once you reach the length of the array
        image = imageCache[imageCounter]; //set the image to whatever index we are at in the array at the time
        mainImage.src = image.src;
        mainImage.alt = image.alt;
        caption.textContent = image.alt;
    }, 2000); //set the interval to occur every 2000 ms, so it calls the function every 2 seconds and swaps out the image and its attributes

});

      

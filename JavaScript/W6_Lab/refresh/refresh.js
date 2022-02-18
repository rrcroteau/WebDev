"use strict";

//create the selector query shortcut
const $ = selector => document.querySelector(selector);

//initialize a timer variable and a countdown starting number (counter)
let timer = null;
let counter = 10;

//create a function that takes you to the terms of service page after a counter/countdown reaches 0
const reloadPage = () => {
    counter--; //decrements the counter by one each time it is called
    if (counter == 0) {
        location.reload(true);
    } else {
        $("#seconds").textContent = counter; //this will update the counter on the index page from 10 down to 1 each time it is called (at 0 the, the if takes over)
    }
};


document.addEventListener("DOMContentLoaded", () => {

    timer = setInterval(reloadPage, 1000); //when the page loads, start the timer which calls reloadPage until the counter reaches 0, then the page reloads and starts again

});
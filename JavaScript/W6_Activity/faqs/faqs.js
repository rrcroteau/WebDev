"use strict";

//create the selector query shortcut
const $ = selector => document.querySelector(selector);

//initialize a timer variable and a countdown starting number (counter)
let timer = null;
let counter = 5;

//create a function that takes you to the terms of service page after a counter/countdown reaches 0
const goToTerms = () => {
    counter--; //decrements the counter by one each time it is called
    if (counter == 0) {
        window.location.href = "terms.html";
    } else {
        $("#seconds").textContent = counter; //this will update the counter on the index page from 5 down to 1 each time it is called (at 0 the, the if takes over)
    }
};

//create a function that disables the timer and hides the terms fieldset if the user has accepted them
const acceptTerms = () => {
    clearInterval(timer); //clears out the interval timer
    $("#terms").setAttribute("class", "hidden"); //gives the terms fieldset the hidden class attribute (set in CSS)
}

//create an event handler to toggle each of the h2 elements when the user clicks on them
const toggle = evt => {
    const h2Element = evt.currentTarget; //this is the h2 the user just clicked (it is 'clickable' because it was set to contain an <a> tag in the html)
    const divElement = h2Element.nextElementSibling; //the div is the next sibling to the h2 in the html structure of the index page

    h2Element.classList.toggle("minus"); //this is toggling the h2.minus class in the css file, changing it from the + to the -
    divElement.classList.toggle("open"); //this is toggling the div.open class in the css file, changing the display from none to block

    evt.preventDefault(); //cancel the default action of the h2 <a> tag
};

document.addEventListener("DOMContentLoaded", () => {

    const i = window.location.href.indexOf("accepted"); //checks to see if "accepted" is in the URL (i.e. they hit the accept button on the terms page)
    if (i == -1) { //if accepted is NOT found in the URL
        //timer = setTimeout(goToTerms, 5000); this is another way for a timer, but in our case, interval is much better
        timer = setInterval(goToTerms, 1000); //calls goToTerms every 1000ms
        $("#accept").addEventListener("click", acceptTerms); //make it so the accept buttons works
    } else {
        $("#terms").setAttribute("class", "hidden"); //gives the terms fieldset the hidden class attribute (set in CSS) since it has been accepted already
    }

    //get all the h2 elements so we can loop through them
    const h2Elements = faqs.querySelectorAll("#faqs h2");

    //create the event handler for each h2 element to call toggle
    for (let h2Element of h2Elements) {
        h2Element.addEventListener("click", toggle)
    }

    //set focus to first h2's <a> tag
    h2elements[0].firstChild.focus();

});
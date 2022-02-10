"use strict";

//create an event handler to toggle each of the h2 elements when the user clicks on them
const toggle = evt => {
    const h2Element = evt.currentTarget; //this is the h2 the user just clicked (it is 'clickable' because it was set to contain an <a> tag in the html)
    const divElement = h2Element.nextElementSibling; //the div is the next sibling to the h2 in the html structure of the index page

    h2Element.classList.toggle("minus"); //this is toggling the h2.minus class in the css file, changing it from the + to the -
    divElement.classList.toggle("open"); //this is toggling the div.open class in the css file, changing the display from none to block

    evt.preventDefault(); //cancel the default action of the h2 <a> tag
};

document.addEventListener("DOMContentLoaded", () => {

    //get all the h2 elements so we can loop through them
    const h2Elements = faqs.querySelectorAll("#faqs h2");

    //create the event handler for each h2 element to call toggle
    for (let h2Element of h2Elements) {
        h2Element.addEventListener("click", toggle)
    }

    //set focus to first h2's <a> tag
    h2elements[0].firstChild.focus();

});
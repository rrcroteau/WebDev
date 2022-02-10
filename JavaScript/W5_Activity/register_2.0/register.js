"use strict"

//add the query selector shortcut
const $ = selector => document.querySelector(selector);

//create shorthand names for the elements to be used throughout
const email = $("#email_address");
const phone = $("#phone");
const country = $("#country");
const terms = $("#terms");

//create a function do display error messages by looping through an array to get all of the errors and displaying them in an unordered list
const displayErrorMsgs = msgs => {  //msgs will be an array that we create later, based on validation
    //create a new ul element
    const ul = document.createElement("ul");
    //add a messages class to the ul
    ul.classList.add("messages");

    //create a li element for each error contained in the msgs array, add it to the ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        //put the error message of msg into the text variable, to later be added to the li element
        const text = document.createTextNode(msg);
        //append the to text to the li and li to the ul
        li.appendChild(text);
        ul.appendChild(li);
    }

    //if the ul node isn't already in the document, add it... else we will replace the current one (they made some corrections, but not all)
    const node = $("ul");

    if (node == null) {
        //get the form element
        const form = $("form");

        //add the ul to parent of the form, so it show above the form
        form.parentNode.insertBefore(ul, form);

    } else {
        node.parentNode.replaceChild(ul, node); //use the node, to get its parent, to then replace the node, as it is the child of its parent... of course
    }

};

//create the function to run when you press the register button (it is not set as a submit button in the html)
const processEntries = () => {

    //create an array to hold the error messages
    const msgs = [];

    //validate form entries for errors, if found, append to the msgs list (this list is what gets passed to the displayErrorMsgs function)
    if (email.value == "") {
        msgs[msgs.length] = "Please enter an email address.";
    }

    if (phone.value == "") {
        msgs[msgs.length] = "Please enter a mobile phone number.";
    }

    if (country.value == "") {
        msgs[msgs.length] = "Please select a country from the list.";
    }

    if (terms.checked == false) {
        msgs[msgs.length] = "You must agree to the terms of service.";
    }

    //if there are no errors (msgs.length == 0), submit the form.... else, display the errors
    if (msgs.length == 0) {
        $("form").submit();
    } else {
        displayErrorMsgs(msgs);
    }
};

//create the function to reset the form (including removing the ul we created, should it be in the document now)
const resetForm = () => {
    $("form").reset();

    $("ul").remove();

    //set focus back on first field
    email.focus();
};

//add the DOM event listener to activate the buttons and set the focus
document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);
    email.focus();
});
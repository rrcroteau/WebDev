    "use strict"

//add the query selector shortcut
const $ = selector => document.querySelector(selector);

//create shorthand names for the elements to be used throughout
const email = $("#email_address");
const phone = $("#phone");
const country = $("#country");
const terms = $("#terms");


//create the function to run when you press the register button (it is not set as a submit button in the html)
const processEntries = () => {

    
    //validate the user input (in this case, only that they entered something)
    let isValid = true;

    //the nextElementSibling is the span tag in each of these instances

    if (email.value == "") {
        email.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    }

    else {
        email.nextElementSibling.textContent = ""; //these else statements get rid of the * in the span, as the user has entered something in the req'd field
    }

    if (phone.value == "") {
        phone.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    }

    else {
        phone.nextElementSibling.textContent = ""; //these else statements get rid of the * in the span, as the user has entered something in the req'd field
    }

    if (country.value == "") {
        country.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    }

    else {
        country.nextElementSibling.textContent = ""; //these else statements get rid of the * in the span, as the user has entered something in the req'd field
    }

    if (terms.checked == false) {
        terms.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    }

    else {
        terms.nextElementSibling.textContent = ""; //these else statements get rid of the * in the span, as the user has entered something in the req'd field
    }

    //if else the validations pass, submit the form
    if (isValid == true) {
        $("form").submit();
    }

};

//create the event to occur when you press the reset button
const resetForm = () => {
    $("form").reset(); //this will reset all the form inputs

    //now we need to put the * back in the spans to indicate req'd fields and put the focus back on the email input
    email.nextElementSibling.textContent = "*";
    phone.nextElementSibling.textContent = "*";
    country.nextElementSibling.textContent = "*";
    terms.nextElementSibling.textContent = "*";
    email.focus();

}

//create the event listeners for the buttons when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);
    email.focus();
});
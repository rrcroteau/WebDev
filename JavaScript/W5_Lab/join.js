"use strict"

const $ = selector => document.querySelector(selector);

//create shorthand variables to use throughout the various functions
//get user entries from the text boxes and set to temp variables
const firstName = $("#first_name");
const middleName = $("#middle_name");
const lastName = $("#last_name");
const street1 = $("#street_1");
const street2 = $("#street_2");
const city = $("#city");
const state = $("#state");
const zip = $("#zip");
const homePhone = $("#home_phone");
const workPhone = $("#work_phone");
const cellPhone = $("#cell_phone");
const email = $("#email");
const dob = $("#dob");
const credit = $("#credit");
const household = $("#household");
const notes = $("#notes");
const form = $("form")

//create a function do display error messages by looping through an array to get all of the errors and displaying them in an unordered list
const displayErrorMsgs = msgs => {  //msgs will be an array that we create later, based on validation
    //create a new ul element -- or 2 to be super obnoxious with it
    const ul = document.createElement("ul");
    const ul2 = document.createElement("ul");
    //add a messages class to the ul
    ul.classList.add("messages");
    ul2.classList.add("messages");

    //create a li element for each error contained in the msgs array, add it to the ul --one for each ul in this case
    for (let msg of msgs) {
        const li = document.createElement("li");
        const li2 = document.createElement("li");
        //put the error message of msg into the text variable, to later be added to the li element  --again, one for each ul
        const text = document.createTextNode(msg);
        const text2 = document.createTextNode(msg);
        //append the to text to the li and li to the uls
        li.appendChild(text);
        li2.appendChild(text2);
        ul.appendChild(li);
        ul2.appendChild(li2);
    }

    //if the ul nodes aren't already in the document, add them... else we will replace the current ones (they made some corrections, but not all)
    const node = $("ul");

    if (node == null) {

        //add the ul to parent of the form, so it show above the form
        form.parentNode.insertBefore(ul, form);
        form.appendChild(ul2);

    } else {
        node.parentNode.replaceChild(ul, node); //use the node, to get its parent, to then replace the node, as it is the child of its parent... of course
        form.lastElementChild.replaceWith(ul2); //get the last element child of the form (the ul, once it gets created) and replace with ul2
    }

};

//create the function to run when you press the register button (it is not set as a submit button in the html)
const joinList = evt => {
    
    //create an array to hold the error messages
    const msgs = [];
    //validate all entries prior to allowing the user to join

    //check if empty or contains 'bad words'
    if (firstName.value.length == 0 || GotBadWords(firstName.value) == true) {
        firstName.nextElementSibling.textContent = "This field cannot contain bad words or be empty";
        msgs[msgs.length] = "Please enter a first name (no bad words allowed).";
    } else {
        firstName.nextElementSibling.textContent = "";
    }

    //check if contains 'bad words'
    if (GotBadWords(middleName.value) == true) {
        middleName.nextElementSibling.textContent = "This field cannot contain bad words";
        msgs[msgs.length] = "Please enter a middle name with no bad words.";
    } else {
        middleName.nextElementSibling.textContent = "";
    }

    //check if empty or contains 'bad words'
    if (lastName.value.length == 0 || GotBadWords(lastName.value) == true) {
        lastName.nextElementSibling.textContent = "This field cannot contain bad words or be empty";
        msgs[msgs.length] = "Please enter a last name (no bad words allowed).";
    } else {
        lastName.nextElementSibling.textContent = "";
    }

    //check if empty or contains 'bad words'
    if (street1.value.length == 0 || GotBadWords(street1.value) == true) {
        street1.nextElementSibling.textContent = "This field cannot contain bad words or be empty";
        msgs[msgs.length] = "Please enter a street address in the Street 1 field (no bad words allowed).";
    } else {
        street1.nextElementSibling.textContent = "";
    }

    //check if contains 'bad words'
    if (GotBadWords(street2.value) == true) {
        street2.nextElementSibling.textContent = "This field cannot contain bad words";
        msgs[msgs.length] = "Please enter a Street2 with no bad words.";
    } else {
        street2.nextElementSibling.textContent = "";
    }

    //check if empty or contains 'bad words'
    if (city.value.length == 0 || GotBadWords(city.value) == true) {
        city.nextElementSibling.textContent = "This field cannot contain bad words or be empty";
        msgs[msgs.length] = "Please enter a city (no bad words allowed).";
    } else {
        city.nextElementSibling.textContent = "";
    }

    //state 2 letters or empty
    if (state.value.length == 0 || !IsValidStateAbbr(state.value)) {
        state.nextElementSibling.textContent = "This field must contain a valid 2-letter abbreviation for a US State (including DC)";
        msgs[msgs.length] = "The state must contain a valid 2-letter abbreviation for a US State (including DC).";
    } else {
        state.nextElementSibling.textContent = "";
    }

    //zip must be 5 digit string --if empty it will return false, so it is a mandatory field
    if (!Is5Digits(zip.value)) {
        zip.nextElementSibling.textContent = "This field must contain a 5 digit zip code";
        msgs[msgs.length] = "Please enter valid 5 digit zip code.";
    } else {
        zip.nextElementSibling.textContent = "";
    }

    //home phone, if entered, must be 10-digits and could also include () - or a space between number sets
    if (homePhone.value.length != 0 && !IsValidUSPhone(homePhone.value)) {
        homePhone.nextElementSibling.textContent = "This must be a 10-digit number ( e.g. (401) 777-7777 )";
        msgs[msgs.length] = "The home phone is not a valid format, please see message near the field";
    } else {
        homePhone.nextElementSibling.textContent = "";
    }

    //work phone, if entered, must be 10-digits and could also include () - or a space between number sets
    if (workPhone.value.length != 0 && !IsValidUSPhone(workPhone.value)) {
        workPhone.nextElementSibling.textContent = "This must be a 10-digit number ( e.g. (401) 777-7777 )";
        msgs[msgs.length] = "The work phone is not a valid format, please see message near the field";
    } else {
        workPhone.nextElementSibling.textContent = "";
    }

    //cell phone must be entered, so we can validate it right away, as no entry will validate to false anyway
    if (!IsValidUSPhone(cellPhone.value)) {
        cellPhone.nextElementSibling.textContent = "You must enter a 10-digit number ( e.g. (401) 777-7777 )";
        msgs[msgs.length] = "The cell phone is either empty or not a valid format, please see message near the field";
    } else {
        cellPhone.nextElementSibling.textContent = "";
    }

    //check for a valid email address
    if (IsValidEmail(email.value) == false) {
        email.nextElementSibling.textContent = "Invalid Email Address";
        msgs[msgs.length] = "Please enter a valid email address";
    } else {
        email.nextElementSibling.textContent = "";
    }

    //dob cannot be future date or empty
    if (dob.value.length == 0 || IsFutureDate(dob.value)) {
        dob.nextElementSibling.textContent = "DOB cannot be a future date or left blank";
        msgs[msgs.length] = "Please enter a DOB that is not a future date";
    } else {
        dob.nextElementSibling.textContent = "";
    }

    //check if the input can be parsed to a float and is not less than 0 --also cannot be empty
    if (credit.length == 0 || !FloatMinValue(credit.value, 0)) {
        credit.nextElementSibling.textContent = "Credit cannot be negative";
        msgs[msgs.length] = "Please enter a valid credit amount (must at least be 0)";
    } else {
        credit.nextElementSibling.textContent = "";
    }

    //check if the input can be parsed to an int and is at not less than 1 --also cannot be empty
    if (household.value.length == 0 || !IntMinValue(household.value, 1)) {
        household.nextElementSibling.textContent = "Household must have at least 1 inhabitant";
        msgs[msgs.length] = "Your household must have at least one inhabitant (you)";
    } else {
        household.nextElementSibling.textContent = "";
    }

    //check the notes textarea for bad words
    if (GotBadWords(notes.value) == true) {
        notes.nextElementSibling.textContent = "This field cannot contain bad words";
        msgs[msgs.length] = "The notes area cannot have bad words in it";
    } else {
        notes.nextElementSibling.textContent = "";
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
    
    $("form").reset(); //clears the entire form

    $("ul").remove(); //removes the ul from the document
    $("ul").remove(); //removes the second ul from the document

    //reset span element default text content
    firstName.nextElementSibling.textContent = "*";
    middleName.nextElementSibling.textContent = "";
    lastName.nextElementSibling.textContent = "*";
    street1.nextElementSibling.textContent = "*";
    street2.nextElementSibling.textContent = "";
    city.nextElementSibling.textContent = "*";
    state.nextElementSibling.textContent = "*";
    zip.nextElementSibling.textContent = "*";
    homePhone.nextElementSibling.textContent = "";
    workPhone.nextElementSibling.textContent = "";
    cellPhone.nextElementSibling.textContent = "*";
    email.nextElementSibling.textContent = "*";
    dob.nextElementSibling.textContent = "*";
    credit.nextElementSibling.textContent = "*";
    household.nextElementSibling.textContent = "*";
    notes.nextElementSibling.textContent = "";


    //set focus on the first text box after resetting the form
    firstName.focus();
    
};


document.addEventListener("DOMContentLoaded", () => {
    //add the click events for both buttons
    $("#join_list").addEventListener("click", joinList);
    $("#reset_form").addEventListener("click", resetForm);

    //set focus on first text box after the form loads
    firstName.focus();
});
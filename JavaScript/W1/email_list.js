const $ = selector => document.querySelector(selector);

const joinList = evt => {
    //get the data from the input text fields
    const email1 = $("#email_1").value;
    const email2 = $("#email_2").value;
    const firstName = $("#first_name").value;

    //check the user inputs to ensure there is input
    let isValid = true;

    if (email1 == "") {
        $("#email_1_error").textContent = "Email is required.";
        isValid = false;
    }

    else {
        $("#email_1_error").textContent = "";
    }

    if (email1 != email2) {
        $("#email_2_error").textContent = "Emails must match.";
        isValid = false;
    }

    else {
        $("#email_2_error").textContent = "";
    }

    if (firstName == "") {
        $("#first_name_error").textContent = "First name is required.";
        isValid = false;
    }

    else {
        $("#first_name_error").textContent = "";
    }

    //if there are invalid inputs, do not allow it to submit

    if (isValid === false) {
        evt.preventDefault();
    }

};

//create a function to clear the form
const clearForm = () => {

    //clear the text boxes
    $("#email_1").value = "";
    $("#email_2").value = "";
    $("#first_name").value = "";

    //clear the span elements and reset to the *
    $("#email_1_error").textContent = "*";
    $("#email_2_error").textContent = "*";
    $("#first_name_error").textContent = "*";

    //after you reset the form, set the focus to the first email input
    $("#email_1").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    //create the click events for both buttons
    $("#join_list").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);

    //after the form loads, set the focus to the first email input
    $("#email_1").focus();
});

    
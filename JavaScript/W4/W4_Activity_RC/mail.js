const $ = selector => document.querySelector(selector);

const joinList = evt => {
    //get user entries from the text boxes and set to temp variables
    let tEmail = $("#email_1").value;
    let tFirstName = $("#first_name").value;

    if (IsValidEmail(tEmail) == false) {
        $("#email_1_error").textContent = "Invalid Email Address";
        evt.preventDefault();
    }

    if (GotBadWords(tFirstName) == true) {
        $("#first_name_error").textContent = "This field cannot contain bad words";
        evt.preventDefault();
    }

};


const clearForm = () => {
    
    //clear text boxes
    $("#email_1").value = "";
    $("#first_name").value = "";


    //reset span element default text content
    $("#email_1_error").textContent = "*";
    $("#first_name_error").textContent = "*";


    //set focus on the first text box after resetting the form
    $("#email_1").focus();
    
};


document.addEventListener("DOMContentLoaded", () => {
    //add the click events for both buttons
    $("#join_list").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);

    //set focus on first text box after the form loads
    $("#email_1").focus();
});
const $ = selector => document.querySelector(selector);

const joinList = evt => {
    //get user entries from the text boxes and set to temp variables
    let tFirstName = $("#first_name").value;
    let tMiddleName = $("#middle_name").value;
    let tLastName = $("#last_name").value;
    let tStreet1 = $("#street_1").value;
    let tStreet2 = $("#street_2").value;
    let tCity = $("#city").value;
    let tState = $("#state").value;
    let tZip = $("#zip").value;
    let tHomePhone = $("#home_phone").value;
    let tWorkPhone = $("#work_phone").value;
    let tCellPhone = $("#cell_phone").value;
    let tEmail = $("#email").value;
    let tDob$ = ("#dob").value;
    let tCredit = $("#credit").value;
    let tHousehold = $("#household").value;
    let tNotes = $("#notes").value;


    //validate all entries prior to allowing the user to join
    if (tFirstName.length == 0 || GotBadWords(tFirstName) == true) {
        $("#first_name_error").textContent = "This field cannot contain bad words or be empty";
        evt.preventDefault();
    }

    if (GotBadWords(tMiddleName) == true) {
        $("#middle_name_error").textContent = "This field cannot contain bad words";
        evt.preventDefault();
    }

    if (tLastName.length == 0 || GotBadWords(tLastName) == true) {
        $("#last_name_error").textContent = "This field cannot contain bad words or be empty";
        evt.preventDefault();
    }

    if (tStreet1.length == 0 || GotBadWords(tStreet1) == true) {
        $("#street_1_error").textContent = "This field cannot contain bad words or be empty";
        evt.preventDefault();
    }

    if (GotBadWords(tStreet2) == true) {
        $("#street_2_error").textContent = "This field cannot contain bad words";
        evt.preventDefault();
    }

    if (IsValidEmail(tEmail) == false) {
        $("#email_error").textContent = "Invalid Email Address";
        evt.preventDefault();
    }

    if (GotBadWords(tNotes) == true) {
        $("#notes_error").textContent = "This field cannot contain bad words";
        evt.preventDefault();
    }

};


const clearForm = () => {
    
    //clear text boxes
    $("#first_name").value = "";
    $("#middle_name").value = "";
    $("#last_name").value = "";
    $("#street_1").value = "";
    $("#street_2").value = "";
    $("#city").value = "";
    $("#state").value = "";
    $("#zip").value = "";
    $("#home_phone").value = "";
    $("#work_phone").value = "";
    $("#cell_phone").value = "";
    $("#email").value = "";
    $("#dob").value = "";
    $("#credit").value = "";
    $("#household").value = "";
    $("#notes").value = "";



    //reset span element default text content
    $("#first_name_error").textContent = "*";
    $("#middle_name_error").textContent = "";
    $("#last_name_error").textContent = "*";
    $("#street_1_error").textContent = "*";
    $("#street_2_error").textContent = "";
    $("#city_error").textContent = "*";
    $("#state_error").textContent = "*";
    $("#zip_error").textContent = "*";
    $("#home_phone_error").textContent = "";
    $("#work_phone_error").textContent = "";
    $("#cell_phone_error").textContent = "*";
    $("#email_error").textContent = "*";
    $("#dob_error").textContent = "*";
    $("#credit_error").textContent = "*";
    $("#household_error").textContent = "*";
    $("#notes_error").textContent = "";


    //set focus on the first text box after resetting the form
    $("#first_name").focus();
    
};


document.addEventListener("DOMContentLoaded", () => {
    //add the click events for both buttons
    $("#join_list").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);

    //set focus on first text box after the form loads
    $("#first_name").focus();
});
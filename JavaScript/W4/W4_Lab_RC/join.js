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
    let tDob = $("#dob").value;
    let tCredit = $("#credit").value;
    let tHousehold = $("#household").value;
    let tNotes = $("#notes").value;

    console.log(typeof tHousehold)
    console.log(typeof tDob)
    console.log(tDob)


    //validate all entries prior to allowing the user to join

    //check if empty or contains 'bad words'
    if (tFirstName.length == 0 || GotBadWords(tFirstName) == true) {
        $("#first_name_error").textContent = "This field cannot contain bad words or be empty";
        evt.preventDefault();
    }
    //check if contains 'bad words'
    if (GotBadWords(tMiddleName) == true) {
        $("#middle_name_error").textContent = "This field cannot contain bad words";
        evt.preventDefault();
    }
    //check if empty or contains 'bad words'
    if (tLastName.length == 0 || GotBadWords(tLastName) == true) {
        $("#last_name_error").textContent = "This field cannot contain bad words or be empty";
        evt.preventDefault();
    }
    //check if empty or contains 'bad words'
    if (tStreet1.length == 0 || GotBadWords(tStreet1) == true) {
        $("#street_1_error").textContent = "This field cannot contain bad words or be empty";
        evt.preventDefault();
    }
    //check if contains 'bad words'
    if (GotBadWords(tStreet2) == true) {
        $("#street_2_error").textContent = "This field cannot contain bad words";
        evt.preventDefault();
    }
    //check if empty or contains 'bad words'
    if (tCity.length == 0 || GotBadWords(tCity) == true) {
        $("#city_error").textContent = "This field cannot contain bad words or be empty";
        evt.preventDefault();
    }
    //state 2 letters or empty
    if (tState.length == 0 || !IsValidStateAbbr(tState)) {
        $("#state_error").textContent = "This field must contain a valid 2-letter abbreviation for a US State (including DC)";
        evt.preventDefault();
    }
    //zip must be 5 digit string --if empty it will return false, so it is a mandatory field
    if (!Is5Digits(tZip)) {
        $("#zip_error").textContent = "This field must contain a 5 digit zip code";
        evt.preventDefault();
    }
    //home phone, if entered, must be 10-digits and could also include () - or a space between number sets
    if (tHomePhone.length != 0 && !IsValidUSPhone(tHomePhone)) {
        $("#home_phone_error").textContent = "This must be a 10-digit number (may contain ( ), -, or  spaces between sets of numbers) e.g. 401-777-7777 or (401) 777-7777";
        evt.preventDefault();
    }
    //work phone, if entered, must be 10-digits and could also include () - or a space between number sets
    if (tWorkPhone.length != 0 && !IsValidUSPhone(tWorkPhone)) {
        $("#work_phone_error").textContent = "This must be a 10-digit number (may contain ( ), -, or  spaces between sets of numbers) e.g. 401-777-7777 or (401) 777-7777";
        evt.preventDefault();
    }
    //cell phone must be entered, so we can validate it right away, as no entry will validate to false anyway
    if (!IsValidUSPhone(tCellPhone)) {
        $("#cell_phone_error").textContent = "You must enter a 10-digit number (may contain ( ), -, or  spaces between sets of numbers) e.g. 401-777-7777 or (401) 777-7777";
        evt.preventDefault();
    }

    //check for a valid email address
    if (IsValidEmail(tEmail) == false) {
        $("#email_error").textContent = "Invalid Email Address";
        evt.preventDefault();
    }

    //dob cannot be future date or empty
    if (tDob.length == 0 || IsFutureDate(tDob)) {
        $("#dob_error").textContent = "DOB cannot be a future date or left blank";
        evt.preventDefault();
    }

    //check if the input can be parsed to a float and is not less than 0 --also cannot be empty
    if (tCredit.length == 0 || !FloatMinValue(tCredit, 0)) {
        $("#credit_error").textContent = "Credit cannot be negative";
        evt.preventDefault();
    }

    //check if the input can be parsed to an int and is at not less than 1 --also cannont be empty
    if (tHousehold.length == 0 || !IntMinValue(tHousehold, 1)) {
        $("#household_error").textContent = "Household must have at least 1 inhabitant";
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
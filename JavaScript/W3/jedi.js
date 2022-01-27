const $ = selector => document.querySelector(selector);

const joinList = evt => {
    //get user entries from the text boxes and set to temp variables
    let tEmail = $("#email_1").value;
    let tFirstName = $("#first_name").value;
    let tBirthplace = $("#birthplace").value;
    let tSeason = $("#season").value;
    let tSmurf = $("#smurf").value;


    //email_1 => stuff before @ => Find the @(indexOf), copy from 0 to @ (exclusive)
    let tPos1 = tEmail.indexOf("@", 0);

    tEmail = tEmail.substr(0, tPos1);

    alert("Email Substring: " + tEmail);


    //first_name => last 2 characters of the name => get length -2 -> startingPoint = length -2, Copy (substr) 2 chars
    let lenFirst = tFirstName.length;
    tFirstName = tFirstName.substr(lenFirst - 2, 2);

    alert("First Name Substring: " + tFirstName);

    //smurf / personality trait => copy the first three characters => substr(0, 3)
    tSmurf = tSmurf.substr(0, 3);


    //season => Does it have an A, U, I
    //If it has an A, Store an A
    //Else if has an I, Store an I
    //Else Store a U
     
    if (tSeason.indexOf("a", 0) > -1) { tSeason = "a"; } // > -1 means that it was found in the the string
    else if (tSeason.indexOf("i", 0) > -1) { tSeason = "i"; }
    else { tSeason = "u"; }

    //birthplace => First chars ()=> substr(0, 2)
    tBirthplace = tBirthplace.substr(0, 2);

    //Jedi Name = tEmail + tFirstName + tSmurf + "-" + tBirthplace + tSeason;
    let jediName = tEmail + tFirstName + tSmurf + "-" + tBirthplace + tSeason;

    alert("Your Jedi name henceforth will be: " + jediName);

    // cancel form submit if any user entries are invalid  -- for now this just defaults to true because we are not actually validating input yet
    if (false === false) {
        evt.preventDefault();
    }

};


const clearForm = () => {
    
    //clear text boxes
    $("#email_1").value = "";
    $("#first_name").value = "";
    $("#birthplace").value = "";
    $("#season").value = "";
    $("#smurf").value = "";

    //reset span element default text content
    $("#email_1_error").textContent = "*";
    $("#first_name_error").textContent = "*";
    $("#birthplace_error").textContent = "*";
    $("#season_error").textContent = "*";
    $("#smurf_error").textContent = "*";

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
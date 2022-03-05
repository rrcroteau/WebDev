"use strict";

const displayMembers = () => {

    memberList.sort(); //sort the list before displaying

    let html = ""; //create an empty string to which we will add html strings to later to dynamically create the page

    //loop through the tasklist and append the html code to the html string we just created
    for (const member of memberList) {
        html += "<p><a href='#'>Delete</a>" + member.toString() + "</p>";
    }

    $("#members").html(html); //use JQuery to fill the #tasks Div with the html we created

    //add a click event handler for every <a> element (the "Delete") using JQuery to find every <a> and loop through them
    $("#members").find("a").each((index, a) => {
        $(a).click(evt => {
            memberList.load().delete(index).save(); //method chain loads (including sort), deletes a specific task, then saves the data
            displayMembers(); //re-displays the task with the one delete being removed now after the click
            evt.preventDefault(); //stops from leaving the page
            $("input:first").focus();        //sets the cursor to the first input element
        });
    });

}

$(document).ready(() => {
    //button click event for add task button
    $("#add_member").click(() => {
        const memberObj = { //object literal
            FirstName: $("#first_name").val(), //get the information in the inputs
            MiddleName: $("#middle_name").val(),
            LastName: $("#last_name").val(),
            Street1: $("#street_1").val(),
            Street2: $("#street_2").val(),
            City: $("#city").val(),
            State: $("#state").val(),
            Zip: $("#zip").val(),
            HomePhone: $("#home_phone").val(),
            WorkPhone: $("#work_phone").val(),
            CellPhone: $("#cell_phone").val(),
            Email: $("#email").val(),
            Dob: $("#dob").val(),
            Credit: $("#credit").val(),
            Household: $("#household").val(),
            Notes: $("#notes").val()

        };

        const newMember = new Member(memberObj); //task object

        //if the new task is valid, load sorted list, add new task, save, then display again
        if (newMember.isValid) {
            memberList.load().add(newMember).save();
            displayMembers();
            $("#first_name").val(""); //clear the form fields for the next entry
            $("#middle_name").val("");
            $("#last_name").val("");
            $("#street_1").val("");
            $("#street_2").val("");
            $("#city").val("");
            $("#state").val("");
            $("#zip").val("");
            $("#home_phone").val("");
            $("#work_phone").val("");
            $("#cell_phone").val("");
            $("#email").val("");
            $("#dob").val("");
            $("#credit").val("");
            $("#household").val("");
            $("#notes").val("");
        }

        //else {
        //    //else, display err message
        //    alert("Please fix your inputs.");
        //}

        $("#first_name").select(); //move focus to task and highlights
    });

    //button click event for the clear members button
    $("#clear_members").click(() => {
        memberList.clear();
        $("#members").html("");
        $("#first_name").val("");
        $("#middle_name").val("");
        $("#last_name").val("");
        $("#street_1").val("");
        $("#street_2").val("");
        $("#city").val("");
        $("#state").val("");
        $("#zip").val("");
        $("#home_phone").val("");
        $("#work_phone").val("");
        $("#cell_phone").val("");
        $("#email").val("");
        $("#dob").val("");
        $("#credit").val("");
        $("#household").val("");
        $("#notes").val("");
        $("#first_name_error").text("*");
        $("#middle_name_error").text("");
        $("#last_name_error").text("*");
        $("#street_1_error").text("*");
        $("#street_2_error").text("");
        $("#city_error").text("*");
        $("#state_error").text("*")
        $("#zip_error").text("*");
        $("#home_phone_error").text("");
        $("#work_phone_error").text("");
        $("#cell_phone_error").text("*");
        $("#email_error").text("*");
        $("#dob_error").text("*");
        $("#credit_error").text("*");
        $("#household_error").text("*");
        $("#notes_error").text("");
        $("#first_name").focus();

    });

    //button click event for the clear form button
    $("#clear_form").click(() => {
        $("#first_name").val("");
        $("#middle_name").val("");
        $("#last_name").val("");
        $("#street_1").val("");
        $("#street_2").val("");
        $("#city").val("");
        $("#state").val("");
        $("#zip").val("");
        $("#home_phone").val("");
        $("#work_phone").val("");
        $("#cell_phone").val("");
        $("#email").val("");
        $("#dob").val("");
        $("#credit").val("");
        $("#household").val("");
        $("#notes").val("");
        $("#first_name_error").text("*");
        $("#middle_name_error").text("");
        $("#last_name_error").text("*");
        $("#street_1_error").text("*");
        $("#street_2_error").text("");
        $("#city_error").text("*");
        $("#state_error").text("*")
        $("#zip_error").text("*");
        $("#home_phone_error").text("");
        $("#work_phone_error").text("");
        $("#cell_phone_error").text("*");
        $("#email_error").text("*");
        $("#dob_error").text("*");
        $("#credit_error").text("*");
        $("#household_error").text("*");
        $("#notes_error").text("");
        $("#first_name").focus();

    });

    //by default, when page loads
    memberList.load(); //load the default task list (what is current in localStorage)
    displayMembers(); //display the task on the form
    $("#first_name").focus(); //set focus
});
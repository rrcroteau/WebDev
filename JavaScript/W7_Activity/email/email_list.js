"use strict";
$(document).ready(() => {

    //set up the click event for the Join List button
    $("#join_list").click(() => {
        const email1 = $("#email_1").val();
        const email2 = $("#email_2").val();
        let isValid = true;

        //validate the first email address
        if (email1 === "") {
            $("#email_1").next().text("This field is required.");
            isValid = false;
        } else {
            $("#email_1").next().text("");
        }

        //validate the second email address
        if (email2 === "") {
            $("#email_2").next().text("This field is required.");
            isValid = false;
        } else if (email1 !== email2) {
            $("#email_2").next().text("The email addresses must match.");
            isValid = false;
        } else {
            $("#email_2").next().text("");
        }

        //validate first name entry
        if ($("#first_name").val() === "") {
            $("#first_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }

        //submit the form is all entries are valid
        if (isValid) {
            $("#email_form").submit();
        }
    });

    //set up the click event on the Reset Form button
    $("#clear_form").click(() => {
        //clear the text boxes
        $("#email_1").val("");
        $("#email_2").val("");
        $("#first_name").val("");
        //reset span elements
        $("#email_1").next().text("*");
        $("#email_2").next().text("*");
        $("#first_name").next().text("*");
        //set the focus back on the first input
        $("#email_1").focus();
    });

    $("#email_1").focus();
})
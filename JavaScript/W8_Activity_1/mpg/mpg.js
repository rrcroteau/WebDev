"use strict";

//when page is fully loaded
$(document).ready( () => {

    //setup the calculate button to use the MPG prototype
    $("#calculate").click(() => {
        mpg.miles = parseFloat($("#miles").val()); //set the miles to what is in the miles text input
        mpg.gallons = parseFloat($("#gallons").val()); //set the gallons to what is in the gallons text input

        //if the inputs are valid, perform the calculation and add it to the web form, else give an error/feedback message and put the focus back on the miles input
        if (mpg.isValid) {
            $("#mpg").val(mpg.calculate().toFixed(1));
            $("#miles").select();
        }

        else {
            alert("Both entries must be numeric and greater than zero.");
            $("#miles").focus();
        }

    });

    //create the event to clear the form when the clear button is pressed
    $("#clear").click(() => {
        $("#miles").val("");
        $("#gallons").val("");
        $("#mpg").val("");

        $("#miles").focus();

    });

    //set miles to focus when page is first loaded
    $("#miles").focus();

})
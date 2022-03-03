"use strict";

//when page loads
$(document).ready(() => {

    //create an object Instance of Trips class (class) called "trips" (object)
    const trips = new Trips();

    //event for when Add Trip button is pressed
    $("#add_trip").click(() => {

        //create trip instance passing in information via the constructor
        const trip = new Trip($("#destination").val(), $("#miles").val(), $("#gallons").val());

        //if the trip information is valid...
        if (trip.isValid) {
            trips.push(trip); //push it into the trips array
            $("#trip_list").val(trips.toString()); //add the trip to the textarea as well

            //clear the text inputs for more entries, if needed
            $("#destination").val("");
            $("#miles").val("");
            $("#gallons").val("");

            $("#destination").focus();
        }

        else {
            //there was a error, tell them about it
            alert("Please complete all fields. \nMiles and Gallons must be numeric and greater than zero.")
            $("#destination").select();
        }
    });

    $("#destination").focus(); //focus on destination when page loads initially

});
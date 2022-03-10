"use strict";

//returns date string YYYY-MM-DD format
const getDateString = date => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

//function to generate the html to display the image or video based on the JSON data passed in
const displayPicture = data => {

    let html = "";
    if (data.error) {  //got an error, display it
        html += `<span class="error">${data.error.message}</span>`
    }
    else if (data.code) {  //this means a problem, display it
        html += `<span class="error">${data.msg}</span>`
    }
    else { //success - display the image/video
        html += `<h3>${data.title}</h3>`;
        const width = 700;
        switch (data.media_type) {
            case "image":
                html += `<img src="${data.url}" width="${width}" alt="NASA Photo">`;
                break;
            case "video":
                html += `<iframe src="${data.url}" frameborder="0" allowfullscreen></iframe>`;
                break;
            default:
                html += `<img src="images/notavailable.png" width="${width}" alt="NASA Photo">`;
        }

        //date and copyright
        html += `<div>${data.date}`;
        if (data.copyright) {
            html += `<span class="right">&copy; ${data.copyright}</span>`;
        }
        html += `</div>`

        //explanation
        html += `<p>${data.explanation}</p>`;
    }

    //display the html
    $("#display").html(html)
};

//function to display an error, should we get one
const displayError = error => {
    let html = `<span class="error">${error.message}</span>`;
    $("#display").html(html);
};

//all the actions to take once the page is loaded (ready)
$(document).ready(() => {

    //get todays date and format it to the required date string the NASA site wants
    const today = new Date();
    let dateStr = getDateString(today);

    //set today's date into the text input
    const dateTextbox = $("#date");
    dateTextbox.val(dateStr);
    dateTextbox.focus();

    //set event handler for View button's click event
    $("#view_button").click(() => {

        //get the date that is in the text box currenty
        dateStr = $("#date").val();
        const dateObj = new Date(dateStr);

        //if it is an invalid date, give the user an error
        if (dateObj == "Invalid Date") {
            const msg = "Please enter a valid date in YYYY-MM-DD format.";
            $("#display").html(`<span class="error">${msg}</span>`);
        }

        else {
            //put the string into the proper format
            dateStr = getDateString(dateObj);

            //build a URL for API request
            const domain = `https://api.nasa.gov/planetary/apod`;  //domain portion of URL
            const request = `?api_key=DEMO_KEY&date=${dateStr}`; //request portion of URL   
            const url = domain + request //merge both for the full URL

            //fetch the data we need to display the image/video or the error
            fetch(url)
                .then(response => response.json())
                .then(json => displayPicture(json))
                .catch(e => displayError(e));

        }
        $("#date").focus(); //set the cursor in the data field to begin with

    });
});
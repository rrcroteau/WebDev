"use strict";

//'async' makes the function asynchronous and 'await' tells JS to wait until the Promise is settled...then return the result
const domain = "https://jsonplaceholder.typicode.com";

//asynchronous function to retrieve a photo and related date from various sources
const getPhoto = async id => {

    //the photos only go from 1-5000, if the input is outside this give the user an error
    if (id < 1 || id > 5000) {

        return Promise.reject(
            new Error("Photo ID must be between 1 and 5000"));
    }

    //ELSE (it is a number 1-5000) access the data across multiple fetches using "await" to help control flow
    else {

        //get the photo based on id
        const r1 = await fetch(`${domain}/photos/${id}`);
        const photo = await r1.json();

        //use the photo's album id to pull the album's info and place it within an album in the photo object
        const r2 = await fetch(`${domain}/albums/${photo.albumId}`);
        const album = await r2.json();
        photo.album = album;

        //now get the user information from the id
        const r3 = await fetch(`${domain}/users/${photo.album.userId}`);
        const user = await r3.json();
        photo.album.user = user;

        //return the filled photo object
        return photo;

    }

};

//develop the HTML to display photo and data 
const displayPhotoData = photo => {

    let html = `<img src="${photo.thumbnailUrl}" alt="${photo.title}"`;
    html += `<h4>Title: ${photo.title}</h4>`;
    html += `<p>Album: ${photo.album.title}</p>`;
    html += `Posted by: ${photo.album.user.username}`;
    $("#photo").html(html);

};

//develop the HTML for an error message
const displayError = e => {
    let html = `<span>${e}</span>`;
    $("#photo").html(html);
};

$(document).ready(() => {

    //set up the async button event
    $("#view_button").click(async () => {

        const photo_id = $("#photo_id").val(); //get the photo id from the input
        try { //use try to protect from crashes... it will go to 'catch' if there is an exception
            const photo = await getPhoto(photo_id);
            displayPhotoData(photo);
        }
        catch(e) {

            displayError(e); //display the error instead of crashing the page
        }
    });
});
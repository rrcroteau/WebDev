"use strict";

const domain = "https://jsonplaceholder.typicode.com"; //web service URL (without specific folder)

//function to retrieve photo and its data based on photo ID (free samples run from 1-5000)
const getPhoto = (id) => {
    if (id < 1 || id > 5000) { //if the id is out of bounds of the samples (1-5000)
        return Promise.reject(new Error("Photo ID must be between 1 and 5000"));
    }
    else { //esle, fetch the photo based on its id
        return fetch(`${domain}/photos/${id}`)
            .then(response => response.json());
    }

};

//Get a photo album based on a specific photo and its Album ID
const getPhotoAlbum = photo => {
    return fetch(`${domain}/albums/${photo.albumId}`)
        .then(response => response.json()) //resolves to an album object
        .then(album => {
            photo.album = album; //add album property
            return photo; //wraps in a promise object
        });
};

//get the user credited for the photo
const getPhotoAlbumUser = photo => {
    return fetch(`${domain}/users/${photo.album.userId}`)
        .then(response => response.json()) //resolves to user object
        .then(user => {
            photo.album.user = user; //add album.user object
            return photo; //wraps in a promise object
        });
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

//when the document is loaded and ready, create the button click event to use the id in the text box to pull up the data needed to display the html we created
$(document).ready(() => {

    $("#view_button").click(() => {
        const photo_id = $("#photo_id").val();
        getPhoto(photo_id)
            .then(getPhotoAlbum)
            .then(getPhotoAlbumUser)
            .then(displayPhotoData)
            .catch(displayError)
    });
});
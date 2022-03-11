"use strict";

//'async' makes the function asynchronous and 'await' tells JS to wait until the Promise is settled...then return the result
const domain = "https://jsonplaceholder.typicode.com";

//asynchronous function to retrieve a post and related date from various sources
const getPost = async id => {

    //the posts only go from 1-100, if the input is outside this give the user an error
    if (id < 1 || id > 100) {

        return Promise.reject(
            new Error("Post ID must be between 1 and 100"));
    }

    //ELSE (it is a number 1-100) access the data across multiple fetches using "await" to help control flow
    else {

        //get the post based on id
        const r1 = await fetch(`${domain}/posts/${id}`);
        const post = await r1.json();

        //use the post's user id to pull the user's info and place it within a user in the post object
        const r2 = await fetch(`${domain}/users/${post.userId}`);
        const user = await r2.json();
        post.user = user;

        //use the post id to get the list of comments for each post (5 comments per post)
        const r3 = await fetch(`${domain}/posts/${id}/comments`)
        const comments = await r3.json();
        post.comments = comments;

        //return the filled post object
        return post;

    }

};


//develop the HTML to display post and data 
const displayPostData = post => {

    let html = `<h4>Title: ${post.title}</h4>`;
    html += `<p>Body: ${post.body}</p>`;
    html += `Posted by: ${post.user.name} <br />`;
    html += `Contact: ${post.user.email}`;
    html += `<br /><p><h4>Comments:</h4>`;
    for (post.comment of post.comments) {
        html += `${post.comment.body}<br />`;
        html += `----${post.comment.email}<br /><br />`
    }
    html += `</p>`
    $("#post").html(html);

};

//develop the HTML for an error message
const displayError = e => {
    let html = `<span>${e}</span>`;
    $("#post").html(html);
};

$(document).ready(() => {

    //set up the async button event
    $("#view_button").click(async () => {

        const post_id = $("#post_id").val(); //get the post id from the input
        try { //use try to protect from crashes... it will go to 'catch' if there is an exception
            const post = await getPost(post_id);
            displayPostData(post);
        }
        catch(e) {

            displayError(e); //display the error instead of crashing the page
        }
    });
});
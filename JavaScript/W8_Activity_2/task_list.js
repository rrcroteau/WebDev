"use strict";

const displayTasks = () => {

    taskList.sort(); //sort the list before displaying

    let html = ""; //create an empty string to which we will add html strings to later to dynamically create the page

    //loop through the tasklist and append the html code to the html string we just created
    for (const task of taskList) {
        html += "<p><a href='#'>Delete</a>" + task.toString() + "</p>";
    }

    $("#tasks").html(html); //use JQuery to fill the #tasks Div with the html we created

    //add a click event handler for every <a> element (the "Delete") using JQuery to find every <a> and loop through them
    $("#tasks").find("a").each((index, a) => {
        $(a).click(evt => {
            taskList.load().delete(index).save(); //method chain loads (including sort), deletes a specific task, then saves the data
            displayTasks(); //re-displays the task with the one delete being removed now after the click
            evt.preventDefault(); //stops from leaving the page
            $("input:first").focus();        //sets the cursor to the first input element
        });
    });

}
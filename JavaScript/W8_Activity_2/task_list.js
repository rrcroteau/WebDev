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

$(document).ready(() => {
    //button click event for add task button
    $("#add_task").click(() => {
        const taskObj = { //object literal
            description: $("#task").val(), //get the description
            dueDate: $("#due_date").val()
        };

        const newTask = new Task(taskObj); //task object

        //if the new task is valid, load sorted list, add new task, save, then display again
        if (newTask.isValid) {
            taskList.load().add(newTask).save();
            displayTasks();
            $("#task").val(""); //clear the form fields for the next entry
            $("#due_date").val("");
        }

        else {
            //else, display err message
            alert("Please enter a task and/or a due date that is in the future.");
        }

        $("#task").select(); //move focus to task and highlights
    });

    //button click event for the clear form button
    $("#clear_tasks").click(() => {
        taskList.clear();
        $("#tasks").html("");
        $("#task").val("");
        $("#due_date").val("");
        $("#task").focus();

    });

    //by default, when page loads
    taskList.load(); //load the default task list (what is current in localStorage)
    displayTasks(); //display the task on the form
    $("#task").focus(); //set focus
});
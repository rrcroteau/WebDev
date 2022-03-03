"use strict";

//Task class
class Task {

    //constructor that receives the description and future due date
    constructor({ description, dueDate }) {

        this.description = description; //takes the description as is

        if (dueDate) {
            this.dueDate = new Date(dueDate); //if the due date exists, take it and create a date obj from it
        }

        else {
            this.dueDate = new Date(); //else create a new date object and then add a month to it
            this.dueDate.setMonth(this.dueDate.getMonth() + 1);
        }
    }

    get isValid() {

        let result = true;
        const today = new Date(); //create a date of today to verify the due date is in the future

        if (this.description === "") {  //description is required (can't be blank)
            result = false;
        }

        if (this.dueDate.getTime() <= today.getTime()) { //if due date is in the past
            result = false;
        }

        return result;
    }

    //formatted string results to return
    toString() {
        return `${this.description}<br> 
                Due Date: ${this.dueDate.toDateString()}`;
    }
}
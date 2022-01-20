//Author: Ron Croteau
//Date: January, 20 2022
//Description: Calculating averages based on user inputs and displaying them back to the user (with arrays)

//use strict mode of JS
"use strict";


//create empty arrays to store all the data we need
let lab1 = [], lab2 = [], lab3 = [], lab4 = [], lab5 = [], names = [], studentAvg = [], letterGrades = [];

//create an answer for loop control
let answer = "y";

//initialize a score to be used as a vessel to move temp scores into the arrays once validated
let score = 0;

do {
    //create a temp test score to parse and use in math later
    let tTestScore = 0;
    
    //get the students name and add it to the appropriate list
    let name = prompt("Enter the students name").toUpperCase();
    names[names.length] = name;

    //validate that scores are entered properly and store them in appropriate places

    //get the first score and parse it as an int, validate the input and error trap as necessary, if it all checks out, add it to the respective lab total
    do {
        tTestScore = prompt("Enter score for Lab #1 (between 0 and 100)");
        score = parseInt(tTestScore);

        if (isNaN(score) == true || score < 0 || score > 100) {
            alert("Incorrect Input: Please enter a number from 0 - 100")
        }

    } while (isNaN(score) == true || (score < 0 || score > 100))

    lab1[lab1.length] = score;

    //get the second score and parse it as an int, validate the input and error trap as necessary, if it all checks out, add it to the respective lab total
    do {
        tTestScore = prompt("Enter score for Lab #2 (from 0 to 100)");
        score = parseInt(tTestScore);

        if (isNaN(score) == true || (score < 0 || score > 100)) {
            alert("Incorrect Input: Please enter a number from 0 - 100")
        }

    } while (isNaN(score) == true || (score < 0 || score > 100))

    lab2[lab2.length] = score;

    //get the third score and parse it as an int, validate the input and error trap as necessary, if it all checks out, add it to the respective lab total
    do {
        tTestScore = prompt("Enter score for Lab #3 (from 0 to 100)");
        score = parseInt(tTestScore);

        if (isNaN(score) == true || (score < 0 || score > 100)) {
            alert("Incorrect Input: Please enter a number from 0 - 100")
        }

    } while (isNaN(score) == true || (score < 0 || score > 100))

    lab3[lab3.length] = score;

    //get the fourth score and parse it as an int, validate the input and error trap as necessary, if it all checks out, add it to the respective lab total
    do {
        tTestScore = prompt("Enter score for Lab #4 (from 0 to 100)");
        score = parseInt(tTestScore);

        if (isNaN(score) == true || (score < 0 || score > 100)) {
            alert("Incorrect Input: Please enter a number from 0 - 100")
        }

    } while (isNaN(score) == true || (score < 0 || score > 100))

    lab4[lab4.length] = score;

    //get the fifth score and parse it as an int, validate the input and error trap as necessary, if it all checks out, add it to the respective lab total
    do {
        tTestScore = prompt("Enter score for Lab #5 (from 0 to 100)");
        score = parseInt(tTestScore);

        if (isNaN(score) == true || (score < 0 || score > 100)) {
            alert("Incorrect Input: Please enter a number from 0 - 100")
        }

    } while (isNaN(score) == true || (score < 0 || score > 100))

    lab5[lab5.length] = score;

    //see if the user wants to enter another student, validate and error trap as neccesary

    do {
        answer = prompt("Do you have another student to enter? [y/n]", "n").toLowerCase();

        if (answer != "y" && answer != "n") {

            alert("You must enter either y or n");
        }

    } while (answer != "y" && answer != "n")

} while (answer == "y")

//we should now have all the data we can get from the user stored into the lists, now we can manipulate them to get the other data we need (averages/letter grades)


//make sure the lists are not empty for some reason
if (lab1.length > 0) {

    //determine the average for each student
    //create a temp avg to transfer into lists later
    let tAvg = 0;

    for (let i in lab1) {
        tAvg = ((lab1[i] + lab2[i] + lab3[i] + lab4[i] + lab5[i]) / 5).toFixed(2);
        studentAvg[i] = tAvg;

         //determine the letter grade based on student average and add to letter grade list
        if (studentAvg[i] >= 90) {
            letterGrades[i] = "A";
        }

        else if (studentAvg[i] >= 80) {
            letterGrades[i] = "B";
        }

        else if (studentAvg[i] >= 70) {
            letterGrades[i] = "C";
        }

        else if (studentAvg[i] >= 60) {
            letterGrades[i] = "D";
        }

        else {
            letterGrades[i] = "F";
        }

    }

    //create a table to store this sweet data in... this is the start of the table, the rest will be written with for loops
    document.write(`<table>
                        <caption>Student Grades and Averages</caption>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Lab 1</th>
                            <th>Lab 2</th>
                            <th>Lab 3</th>
                            <th>Lab 4</th>
                            <th>Lab5</th>
                            <th>Average</th>
                            <th>Letter Grade</th>
                        <tr>
                        </thead><tbody>`)

    //use a for loop to add data to the table rows 
    for (let i in lab1) {
        document.write(`<tr>
                            <td>${names[i]}</td>
                            <td>${lab1[i]}</td>
                            <td>${lab2[i]}</td>
                            <td>${lab3[i]}</td>
                            <td>${lab4[i]}</td>
                            <td>${lab5[i]}</td>
                            <td>${studentAvg[i]}</td>
                            <td>${letterGrades[i]}</td>
                        </tr>`)
    }

    //close the table
    document.write(`</tbody></table><br><br><br>`)

    //create a function to get the average of each lab

    let averageOfArray = (lab) => {

        let sum = 0;
        for (let i in lab) {
            sum += lab[i];
        }

        return sum / lab.length;
    }

    //call the function to get each average
    let lab1Avg = averageOfArray(lab1).toFixed(2);
    let lab2Avg = averageOfArray(lab2).toFixed(2);
    let lab3Avg = averageOfArray(lab3).toFixed(2);
    let lab4Avg = averageOfArray(lab4).toFixed(2);
    let lab5Avg = averageOfArray(lab5).toFixed(2);

    //create the table to display the averages for each lab
    document.write(`<table>
                        <caption>Class Averages Per Lab</caption>
                        <thead>
                        <tr>
                            <th>Lab 1</th>
                            <th>Lab 2</th>
                            <th>Lab 3</th>
                            <th>Lab 4</th>
                            <th>Lab5</th>
                        <tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>${lab1Avg}</td>
                            <td>${lab2Avg}</td>
                            <td>${lab3Avg}</td>
                            <td>${lab4Avg}</td>
                            <td>${lab5Avg}</td>
                        </tbody>
                        </table>`)
}


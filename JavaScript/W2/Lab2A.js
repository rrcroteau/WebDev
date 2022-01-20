//Author: Ron Croteau
//Date: January, 20 2022
//Description: Calculating averages based on user inputs and displaying them back to the user (without arrays)

//use strict mode of JS
"use strict";


//create counting variables for all the test scores
let test1Total = 0, test2Total = 0, test3Total = 0, test4Total = 0, test5Total = 0;

//create counting variable for number of students entered in order to get the average from the total test scores
let numStudents = 0;

//create an answer for loop control
let answer = "y";

do {

    //increment the number of students
    numStudents += 1;
    //create a temp test score to parse and use in math later
    let tTestScore = 0;
    //initialize scores for the 5 tests
    let score1 = 0, score2 = 0, score3 = 0, score4 = 0, score5 = 0;

    //get the students name
    const name = prompt("Enter the students name:").toUpperCase();

    //validate that scores are entered properly and store them in appropriate places

    //get the first score and parse it as an int, validate the input and error trap as necessary, if it all checks out, add it to the respective test total
    do
    {
        tTestScore = prompt("Enter test score #1 (between 0 and 100): ");
        score1 = parseInt(tTestScore);

        if (isNaN(score1) == true || (score1 < 0 || score1 > 100))
        {
            alert("Incorrect Input: Please enter a number 0 - 100")
        }

    } while (isNaN(score1) == true || (score1 < 0 || score1 > 100))

    test1Total += score1;

    //get the second score and parse it as an int, validate the input and error trap as necessary, if it all checks out, add it to the respective test total
    do
    {
        tTestScore = prompt("Enter test score #2 (between 0 and 100): ");
        score2 = parseInt(tTestScore);

        if (isNaN(score2) == true || (score2 < 0 || score2 > 100)) {
            alert("Incorrect Input: Please enter a number 0 - 100")
        }

    } while (isNaN(score2) == true || (score2 < 0 || score2 > 100))
    
    test2Total += score2;

    //get the third score and parse it as an int, validate the input and error trap as necessary, if it all checks out, add it to the respective test total
    do
    {
        tTestScore = prompt("Enter test score #3 (between 0 and 100):");
        score3 = parseInt(tTestScore);

        if (isNaN(score3) == true || (score3 < 0 || score3 > 100)) {
            alert("Incorrect Input: Please enter a number 0 - 100")
        }

    } while (isNaN(score3) == true || (score3 < 0 || score3 > 100))
    
    test3Total += score3;

    //get the fourth score amd parse it as an int, validate the input and error trap as necessary, if it all checks out, add it to the respective test total
    do
    {
        tTestScore = prompt("Enter test score #4 (between 0 and 100):");
        score4 = parseInt(tTestScore);

        if (isNaN(score4) == true || (score4 < 0 || score4 > 100)) {
            alert("Incorrect Input: Please enter a number 0 - 100")
        }

    } while (isNaN(score4) == true || (score4 < 0 || score4 > 100))
    
    test4Total += score4;

    //get the fifth score amd parse it as an int, validate the input and error trap as necessary, if it all checks out, add it to the respective test total
    do
    {
        tTestScore = prompt("Enter test score #5 (between 0 and 100):");
        score5 = parseInt(tTestScore);

        if (isNaN(score5) == true || (score5 < 0 || score5 > 100)) {
            alert("Incorrect Input: Please enter a number 0 - 100")
        }

    } while (isNaN(score5) == true || (score5 < 0 || score5 > 100))
    
    test5Total += score5;

    //determine the average
    const average = ((score1 + score2 + score3 + score4 + score5) / 5).toFixed(2);

    //build the HTML to add to the page
    const html = `<p>Name: ${name}</p>
                  <p>Score 1 = ${score1}</p>
                  <p>Score 2 = ${score2}</p>
                  <p>Score 3 = ${score3}</p>
                  <p>Score 4 = ${score4}</p>
                  <p>Score 5 = ${score5}</p>
                  <p>Average = ${average}</p>`

    //use the DOM to write the html to the page
    document.write(html);

    answer = prompt("Do you have another student to enter? [y/n] ", "y").toLowerCase();

} while (answer == "y")
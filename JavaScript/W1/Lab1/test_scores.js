//Author: Ron Croteau
//Date: January, 13 2022
//Description: Calculating Grades (Weighted 20%, 20%, 25%, 35%) based on user inputs and displaying them back to the user

//use strict mode of JS
"use strict";

//declare / initialize variables
let total = 0; //running total for scores
let tTestScore = 0; //used to score temp test scores from user input

//get the students name
const name = prompt("Enter the students name:")

//get the first score and parse it as an int
tTestScore = prompt("Enter test score #1 (Worth 20%:");
const score1 = parseInt(tTestScore);

//get the second score and parse it as an int
tTestScore = prompt("Enter test score #2 (Worth 20%:");
const score2 = parseInt(tTestScore);

//get the third score and parse it as an int
tTestScore = prompt("Enter test score #3 (Worth 25%:");
const score3 = parseInt(tTestScore);

//get the fourth score amd parse it as an int 
tTestScore = prompt("Enter test score #4 (Worth 35%:");
const score4 = parseInt(tTestScore);


//add scores up for total, multiplying the scores by the weighted percentage
total = (score1 * .20) + (score2 * .20)  + (score3 * .25) + (score4 * .35);


//build the HTML to add to the page
const html = `<p>Name:${name}</p>
              <p>Score 1 = ${score1} &nbsp;&nbsp;&nbsp;&nbsp; *Worth 20%</p>
              <p>Score 2 = ${score2} &nbsp;&nbsp;&nbsp;&nbsp; *Worth 20%</p>
              <p>Score 3 = ${score3} &nbsp;&nbsp;&nbsp;&nbsp; *Worth 25%</p>
              <p>Score 4 = ${score4} &nbsp;&nbsp;&nbsp;&nbsp; *Worth 35%</p>
              <p>Weighted Average = ${total}</p>`

//use the DOM to write the html to the page
document.write(html);
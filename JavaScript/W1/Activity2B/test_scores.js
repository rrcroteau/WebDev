//use strict mode of JS
"use strict";

//declare / initialize variables
let total = 0; //running total for scores
let tTestScore = 0; //used to score temp test scores from user input

//get the first score and parse it as an int
tTestScore = prompt("Enter test score #1:");
const score1 = parseInt(tTestScore);

//get the second score and parse it as an int
tTestScore = prompt("Enter test score #2:");
const score2 = parseInt(tTestScore);

//get the third score and parse it as an int
tTestScore = prompt("Enter test score #3:");
const score3 = parseInt(tTestScore);

//add scores up for total
total = score1 + score2 + score3;

//divide by number of scores to get average
const average = parseInt(total / 3);

//build the HTML to add to the page
const html = `<p>Score 1 = ${score1}</p>
              <p>Score 2 = ${score2}</p>
              <p>Score 3 = ${score3}</p>
              <p>Average Score = ${average}</p>`

//use the DOM to write the html to the page
document.write(html);
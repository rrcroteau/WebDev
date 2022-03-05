"use strict";

/* 
 Using localStorage (similar to sessionStorage, but sessionStorage only lasts while the session is active)

localStorage.setItem("key", "value")  --saves the data/value in an item
localStorage.getItem("key") -- gets the data/value from an item
  **can also access directly with localStorage.key**
  
localStorage.removeItem("key")  --removes the item from storage
localStorage.clear() --clears everything in the local storage

JSON -- JavaScript Object Notation
JSON.stringify(object)  --returns a JSON object for the specified object
JSON.parse(json_string)  --returns the object from a JSON string

 */


//library for storing and retrieving info in a  JSON file
const storage = {

    //method to retrieve the data from the JSON file
    retrieve() {
        const members = []; //create an array to store the members
        const json = localStorage.members; //attempts to retrieves members from the JSON storage

        //if the JSON object "members" exist
        if (json) {
            const memberArray = JSON.parse(json); //parse the JSON object into the array

            for (let obj of memberArray) { //for each obj in this array, push it to the local array
                members.push(new Member(obj)); //uses destructuring
            }
        }

        return members; //return the members array (retrieve it)

    },

    //uses localStorage to store the tasks implementing the tasks array
    store(members) {
        localStorage.members = JSON.stringify(members);
        alert(localStorage.members);
    },

    //will empty the member list in local storage
    clear() {
        localStorage.members = "";
    }
};




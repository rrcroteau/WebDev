"use strict";

//class as a prototype, not an Object Template
const mpg = {
    miles: 0, //property
    gallons: 0,//property

    //method to validate properties
    get isValid() {

        let result;

        if (isNaN(this.miles) || isNaN(this.gallons)) {
            result = false;
        }

        else if (this.miles <= 0 || this.gallons <= 0) {
            result = false;
        }

        else {
            result = true;
        }

        return result

    },

        //function to calculate the MPG and return the result
    calculate() {
        return this.miles / this.gallons;
    }
    
};
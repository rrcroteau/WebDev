"use strict";

//class written to be a template for an object
class Trip {

    //constructor, to be run when the instance is created
    constructor(destination, miles, gallons) {

        // fill the local vars with the information passed to the constructor
        this.destination = destination;
        this.miles = parseFloat(miles); //have to do math, so parse it
        this.gallons = parseFloat(gallons); 
    }

    get isValid() {  //this is a read-only property

        let result;

        //validate the input of miles/gallons and return the result (true/false)
        if (this.destination == "" || isNaN(this.miles) || isNaN(this.gallons)) {
            result = false;
        }

        else if (this.miles <= 0 || this.gallons <= 0) {
            result = false;
        }

        else {
            result = true;
        }

        return result;
    }

    //return the result of the mpg calculation
    get mpg() { //this is a read-only property
        return this.miles / this.gallons;
    }

    //create a formatted string to return listing the data and calculations
    toString() {
        const mpg = this.mpg.toFixed(1);
        return `${this.destination}: Miles - ${this.miles}; MPG - ${mpg}`;
    }
}

//class that creates a Trips array to hold multiple Trip objects
class Trips {

    //constructor to declare the local array
    constructor() {
        this._trips = [];
    }

    //create a shortcut push function to push each trip object into the trip array
    push(trip) {
        //allow only instances of trip objects to be passed
        if (trip instanceof Trip) {
            this._trips.push(trip);
        }
    }

    //accessor method to calculate to the total MPG of all trips
    get totalMPG() { //read-only property
        let totalMiles = 0;
        let totalGallons = 0;
        for (let trip of this._trips) {
            totalMiles += trip.miles;
            totalGallons += trip.gallons;
        }

        return totalMiles / totalGallons;
    }

    //function to return a string listing out all trips by using each trip object toString func as well as the totalMPG
    toString() {
        let str = "";
        for (let trip of this._trips) {
            str += trip.toString() + "\n";
        }

        str += "\nCumulative MPG: " + this.totalMPG.toFixed(1);

        return str;
    }
}
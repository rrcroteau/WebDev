"use strict";

//Member class
class Member {

    //constructor that receives the description and future due date
    constructor({ FirstName, MiddleName, LastName, Street1, Street2, City, State, Zip, HomePhone, WorkPhone, CellPhone, Email, Dob, Credit, Household, Notes }) {

        //take the inputs in as they are
        this.FirstName = FirstName; 
        this.MiddleName = MiddleName; 
        this.LastName = LastName; 
        this.Street1 = Street1;
        this.Street2 = Street2;
        this.City = City;
        this.State = State;
        this.Zip = Zip;
        this.HomePhone = HomePhone;
        this.WorkPhone = WorkPhone;
        this.CellPhone = CellPhone;
        this.Email = Email;
        this.Dob = Dob;
        this.Credit = Credit;
        this.Household = Household;
        this.Notes = Notes;
    }

    get isValid() {

        let result = true;

        //if (this.FirstName.length == 0) {  //description is required (can't be blank)
        //    result = false;
        //}

        if (this.FirstName.length == 0 || GotBadWords(this.FirstName) == true) {
            $("#first_name_error").text("This field cannot contain bad words or be empty");
            result = false;
        } else {
            $("#first_name_error").text("*");
        }

        //check if contains 'bad words'
        if (GotBadWords(this.MiddleName) == true) {
            $("#middle_name_error").text("This field cannot contain bad words");
            result = false;
        } else {
            $("#middle_name_error").text("");
        }

        //check if empty or contains 'bad words'
        if (this.LastName.length == 0 || GotBadWords(this.LastName) == true) {
            $("#last_name_error").text("This field cannot contain bad words or be empty");
            result = false;
        } else {
            $("#last_name_error").text("*");
        }
        
        //check if empty or contains 'bad words'
        if (this.Street1.length == 0 || GotBadWords(this.Street1) == true) {
            $("#street_1_error").text("This field cannot contain bad words or be empty");
            result = false;
        } else {
            $("#street_1_error").text("*");
        }

        //check if contains 'bad words'
        if (GotBadWords(this.Street2) == true) {
            $("#street_2_error").text("This field cannot contain bad words");
            result = false;
        } else {
            $("#street_2_error").text("");
        }

        //check if empty or contains 'bad words'
        if (this.City.length == 0 || GotBadWords(this.City) == true) {
            $("#city_error").text("This field cannot contain bad words or be empty");
            result = false;
        } else {
            $("#city_error").text("*");
        }

        //state 2 letters or empty
        if (this.State.length == 0 || !IsValidStateAbbr(this.State)) {
            $("#state_error").text("This field must contain a valid 2-letter abbreviation for a US State (including DC)");
            result = false;
        } else {
            $("#state_error").text("*")
        }

        //zip must be 5 digit string --if empty it will return false, so it is a mandatory field
        if (!Is5Digits(this.Zip)) {
            $("#zip_error").text("This field must contain a 5 digit zip code");
            result = false;
        } else {
            $("#zip_error").text("*");
        }

        //home phone, if entered, must be 10-digits and could also include () - or a space between number sets
        if (this.HomePhone.length != 0 && !IsValidUSPhone(this.HomePhone)) {
            $("#home_phone_error").text("This must be a 10-digit number (may contain ( ), -, or  spaces between sets of numbers) e.g. 401-777-7777 or (401) 777-7777");
            result = false;
        } else {
            $("#home_phone_error").text("");
        }

        //work phone, if entered, must be 10-digits and could also include () - or a space between number sets
        if (this.WorkPhone.length != 0 && !IsValidUSPhone(this.WorkPhone)) {
            $("#work_phone_error").text("This must be a 10-digit number (may contain ( ), -, or  spaces between sets of numbers) e.g. 401-777-7777 or (401) 777-7777");
            result = false;
        } else {
            $("#work_phone_error").text("");
        }

        //cell phone must be entered, so we can validate it right away, as no entry will validate to false anyway
        if (!IsValidUSPhone(this.CellPhone)) {
            $("#cell_phone_error").text("You must enter a 10-digit number (may contain ( ), -, or  spaces between sets of numbers) e.g. 401-777-7777 or (401) 777-7777");
            result = false;
        } else {
            $("#cell_phone_error").text("*");
        }

        //check for a valid email address
        if (IsValidEmail(this.Email) == false) {
            $("#email_error").text("Invalid Email Address");
            result = false;
        } else {
            $("#email_error").text("*");
        }

        //dob cannot be future date or empty
        if (this.Dob.length == 0 || IsFutureDate(this.Dob)) {
            $("#dob_error").text("DOB cannot be a future date or left blank");
            result = false;
        } else {
            $("#dob_error").text("*");
        }

        //check if the input can be parsed to a float and is not less than 0 --also cannot be empty
        if (this.Credit.length == 0 || !FloatMinValue(this.Credit, 0)) {
            $("#credit_error").text("Credit cannot be negative");
            result = false;
        } else {
            $("#credit_error").text("*");
        }

        //check if the input can be parsed to an int and is at not less than 1 --also cannont be empty
        if (this.Household.length == 0 || !IntMinValue(this.Household, 1)) {
            $("#household_error").text("Household must have at least 1 inhabitant");
            result = false;
        } else {
            $("#household_error").text("*");
        }

        if (GotBadWords(this.Notes) == true) {
            $("#notes_error").text("This field cannot contain bad words");
            result = false;
        } else {
            $("#notes_error").text("");
        }

        return result;
    }

    //formatted string results to return
    toString() {
        return `${this.FirstName} ${this.LastName} Email: ${this.Email}`;
    }
}
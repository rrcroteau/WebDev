//create a function to check for valid email addresses
function IsValidEmail(strEmail) {

    results = true;//Initialize results

    atPos = strEmail.indexOf("@", 0);   //will return -1 if not found

    //If not found or first char
    if (atPos == -1 || atPos < 1) {
        results = false;
    }

    //If we find another @, we have an issue
    atPos2 = strEmail.indexOf("@", (atPos + 1))
    if (atPos2 > -1) {
        results = false;
    }

    //Find the last period
    lastPeriodPos = strEmail.indexOf(".", 0);
    if (lastPeriodPos == -1) {
        results = false;
    }

    tLastPeriodPos = lastPeriodPos;

    //while loop to continue finding periods until there are no more
    while (tLastPeriodPos > -1) {
        tLastPeriodPos = strEmail.indexOf(".", (tLastPeriodPos + 1))    //Look for next period
        //If we find another period, store its position
        if (tLastPeriodPos > -1) {
            lastPeriodPos = tLastPeriodPos;
        }
    }


    //Is there at least one char between the @ and the last period
    if ((lastPeriodPos - atPos) < 2) {
        results = false;
    }

    //alert("Last Period: " + lastPeriodPos + "  --  Length: " + strEmail.length);

    //get length of characters after the last period, make sure it >= 2
    if (strEmail.length - lastPeriodPos < 3) {
        results = false;
    }

    //return results
    return results;
}

//Check for bad words
function GotBadWords(strAnything) {
    badWords = ["homework", "poop", "exam", "lecture", "test"];

    //initialize results
    results = false;

    //Loop thru the list of bad words and check for bad words
    for (val of badWords) {
        if (strAnything.toLowerCase().indexOf(val) > -1) {
            results = true;
        }
    }
    
    

    //Return results
    return results;

}

//check for an integer of a minimum value
function IntMinValue(num, minvalue) {

    results = true;

    //parse the number you are checking into an int
    num = parseInt(num);

    if (isNaN(num) || num < minvalue) {
        results = false;
    }

    //return the results
    return results;
}

//check for an integer of a minimum value
function FloatMinValue(num, minvalue) {

    results = true;

    //parse the number you are checking into an int
    num = parseFloat(num);

    if (isNaN(num) || num < minvalue) {
        results = false;
    }

    //return the results
    return results;
}

//check if a date if a future date by comparing it to today's date
function IsFutureDate(inputDate) {

    d_now = new Date(); //today's date
    d_inp = new Date(inputDate); //date input by user

    return d_now < d_inp //the input date can be today's date and pass
    
}

//check if a valid 2 State Abbreviation has been input (including DC)
function IsValidStateAbbr(abbr) {

    results = false; //set to false until we know it is valid

    //set the input to upper
    abbr = abbr.toUpperCase();

    //create the list of state abbreviations
    const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA",
        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

    if (states.indexOf(abbr) != -1) {

        results = true; //if the abbreviation was found it will not return -1, therefore it is a valid abbreviation

    }

    return results;
}

//check if 5 digits have been entered [0-9] **doesn't verify if it is an actual zip code
function Is5Digits(input) {

    //create the regex to test it against -- this should match exactly and only 5 digits  -- \d is the same as [0-9]
    re = /^\d{5}$/

    //test the input against the regular expression and return it (if it matches the expression, it will return true (valid))
    return re.test(input);
}

//check if 10 digit phone number (US style) has been entered
function IsValidUSPhone(input) {

    //create the regex to test it against -- optional opening (, 3 digits, optional closing ), optional space or -, 3 digits, optional space or -, 4 digits
    re = /^\(?([0-9]{3})\)?[-\s]?([0-9]{3})[-\s]?([0-9]{4})$/

    //test the input against the regular expression and return it (if it matches the expression, it will return true (valid))
    return re.test(input)
}
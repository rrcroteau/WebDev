"use strict";
$(document).ready(() => {

    //set event handler for all h2 tags
    $("#courses h2").click(evt => {
        //get the h2 that is being clicked
        const h2 = evt.currentTarget;

        //toggle the minus class for the h2 clicked
        $(h2).toggleClass("minus");

        //show/hide related div
        if ($(h2).attr("class") !== "minus") {
            $(h2).next().hide();
        }
        else {
            $(h2).next().show();
        }

        //don't allow the page to refresh
        evt.preventDefault();
    });

    //set focus on first h2 tag's <a> tag
    $("#courses").find("a.first").focus();

});
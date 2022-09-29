// WEB303 Assignment 2 João Vitor Santana Ebrenz

$(document).ready(function () {
    $("a#prospect").click(function () {
        $("#content").hide().load("prospect.html").fadeIn(1000);
        console.log("Prospect is working!");

    });
    $("a#convert").click(function () {
        $("#content").hide().load("convert.html").fadeIn(1000);
        console.log("Covert is working!");

    });

    $("a#retain").click(function () {
        $("#content").hide().load("retain.html").fadeIn(1000);
        console.log("Retain is working!");
    });
});
/*
    Assignment 4 - João Vitor Santana Ebrenz
*/

$(function () {

  var x = document.getElementById("locationhere");
  var lastLat = localStorage.getItem("lat");
  var lastLong = localStorage.getItem("long");

  if (lastLat && lastLong) {

    x.innerHTML +=
      "<br>Last Latitude: " +
      lastLat +
      "<br>Last Longitude: " +
      lastLong +
      "<br> Welcome back!";
  } else {
    x.innerHTML += "Welcome";
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported.";
  }

  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    x.innerHTML +=
      "<br>Current Latitude: " +
      latitude +
      "<br>Current Longitude: " +
      longitude;


    localStorage.setItem("lat", position.coords.latitude);
    localStorage.setItem("long", position.coords.longitude);

    if (lastLat && lastLong) {
      const distance = calcDistanceBetweenPoints(
        lastLat,
        lastLong,
        latitude,
        longitude
      );
      let kms = distance / 1000;
      x.innerHTML +=
        "<br>Distance between last and current location: " + kms + " Kms";
    }
  }
  function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
    var radians = function (num) {
      return num * Math.PI / 180;
    }
    var R = 6371000;
    var φ1 = radians(lat1);
    var φ2 = radians(lat2);
    var Δφ = radians(lat2 - lat1);
    var Δλ = radians(lon2 - lon1);

    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return (R * c);
  }
});



$(document).ready(function() { 
    let submit = document.getElementById('submit');
    submit.disabled = true;
    submit.className = 'disabled';

$("#password, #password2").on('keyup', function() {
    if($("#password").val() == $("#password2").val()) {
        $("#message").html("passwords match");
        if($('#password').val().length >= 12) {
            submit.disabled = false;
            submit.className = 'enabled';
        }
    } else {
        $("#message").html("passwords don't match");
    }
    
});
Countries();
function Countries() {
    let countrySelector = document.getElementById('country');
    
    let _countries =  getCountries(countries);
    console.log(_countries);
    
    var options = '<option value="none">--Select your Country--</option>';
    for(let i = 0; i < _countries.length; i++) {
        let name = _countries[i].name;
        let code = _countries[i].code;

        options += '<option value="' + code + '">' + name + '</option>';    
    }
    countrySelector.innerHTML = options;
}

 function getCountries(countries) {
    let countryList = $.getScript("js/countries.js").done(function(getcountries) {
        return getcountries;
    });
    return countries;
} 


 

    $("#terms").click(function() {
        $("#submit").attr("disabled", !this.checked);
    });
    var form = $("#form");
    var username = $("#username");
    var country = $("#country");
    console.log(username);
    console.log(country);
    form.submit(function(e){
        e.preventDefault();
        txt.show();
        txt.text(`Welcome ${username.val()} ! The country code you selected is ${country.val()}`);
        submit.attr('disabled',true);     
      });
});
 

//João Vitor Santana Ebrenz - 0779042;


$(document).ready(function () {
    //jsonCallFunction();
    ajaxCallFunction();
});
function ajaxCallFunction() {

    $.ajax({
        url: 'team.json',
        method: 'GET',
        dataType: 'json',
        beforeSend: function () {
            $('#team').append('<h2 id="load">Loading...</h2>').hide(3000);
        },

        complete: function () {
            $('#load').hide(2000);
            $('#team').hide(2000);
        },

        success: function (teammembers) {

            $.getJSON('team.json', function (team) {
                $.each(team.teammembers, function () {
                    $('#team').append("<h2>" + this['name'] + "</h2><h5>" + this['position'] +
                        "</h5><p>" + this['bio'] + "</p>").fadeIn(3000);
                });
                console.log(teammembers);

            })

            setTimeout(function () {
                alert('Data has Loaded from team.json');
            }, 5000);
        }
    }
    )
};
function jsonCallFunction() {
    $.getJSON("team.json", function (team) {
        $.each(team.teammembers, function () {
            $("#team").append("<h2>" + this['name'] + "</h2><h5>"
                + this['position'] + "</h5><p>"
                + this['bio'] + "</p>");

        }
        )
    })
};

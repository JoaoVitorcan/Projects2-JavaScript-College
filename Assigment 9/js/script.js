$(document).ready(function() {
    getCharacters();

    $("th").each(function(column){
        $(this).click(function(){ 
            if($(".default")) {
                $('table').removeClass("default");
                $('table').addClass("active");
                var type = $(this).data("type");
                var records = $("table").find("tbody > tr");
                records.sort(function(a, b) {
                    var value1 = $(a).children("td").eq(column).text();
                    var value2 = $(b).children("td").eq(column).text();
                    if(type == "num") {
                        value1 *= 1;
                        value2 *= 1;    
                    }
                    return (value1 < value2) ? -1 :(value1>value2?1:0);
                });
                $.each(records, function(index, row) {
                    $("tbody").append(row);
                });
            }  
            $(this).click(function(){
                if ($(".active")){
                    $('table').removeClass("active");
                    $('table').addClass("active2");
                    var type = $(this).data("type");
                    var records = $("table").find("tbody > tr");
                    records.sort(function(a, b) {
                        var value1 = $(a).children("td").eq(column).text();
                        var value2 = $(b).children("td").eq(column).text();
                        if(type == "num") {
                            value1 *= 1;
                            value2 *= 1;    
                        }
                        return (value1 > value2) ? -1 :(value1<value2?1:0);
                    });
                    $.each(records, function(index, row) {
                        $("tbody").append(row);
                    });
                }
                $(this).click(function(){
                    if($(".active2")){
                        $('table').removeClass("active2");
                        $('table').addClass("default");
                    }
                });
            }); 
        });
    }); 
    
    $('.table-assignment').each(function() {
        var $table = $(this);
        var $tbody = $table.find('tbody');
        var $controls = $table.find('th');
        $controls.on('click', function() {
            var $header = $(this);
            if($header.is('.ascending') || $header.is('.descending')) {
                $header.toggleClass('ascending descending');
            } else {
                $header.addClass('ascending');
                $header.siblings().removeClass('ascending descending');
            }
        });
    });  

});  

function getCharacters() {
    $.getJSON("file.json").done(function(data) {
        $.each(data.inmates, function(index, value) {
            $('.inmate').append(
                `<tr>
                <td>${value.FirstName}</td>
                <td>${value.LastName}</td>
                <td>${value.Age}</td>
                <td>${value.Nationality}</td>
                <td>${value.FictionName}</td>
                <td>${value.DateOfBirth}</td>
                </tr>`
            );
        });  
    });
}



$(document).ready(function(){
    $("#submitForecast").click(function(){
        return getForecast();
    });

});

function getForecast(){
    var city = $("#city").val();
    var days = $("#days").val();

    if(city != '' && days !=''){
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=imperial" + "&cnt=" + days + "&APPID=17e1f1aaae37ba13bd1fb4c5f0b25d4a",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var table = '';
                var header = '<h2> Weather forecast for ' + data.city.name+ '</h2>'
                console.log(data)
                for(var i = 0; i < data.list.length; i++){
                    table += "<tr>";

                

                    table += "<td><img src='https://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png'></td>";
                    table += "<td>" + data.list[i].main.temp + "&deg;F </td>"
                    table += "<td>" + data.list[i].main.humidity + "% </td>"
                    

                    table += "</tr>";
                }

                $("#forecastWeather").html(table);
                $("#header").html(header);

                $("#city").val('');

                $("#days").val('')

            }

        });
    }else {
         $("#error").html("<div>City field cannot be empty</div>");
        }
    }

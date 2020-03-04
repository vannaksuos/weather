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
            url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=imperial" + "&cnt=" + days + "&APPID=17e1f1aaae37ba13bd1fb4c5f0b25d4a",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var table = '';
                console.log(data)
                for(var i = 0; i < data.list.length; i++){
                    table += "<tr>";

                    table += "<td>" + data.list[i].weather[0].icon + "</td>"
                    table += "<td>" + data.list[i].main.temp[0]+ "</td>"
                    table += "<td>" + data.list[i].main.humidity[0] ;"</td>"
                    

                    table += "</tr>";
                }

                $("#forecastWeather").html(table);

                $("#city").val('');

                $("#days").val('')

            }

        });
    }else {
         $("#error").html("<div>City field cannot be empty</div>");
        }

     
    }



// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

$(document).ready(function(){
    
    $("#submitCity").click(function(){
        return getWeather();
        
    });

});

function getWeather() {
    var city = $("#city").val();

    if(city != ''){
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=17e1f1aaae37ba13bd1fb4c5f0b25d4a",
            type: "GET",
            dataType:"jsonp",
            success: function(data){
                console.log(data)
                var widget = showResult(data)
                $("#showWeather").html(widget);
                $("#city").val('');
            }
           
            }
        )
    } else {
        $("#error").html("<div>City field cannot be empty</div>");
}
}
               
function showResult(data){
    return  '<h2 style="font-weight:bold; font-size:30px;" class="text-center">Current Weather for '+data.name+'</h2>'+
            "<h3> Weather: "+data.weather[0].main+"</h3>"+
            "<h3>Temperature: "+data.main.temp+" &deg;F&deg;F</h3>"+
            "<h3>Description: <img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+data.weather[0].description+"</h3>"+
            "<h3>Humidity: "+data.main.humidity+"%</h3>"+
            "<h3 style='padding-bottom:10px;'>Wind Speed: " +data.wind.speed+"m/s</h3>";
            
        }

function showForeCast(data){
    return 
}


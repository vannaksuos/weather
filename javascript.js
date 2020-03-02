$(document).ready(function(){
    
    $("#submitCity").click(function(){
        return getWeather();

    });



});

function getWeather() {
    var city = $("#city").val();

    if(city != ''){
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=a9697caf01780f89b00bcda4586c444a",
            type: "GET",
            dataType:"jsonp",
            success: function(data){
                console.log(data)
              
                var widget = showResult(data)

                $("#showWeather").html(widget);
                $("#city").val('');
            }

            
        });

    }else{
        $("#error").html("<div>City field cannot be empty</div>");
    }
}

function showResult(data){
    return  "<p>Temperature: "+list.main.temp+" %deg;F</p>"+
            "<p>humidity: "+list.main.humidity+"</p>"+
            "<p>Wind Speed: "+list.wind.speed+"</p>"+
            "<p>U/V Index: "+list.main.u/v+"</p>";
}
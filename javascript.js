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
                var widget = showResult(data)
                $("#showWeather").html(widget);
                $("#city").val('');
            },
            else {
                $("#error").html("<div>City field cannot be empty</div>"),
            }
        })
    }
}
               


function showResult(data){
    return  "<p>Temperature: "+data.list.main.temp+" %deg;F</p>"+
            "<p>humidity: "+data.list.main.humidity+"</p>"+
            "<p>Wind Speed: "+data.list.wind.speed+"</p>"+
            "<p>U/V Index: "+data.list.main.u/v+"</p>"
        }

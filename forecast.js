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
            url: 'api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=imperial"+"&cnt=" + days + "&APPID=17e1f1aaae37ba13bd1fb4c5f0b25d4a",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                
            }

        })
    }

}
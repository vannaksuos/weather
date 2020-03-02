$(document).ready(function() {
    $("#search").click(function(){
        var city =$("#city").val();

        if(city != '') {
            
        $.ajax({
            url: 'api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=17e1f1aaae37ba13bd1fb4c5f0b25d4a",
            dataType:'jsonp',
            type:'GET',
            // data: {q:city appid: key, units: 'imperial'},

            success: function(data){
                var widget + show(data);

                $("#show").html(widget);
                $("#city").val('');
            }
        });

            }else{
                $("#error").html('Field cannot be empty');
            }
        });
    });

function show(data){
    return "<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" +
           "<h3><strong>Description</strong>: "+ data.weather[0].description +"</h3>"
           "<h3><strong>Temperature</strong>: "+ data.main.temp +"</h3>"
           "<h3><strong>Temperature</strong>: "+ data.wind.speed +"</h3>"
           "<h3><strong>Temperature</strong>: "+ data.main.humidity +"</h3>"
           "<h3><strong>Temperature</strong>: "+ data.main.temp_min +"</h3>"
           "<h3><strong>Temperature</strong>: "+ data.main.temp_min +"</h3>"
}
}
// set up variable
// =========================================
// search parameters
// var authKey = "17e1f1aaae37ba13bd1fb4c5f0b25d4a";  
// var queryTerm= "";
// var numResults = 0;



// // ===========================================
// function runQuery()
// main process

// 1.Retrieve user input and convert to variable
// 2.Use those variable to run an AJAX call to the Open weather api
// 3.Break down the Weather object into usable fields
// 4. Dynamically generate html content
// 5. dealing with edge cases(bugs)
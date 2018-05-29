
// users longitude and latitude input for api
// getting user's location with HTML5 geolocation
const fTemp = 
const cTemp = '';

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getPosition);
} else {
    alert("Geolocation is not turned on or uncompatible with this browser.");
}

// pushing lat and lon into FFC Weather API
function getPosition(position){
    const fccWeatherApi = " https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;

    // render data into html
    $.getJSON(fccWeatherApi, function(data){
        var icon = data.weather[0].icon;
        $("img").attr({
            src:icon,
        });
        $(".localTemp").html(data.main.temp);
        $(".descriptions").html(data.weather[0].description);
        $(".city").html(data.name);
        $(".country").html(data.sys.country);
    })
    
    // C - F = C * 9/5 + 32;
    // F - C = (F - 32) * 5/9;
    $('.btn-info').click(function(){
        const fTemp = (".localTemp" * 9) / 5 + 32;
        newF.html('localTemp');
    });
    $('.btn-success').click(function(){
        const newF = (".localTemp" - 32) * 5 / 9;
        newF.html('localTemp');
    })
}


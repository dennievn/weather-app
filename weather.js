if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getPosition);
} else {
    alert("Geolocation is not turned on or uncompatible with this browser.");
}

// pushing lat and lon into FFC's Weather API
function getPosition(position){
    const fccWeatherApi = " https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;

    // render data into html
    $.getJSON(fccWeatherApi, function(data){
        const temp = data.main.temp;
        const icon = data.weather[0].icon;
        const toggle = false;
        const tempC = Math.round(temp);
        const tempF = Math.round(temp*9/5 + 32); //formula

        $("img").attr({
            src:icon,
        });
        $(".localTemp").html(data.main.temp);
        $(".descriptions").html(data.weather[0].description);
        $(".city").html(data.name);
        $(".country").html(data.sys.country);
        
        // toggle button
        $(".btn").on("click", function(){
            toggle = !toggle;
            if(toggle){
                $("localTemp").html(tempF + "&deg;F");
            } else {
                $("localTemp").html(tempC + "&deg;C");
            }
        })
    })

}


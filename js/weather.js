console.log("The weather channel")

/*$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function (data) {
    console.log(data)
})

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function (data) {
    console.log(data.main.temp)
})*/
//------------------------------------------------------------------------


var boton = document.querySelector('button');

var inputValue = document.querySelector('input');

var ciudad = document.querySelector ('.cities');

var desc = document.querySelector('.weather-description');

var temp = document.querySelector('.temperature-description');

var weathericon = document.querySelector ('.wheater-icon');

var iconvar = data.weather[0];


boton.addEventListener('click', function (){

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=6d7b3330eb9f0be33d4d212352e645cb&units=metric&lang=es', function (data) {
        console.log(data.main.temp)
        $('h2').text(data.name);

        $(temp).text( Math.round(data.main.temp) +' ºC');

        /*weathericon.innerHTML = "http://openweathermap.org/img/w/" + iconvar + ".png 'alt='Icon depicting current weather.'>"*/

        $.each(data.weather, function (index, weather) {
            console.log(weather);
            $(desc).append('Clima ' + weather.description);
        });

    });

});






/*var ciudad = $('input').val();*/

/*var apiKey = '7f1efd91ab2891aac4059c5b0fbfdd72';

var qApi = encodeURI(ciudad);

var url = 'http://api.openweathermap.org/data/2.5/weather?q=${ciudad}}&appid=${apiKey}&units=metric&lang=es';

$(boton).click(function (){
    boton.addEventListener('click', function() {

        this.style.visibility= 'visible';
        console.log();
    });
});*/

/*
$(boton).click(function(){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data){
        console.log(data);
        $(".informacion").text(data.name + ' Temperatura de : ' + data.main.temp);

        $.each(data.weather, function(index,weather){
            console.log(weather);
            $(".informacion").append('El clima esta ' + weather.description);


                        $('h2').text('Temperatura ' + data.main.temp + 'ºC '+' la ciudad es ' + data.name );
        });
    });
});

*/
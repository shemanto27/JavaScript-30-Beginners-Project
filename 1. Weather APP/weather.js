const apiKey = 'd5757c464d1aed3a3d5cbafe849a267e';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


var searchBox = document.querySelector('.searchbar input');
var searchBtn = document.querySelector('.searchbar button');
var weatherIcon = document.querySelector('.weatherCondition');


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weatherReport').style.display = "none";
    }
    else{
        document.querySelector('.error').style.display = "none";
        
        var data = await response.json();
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = data.main.temp + '&deg;c';
        document.querySelector('.hum').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind_speed').innerHTML = data.wind.speed + 'km/h';

        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = 'images/clouds.png';
        }
        else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = 'images/clear.png';
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = 'images/drizzle.png';
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = 'images/rain.png';
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = 'images/mist.png';
        }
        else if(data.weather[0].main == 'Snow'){
            weatherIcon.src = 'images/snow.png';
        }

        document.querySelector('.weatherReport').style.display = "block";

    }
}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})
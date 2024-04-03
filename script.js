    const options =  {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '09c5c4476bmsh8d686d355b34d91p1789cdjsn8b1e5d661a5d',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const getWeather = (city) => {
        cityName.innerHTML = city;
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            humidity.innerHTML = response.humidity;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
        })
        .catch(err => console.log(err));
    }

document.querySelector("#button");
document.querySelector("#input");
button.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(input.value)
})

getWeather("Bihar");





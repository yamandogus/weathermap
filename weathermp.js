const apiKey = "82ef2751d3c0586d44aab31b7cad0626";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weaterIcon = document.querySelector(".weather-icon");


async function weatherData(city){
try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if(data.weather[0].main == "Clouds"){
        weaterIcon.src ="./images/clouds.png"
    }else if(data.weather[0].main == "Rain"){
        weaterIcon.src ="./images/rain.png"
    }else if(data.weather[0].main == "Clear"){
        weaterIcon.src ="./images/clear.png"
    }else if(data.weather[0].main == "Drizzle"){
        weaterIcon.src ="./images/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        weaterIcon.src ="./images/mist.png"
    }

} catch (error) {
    console.error('Error fetching weather data:', error);
}
}

searchBtn.addEventListener("click", ()=>{
    weatherData(searchBox.value);
    alert("test")
})


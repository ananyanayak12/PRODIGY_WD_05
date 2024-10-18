const apiKey = "ac5a92ce32b2f3229ef6a9767abc7fe9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".city-name");
const searchBtn = document.getElementById("but");
const weatherIcon = document.querySelector(".climate")

async function checkWeather(cityy) {
    const response = await fetch(apiUrl + cityy + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".place").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidi").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") { 
    weatherIcon.src = "clouds.jpg";
}
else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "clear.jpg";

}
else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "rain.jpg";

}
else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "drizzle.jpg";

}
else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "mist.jpg";

}
document.querySelector(".hidden").style.display = "block";

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})
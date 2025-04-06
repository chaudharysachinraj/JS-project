let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let API_key = "e532b5e0034a8e8672e3572f7b2aff81";

const data = async function (search) {
    try {
        let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}`);

        console.log(getData);

        let jsonData = await getData.json();
        console.log(jsonData);
        console.log(jsonData.name);

        city.innerHTML = jsonData.name;
        type.innerHTML = jsonData.weather[0].main;

        let celsius = Math.floor(jsonData.main.temp - 273.15);
        temp.innerHTML = celsius + "°C";
        // temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
    } catch (error) {
        city.innerHTML = "City not found";
        type.innerHTML = "-";
        temp.innerHTML = "-";
        console.error(error);
    }


    if (type.innerHTML == "Clouds") {
        image.src = "Image/Cloudy.png.png";
    } else if (type.innerHTML == "Clear") {
        image.src = "Image/Clear.png.png";
    } else if (type.innerHTML == "Rain") {
        image.src = "Image/Rainy.png.png";
    } else if (type.innerHTML == "Snow") {
        image.src = "Image/Snowy.png.png";
    } else if (type.innerHTML == "Thunderstorm") {
        image.src = "Image/Thunderstorm.png.png";
    } else if (type.innerHTML == "Mist") {
        image.src = "Image/Mist.png.png";
    } else if (type.innerHTML == "Haze") {
        image.src = "Image/Haze.png.png";
    } else if (type.innerHTML == "Fog") {
        image.src = "Image/Fog.png.png";
    } else if (type.innerHTML == "Smoke") {
        image.src = "Image/Smoke.png.png";
    } else if (type.innerHTML == "Drizzle") {
        image.src = "Image/Drizzle.png.png";
    } else if (type.innerHTML == "Dust") {
        image.src = "Image/Dust.png.png";
    } else if (type.innerHTML == "Sand") {
        image.src = "Image/Sandstrom.png.png";
    } else if (type.innerHTML == "Ash") {
        image.src = "Image/Ash.png.png";
    } else if (type.innerHTML == "Squall") {
        image.src = "Image/Squall.png.png";
    } else if (type.innerHTML == "Tornado") {
        image.src = "Image/Tornado.png.png";
    } else {
        image.src = "Error2.png"; // Default image if weather type is unknown
    }

    input.value = "";
}

function myFun() {
    search = input.value;
    data(search);

}

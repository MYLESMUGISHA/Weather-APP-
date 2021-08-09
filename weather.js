
// declare variables that we gonna use
const api = {
    key: "28fd15358cdecbc1a1dfef367e71acef",
    base: "https://api.openweathermap.org/data/2.5/"
}
let btn = document.querySelector(".btn");
let inputText = document.querySelector(".search-btn");
btn.addEventListener( "click", getInput);

//get input value

function getInput(e){
   e.preventDefault();
console.log(inputText.value)
getData(inputText.value)
}

//get Data

function getData() {
    fetch(`${api.base}weather?q=${inputText.value}&units=metric&appid=${api.key}`)
        .then(response => {
            return response.json();
        }).then(displayData);
}

//Display Data

 function displayData(response){
    console.log(response);
    // console.log(response.sys.country);
    // console.log(response.name);
    // console.log(response.main.temp);
    // console.log(response.weather[0].main);
    // console.log(response);
     let city = document.querySelector(".city");
    city.innerHTML = response.name +", " + response.sys.country;
    let weather = document.querySelector(".weather");
    weather.innerHTML ="Weather: "+ response.weather[0].main
    let temp = document.querySelector(".temp")
    temp.innerHTML="Temperature: " + response.main.temp + "°C "
    let wind = document.querySelector(".wind")
    wind.innerHTML = "Speed: " + response.wind.speed
    let humidity= document.querySelector(".humidity");
    humidity.innerHTML ="Humidity: " +  response.main.humidity + "°C"

    let weatherIcon= document.querySelector(".weather-icon")
    iconUrl= "http://openweathermap.org/img/w/"
    weatherIcon.src = iconUrl + response.weather[0].icon + ".png"
 }

//get Date



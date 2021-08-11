// declare variables that we gonna use
const api = {
    key: "28fd15358cdecbc1a1dfef367e71acef",
    base: "https://api.openweathermap.org/data/2.5/"
}

let btn = document.querySelector(".btn");
let emptyInputErrorMessage =  document.getElementById("emptyInputError"); 
let wrongInputErrorMessage = document.getElementById("wrongInputError");
let inputText = document.querySelector(".search-btn");

// Add event Listener to the button
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

 function displayData(response) {

    if (inputText.value === ""){

        emptyInputErrorMessage.style.display = "block";

    } else if (response.cod === "404") {
        wrongInputErrorMessage.style.display = "block";
    }
    else {
       
    let city = document.querySelector(".city");
    city.innerHTML = response.name +", " + response.sys.country;

    let weather = document.querySelector(".weather");
    weather.innerHTML ="Weather: "+ response.weather[0].main;

    let temp = document.querySelector(".temp");
    temp.innerHTML="Temperature: " + Math.round(response.main.temp) + "°C "; 

    let wind = document.querySelector(".wind");
    wind.innerHTML = "Speed: " + Math.round(response.wind.speed);
    console.log(response.wind.speed)

    let humidity = document.querySelector(".humidity");
    humidity.innerHTML = "Humidity: " +  Math.round(response.main.humidity) + "°C"; 

    let today = new Date();
    let date = document.querySelector(".date");
    date.innerHTML = displayDate(today);

    let weatherIcon= document.querySelector(".weather-icon");
    iconUrl= "http://openweathermap.org/img/w/";
    weatherIcon.src = iconUrl + response.weather[0].icon + ".png";

}

 }


//get Date
function displayDate(d){

    let months = ["Jan", "Feb", "Marc" ,"Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ]
    let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[d.getDay()];
    months = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

//    return`${day}, ${date}, ${months}, ${year}`
   return day + ", " + date + months + year; 
    
}


//To do list

// 1. Add functionality of error handling for (wrong city) done !
// 2. Refactor the code 
// 3. Responsiveness
//4. Final considerations

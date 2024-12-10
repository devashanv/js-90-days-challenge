//set API & it Key
// const api = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const btnSearch = document.getElementById("btn_search");
const city = document.querySelector(".location");
const weatherDate = document.querySelector(".date");
const weatherValue = document.querySelector(".value");
const weatherStatus = document.querySelector(".status");
const wheatherIcon = document.getElementById("img-icon");
const humidityValue = document.querySelector(".humidity-value");
const windSpeed = document.querySelector(".wind-speed");


const daysArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//get data from API
async function getWeather(userCity){
    const weatherInfo = await fetch(`${api}&q=${userCity}&appid=${apiKey}`);
    let data = await weatherInfo.json();

    console.log(data)

    //assign getting values to fields
    city.innerText = data.name;
    weatherValue.innerText = Math.trunc(data.main.temp);
    humidityValue.innerText = `${data.main.humidity}%`;
    weatherStatus.innerText = data.weather[0].description;
    windSpeed.innerText = `${data.wind.speed} km/h`;


    //set date 
    let date = new Date();
    let day = daysArr[date.getDay()];
    let month = monthsArr[date.getMonth()];
    let year = date.getFullYear()
    weatherDate.innerText = `${day} ${month}, ${year}`;


    document.querySelector(".details-area").style.display = "flex";
    document.querySelector(".footer").style.display = "flex";

    //chnage icon
    if (data.weather[0].main == "Clouds"){
        wheatherIcon.src = "assets/cloud.png";
    }
    else if (data.weather[0].main == "Clear"){
        wheatherIcon.src = "assets/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        wheatherIcon.src = "assets/rain.png";
    }
    else if (data.weather[0].main == "Mist"){
        wheatherIcon.src = "assets/mist.png";
    }
    else if (data.weather[0].main == "Snow"){
        wheatherIcon.src = "assets/snow.png";
    }
}

//call to function for wheather details
btnSearch.addEventListener("click", () => {
    const searchCity = document.getElementById("inp_city").value;
    getWeather(searchCity);
})

//set default onload
window.onload = () => {
    document.querySelector(".details-area").style.display = "none";
    document.querySelector(".footer").style.display = "none";
}

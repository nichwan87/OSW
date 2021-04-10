
//Sets top of page current date and time


const date = new Date();

const today = date.toDateString();

timer();

function timer(){
var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
var sec = currentTime.getSeconds()
if (minutes < 10){
    minutes = "0" + minutes
}
if (sec < 10){
    sec = "0" + sec
}
var t_str = hours + ":" + minutes + ":" + sec + " ";
if(hours > 11){
    t_str += "PM";
} else {
   t_str += "AM";
}
document.getElementById('now').innerHTML = today + ' @ ' + t_str;
 setTimeout(timer,1000);
}

//weatherSection
const apiKey = '110b8cbff5eb9ed03ea0acc26ca5ed4e';
const latitude = -37.810971;
const longitude = 144.938905;
const unit = 'metric';

var requestURL = "https://api.openweathermap.org/data/2.5/onecall";
requestURL += "?lat=" + latitude;
requestURL += "&lon=" + longitude;
requestURL += "&appid=" + apiKey;
requestURL += "&units=" + unit

fetch(requestURL)
.then(response => response.json())
.then(data => //console.log(data))
{
var dailyArray = data.daily;
var thirdDay = dailyArray[2];
var thirdDayTemp = thirdDay.temp;
var thirdDayMax = thirdDayTemp.max;
document.getElementById('imaTenki').innerHTML = thirdDayMax + '°c'
});

//displaying and hiding sections
const goButton = document.getElementById('goButton');
const results = document.getElementById('results');
const stats = document.getElementById('stats');
const weather = document.getElementById('weather');
const exit = document.getElementById('xBtn');
const hist = document.getElementById('hist');
const history = document.getElementById('history');
const pcSearch = document.getElementById('pcSearch');
const hide = document.getElementById('exhist');

goButton.addEventListener('click' , ()=> {
    stats.style.opacity = '30%';
    weather.style.opacity = '30%';
    results.style.display = 'block';
    results.style.zIndex = '100';
});

exit.addEventListener('click' , ()=> {
    stats.style.opacity = '93%';
    weather.style.opacity = '93%';
    results.style.display = 'none';
    results.style.zIndex = '0';
});

hist.addEventListener('click' , ()=> {
    hist.style.display = 'none';
    pcSearch.style.display = 'block';
    history.style.height = '12rem';
    hide.style.display = 'block';
});

hide.addEventListener('click' , ()=> {
    hist.style.display = 'block';
    pcSearch.style.display = 'none';
    history.style.height = '5rem';
    hide.style.display = 'none';
});
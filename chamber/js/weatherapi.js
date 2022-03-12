const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4014338&appid=d1b2b0b463523d6cf47a9c4e7eb0de0e&units=metric"

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp + "\xB0C";
    const iconsrc= `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}@2x.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#weather-desc').textContent = capitalize(desc + ".");
    document.querySelector('#speed').textContent = jsObject.wind.speed;
    let windChill = 35.74 + (0.6215 * jsObject.main.temp) - (35.75 * Math.pow(jsObject.wind.speed, 0.16)) + (0.4275 * jsObject.main.temp * Math.pow(jsObject.wind.speed, 0.16));
    windChill = Math.round(windChill);

    if(jsObject.main.temp <= 10 && jsObject.wind.speed > 4.8) {
    document.getElementById("chill").textContent = "Wind chill: " + windChill + "\xB0C";
    } else {
    document.getElementById("chill").textContent = "Wind chill: N/A";
    };
  });
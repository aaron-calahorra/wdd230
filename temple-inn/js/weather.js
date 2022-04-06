const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4014338&appid=d1b2b0b463523d6cf47a9c4e7eb0de0e&units=metric"

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    document.querySelector('#current-temp').textContent = Math.round(jsObject.main.temp) + "\xB0C";
    const iconsrc= `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}@2x.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#weather-desc').textContent = capitalize(desc);
    document.querySelector('#humidity').textContent = "Humidity: " + jsObject.main.humidity + "%";
    
});

const foreURL = "https://api.openweathermap.org/data/2.5/forecast?id=4015076&appid=d1b2b0b463523d6cf47a9c4e7eb0de0e&units=metric&cnt=24"

fetch(foreURL)
  .then((response2) => response2.json())
  .then((jsObject2) => {
    console.log(jsObject2);
    document.querySelector("#day1").textContent = new Date(jsObject2.list[6].dt_txt).toLocaleDateString("en-US", { month: "short", day: "numeric" });
    document.querySelector("#day2").textContent = new Date(jsObject2.list[14].dt_txt).toLocaleDateString("en-US", { month: "short", day: "numeric" });
    document.querySelector("#day3").textContent = new Date(jsObject2.list[22].dt_txt).toLocaleDateString("en-US", { month: "short", day: "numeric" });
    document.querySelector("#day1-temp").textContent = Math.round(jsObject2.list[6].main.temp) + "\xB0C";
    document.querySelector("#day2-temp").textContent = Math.round(jsObject2.list[14].main.temp) + "\xB0C";
    document.querySelector("#day3-temp").textContent = Math.round(jsObject2.list[22].main.temp) + "\xB0C";
    document.querySelector("#day1-desc").textContent = jsObject2.list[6].weather[0].main;
    document.querySelector("#day2-desc").textContent = jsObject2.list[14].weather[0].main;
    document.querySelector("#day3-desc").textContent = jsObject2.list[22].weather[0].main;
});

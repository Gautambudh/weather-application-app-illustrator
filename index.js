const input = document.querySelector(".form-control");
const search = document.querySelector("#search-btn");
const city_name = document.querySelector(".city-name");
const weather_conditions = document.querySelector(".weather-conditions");
const icon = document.querySelector(".icon");
// const weather_icon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temp")
const humidity = document.querySelector(".humidity")
const myApi = "e3c72e155a1fd4baf166e8c5cb59b066";
// const add_into_html = () => {
//   if (inputval == weather_Data.name)
// }



// input.addEventListener('keypress', (event) => {
//   if (event.code == 'Enter' && input.value != "") {
//     console.log("enter pressed");
//   }
// })
const weatherApi_Data =   async () => {
  const city = input.value;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApi}&units=metric`;
  try {
    const fetchedData = await fetch(api);
    const weather_Data = await fetchedData.json();
   
    // add_into_html();
    city_name.innerHTML = `Weather in ${weather_Data.name}`;
    weather_conditions.innerHTML = `${weather_Data.weather[0].main}`;
        icon.innerHTML =`<img src="http://openweathermap.org/img/w/${weather_Data.weather[0].icon}.png" alt="icon"></img>`;
        temperature.innerHTML = `${Math.floor(weather_Data.main.temp)} ℃`;
        humidity.innerHTML = `Humidity : ${weather_Data.main.humidity} %`;
        // console.log(weather_Data.main.temp); 
        // console.log(weather_Data.weather[0]);
      
  }
  catch (e) {
    // console.log(e);
    city_name.innerHTML = `Please enter a valid city`;
    weather_conditions.innerHTML = " ";
    temperature.innerHTML = " ";
    humidity.innerHTML = "";
    icon.innerHTML = "";
  }
  // console.log(api);
}
search.addEventListener('click', weatherApi_Data);
const forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=9.32&lon=-70.60&appid=a17be65d03f7c8ed2f5fee0a51f704c0"

const dashboard = document.querySelector("#w-dashboard")
const foreContainer = document.querySelector("#weather-cards")


function displayMainCard(data) {  

    const date = data.dt_txt.split(" ")[0];
    const desc = data.weather[0].description;
    const temp = data.main.temp;
    const wndspd = data.wind.speed;
    const humidity = data.main.humidity;
    const imgSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`

    const details = document.createElement("div");
    details.setAttribute("class","w-card");

    const nameCont = document.createElement("h3");
    const tempCont = document.createElement("h4");
    const wndCont = document.createElement("h4");
    const humCont = document.createElement("h4");

    const iconCon = document.createElement("div");
    iconCon.setAttribute("class","icon-container");

    const weatherIcon = document.createElement("img");
    const weatherDesc = document.createElement("h4")


    weatherIcon.setAttribute("src",imgSrc);
    weatherIcon.setAttribute("alt",`${desc} icon`);
    weatherIcon.setAttribute("width","1");
    weatherIcon.setAttribute("height","1");
    weatherIcon.setAttribute("loading","lazy");

    weatherDesc.textContent = desc;

    nameCont.textContent = `Valera ( ${date} )`;
    tempCont.innerHTML = `Temp: ${temp} &deg;F`;
    wndCont.textContent = `Wind Speed: ${wndspd} m/s`;
    humCont.textContent = `Humidity: ${humidity}%`;

    details.appendChild(tempCont);
    details.appendChild(wndCont);
    details.appendChild(humCont);

    iconCon.appendChild(nameCont);
    iconCon.appendChild(weatherIcon);
    iconCon.appendChild(weatherDesc);

    dashboard.appendChild(iconCon)
    dashboard.appendChild(details)

}

function displayForecast(data){

    const date = data.dt_txt.split(" ")[0];
    const desc = data.weather[0].description;
    const temp = data.main.temp;
    const wndspd = data.wind.speed;
    const humidity = data.main.humidity;
    const imgSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`

    const card = document.createElement("li");
    card.setAttribute("class","f-card");

    const dateCont = document.createElement("h3");
    const tempCont = document.createElement("h4");
    const wndCont = document.createElement("h4");
    const humCont = document.createElement("h4");
    const weatherIcon = document.createElement("img");

    weatherIcon.setAttribute("src",imgSrc);
    weatherIcon.setAttribute("alt",`${desc} icon`);
    weatherIcon.setAttribute("width","1");
    weatherIcon.setAttribute("height","1");
    weatherIcon.setAttribute("loading","lazy");

    dateCont.textContent = `( ${date} )`;
    tempCont.innerHTML = `Temp: ${temp} &deg;F`;
    wndCont.textContent = `Wind: ${wndspd} m/s`;
    humCont.textContent = `Humidity: ${humidity}%`;

    card.appendChild(dateCont);
    card.appendChild(weatherIcon);
    card.appendChild(tempCont);
    card.appendChild(wndCont);
    card.appendChild(humCont);

    foreContainer.appendChild(card)
}

async function getForecast(url) {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            const uniqueForecastDays = [];

            const fiveDaysForecast = data.list.filter(forecast => {
                const forecastDate = new Date(forecast.dt_txt).getDate();
                if (!uniqueForecastDays.includes(forecastDate)) {
                    return uniqueForecastDays.push(forecastDate);
                }
            });

            fiveDaysForecast.forEach((weatherItem, index) => {

                if (index === 0) {
                    displayMainCard(weatherItem)
                } else {
                    displayForecast(weatherItem)
                }
            });    
        }
    } catch (error) {
        console.log(error);
    }
}

getForecast(forecast);
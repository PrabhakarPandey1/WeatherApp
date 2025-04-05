const dayName = document.querySelector(".day h3");
const dayDate = document.querySelector(".day p");
const disLoc = document.querySelector(".loc p");
const tempeRature = document.querySelector(".temp");
const currentWeather = document.querySelector(".curr-we");
const prepTip = document.querySelector(".prep");
const seaLevel = document.querySelector(".sea-level");
const humid = document.querySelector(".humid");
const humidPercent = document.querySelector(".humid-percent");
const wetCard = document.querySelector(".card");
const cardImg = document.querySelector(".card-img");
const cardImgF = document.querySelector(".card-img-1");
const cardImgS = document.querySelector(".card-img-2");
const cardImgT = document.querySelector(".card-img-3");
const inputLoc = document.querySelector(".location");
const changeLoc = document.querySelector(".change");
const localInput = document.querySelector(".guilty");
const localBtn = document.querySelector(".local-btn");
const windSpeed = document.querySelector(".wind-speed");
const locName = document.querySelector(".loc-name");
const weatherIcon = document.querySelector(".weather");
const date = document.querySelector(".day-date");
const day = document.querySelector(".day-name");
const country = document.querySelector(".country");
const state = document.querySelector(".state");
const cardDay = document.querySelector(".para-1")
const cardDayF = document.querySelector(".para-1-F")
const cardDayS = document.querySelector(".para-1-S")
const cardDayT= document.querySelector(".para-1-T")
const cardCelcius = document.querySelector(".para-2")
const cardCelciusF = document.querySelector(".para-F")
const cardCelciusS = document.querySelector(".para-S")
const cardCelciusT = document.querySelector(".para-T")

let query = "gaya";

async function weatherApp(query) {
    let apiKey = "66a4dd205ee7790fe257bd6b6f429f27";
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${apiKey}&units=metric`

    try {
        let response = await fetch(api);

        if (response.ok) {
            let data = await response.json();
            console.log(data)

            const countryCode = (code) => {
                const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
                return regionNamesInEnglish.of(code);
            };

            locName.textContent = query;
            humidPercent.textContent = data.list[0].main.humidity + "%";
            tempeRature.innerHTML = data.list[0].main.temp + "&deg;c";
            windSpeed.textContent = data.list[0].wind.speed + "km/hr";
            seaLevel.textContent = data.list[0].main.sea_level + "m";
            currentWeather.textContent = data.list[0].weather[0].main;
            country.textContent = countryCode(data.city.country);


            //--card Days --
            cardDay.textContent =  data.list[9].dt_txt.split(" ")[0];
            cardDayF.textContent = data.list[18].dt_txt.split(" ")[0];
            cardDayS.textContent = data.list[27].dt_txt.split(" ")[0];
            cardDayT.textContent = data.list[36].dt_txt.split(" ")[0];
            

            //--card Celcius--
            cardCelcius.innerHTML = data.list[9].main.temp + "&deg;c";
            cardCelciusF.innerHTML = data.list[18].main.temp + "&deg;c";
            cardCelciusS.innerHTML = data.list[27].main.temp + "&deg;c";
            cardCelciusT.innerHTML = data.list[36].main.temp + "&deg;c";

            const dateObject = new Date();
            date.innerHTML = dateObject.toLocaleDateString();
            day.innerHTML = new Date().toLocaleString("en-US", { weekday: "long" });

            if (data.list[0].weather[0].main == "Clouds") weatherIcon.src = "./image/cloudy.png";
            else if (data.list[0].weather[0].main == "Clear") weatherIcon.src = "./image/clear.png";
            else if (data.list[0].weather[0].main == "Rain") weatherIcon.src = "./image/heavy-rain.png";
            else if (data.list[0].weather[0].main == "Drizzle") weatherIcon.src = "./image/drizzle.png";
            else if (data.list[0].weather[0].main == "Mist") weatherIcon.src = "./image/mist.png";
            else if (data.list[0].weather[0].main == "Haze") weatherIcon.src = "./image/hage.png";

            if (data.list[8].weather[0].main == "Clouds") cardImg.src = "./image/cloudy.png";
            else if (data.list[8].weather[0].main == "Clear") cardImg.src = "./image/clear.png";
            else if (data.list[8].weather[0].main == "Rain") cardImg.src = "./image/heavy-rain.png";
            else if (data.list[8].weather[0].main == "Drizzle") cardImg.src = "./image/drizzle.png";
            else if (data.list[8].weather[0].main == "Mist") cardImg.src = "./image/mist.png";
            else if (data.list[8].weather[0].main == "Haze") cardImg.src = "./image/hage.png";

            if (data.list[16].weather[0].main == "Clouds") cardImgF.src = "./image/cloudy.png";
            else if (data.list[16].weather[0].main == "Clear") cardImgF.src = "./image/clear.png";
            else if (data.list[16].weather[0].main == "Rain") cardImgF.src = "./image/heavy-rain.png";
            else if (data.list[16].weather[0].main == "Drizzle") cardImgF.src = "./image/drizzle.png";
            else if (data.list[16].weather[0].main == "Mist") cardImgF.src = "./image/mist.png";
            else if (data.list[16].weather[0].main == "Haze") cardImgF.src = "./image/hage.png";

            if (data.list[24].weather[0].main == "Clouds") cardImgS.src = "./image/cloudy.png";
            else if (data.list[24].weather[0].main == "Clear") cardImgS.src = "./image/clear.png";
            else if (data.list[24].weather[0].main == "Rain") cardImgS.src = "./image/heavy-rain.png";
            else if (data.list[24].weather[0].main == "Drizzle") cardImgS.src = "./image/drizzle.png";
            else if (data.list[24].weather[0].main == "Mist") cardImgS.src = "./image/mist.png";
            else if (data.list[24].weather[0].main == "Haze") cardImgS.src = "./image/hage.png";

            if (data.list[32].weather[0].main == "Clouds") cardImgT.src = "./image/cloudy.png";
            else if (data.list[32].weather[0].main == "Clear") cardImgT.src = "./image/clear.png";
            else if (data.list[32].weather[0].main == "Rain") cardImgT.src = "./image/heavy-rain.png";
            else if (data.list[32].weather[0].main == "Drizzle") cardImgT.src = "./image/drizzle.png";
            else if (data.list[32].weather[0].main == "Mist") cardImgT.src = "./image/mist.png";
            else if (data.list[32].weather[0].main == "Haze") cardImgT.src = "./image/hage.png";


        } else {
            alert("City not found!");
        }
    } catch (error) {
        alert("An error occurred while fetching the weather data.");
    }
}

weatherApp(query);

localBtn.addEventListener("click", (e) => {
    e.preventDefault();
    changeLoc.style.display = "none";
    query = localInput.value;
    weatherApp(query);
});

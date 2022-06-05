let apiKey = "b502d35db53f950ae8a47a49da2037e6";

//Fetching Through Click event
document.querySelector(".search-button").addEventListener("click", function () {
    let getCity = document.querySelector(".search-bar").value;
    // ////console.log(getCity);
    document.querySelector(".search-bar").value = "";
    document.querySelector(".search-bar").setAttribute("placeholder", "Search...");
    // ////console.log(getCity);
    // ////console.log(apiKey);
    let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${getCity}&units=metric&appid=${apiKey}`;

    ////console.log(url1);

    // Calling Weather Functions
    getWeather(url1);
})

//Fetching Through Click event
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        let getCity = document.querySelector(".search-bar").value;
        ////console.log(getCity);
        document.querySelector(".search-bar").value = "";
        document.querySelector(".search-bar").setAttribute("placeholder", "Search...");
        ////console.log(getCity);
        ////console.log(apiKey);
        let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${getCity}&units=metric&appid=${apiKey}`;

        ////console.log(url1);

        // Calling Weather Functions
        getWeather(url1);
    }
})

function getWeather(url1) {
    fetch(url1).then(response => response.json())
        .then((data) => {
            ////console.log(data);

            let city = document.querySelector(".city")
            city.textContent = `Weather in ${data.name}`;

            // let icon = document.querySelector(".icon");

            let icoon = data.weather[0].icon;
            ////console.log(icoon);
            document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${icoon}.png`;

            let desc = document.querySelector(".description");
            desc.textContent = `${data.weather[0].main}`;

            let desc2 = data.weather[0].description;
            ////console.log(desc2);

            let temp = document.querySelector(".temp");
            temp.textContent = `${data.main.temp}°C`;

            let humidity = document.querySelector(".humidity");
            humidity.textContent = `Humidity : ${data.main.humidity} %`;

            let wind = document.querySelector(".wind");
            wind.textContent = `Wind : ${data.wind.speed} Kmph`;

            // let longi = data.coord.lon;
            // let lati = data.coord.lat;

            // ////console.log(longi, lati);

            // let url2 = `https://timeapi.io/api/Time/current/coordinate?latitude=${lati}&longitude=${longi}`;
            // ////console.log(url2);

            // fetch(url2).then(response => response.json())
            //     .then((dat) => {
            //         ////console.log(dat);

            //         // curl - X 'GET' \
            //         // 'https://timeapi.io/api/Time/current/coordinate?latitude=23.4833&longitude=87.3167' \
            //         // -H 'accept: application/json'

            //     });

            if (icoon[2] == 'd') {
                if (desc2 == "clear sky") {
                    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?cs=srgb&dl=pexels-tahir-shaw-186980.jpg&fm=jpg')";
                }
                else if (desc2 == "few clouds") {
                    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/18635.jpg')";
                }
                else if (desc2 == "rain") {
                    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjBkYXl8ZW58MHx8MHx8&w=1000&q=80')";
                }
                else if (desc2 == "scattered clouds") {
                    document.body.style.backgroundImage = "url('https://c0.wallpaperflare.com/preview/680/207/744/skyscape-cloudscape-sky-clouds.jpg')";
                }
                else if (desc2 == "broken clouds") {
                    document.body.style.backgroundImage = "url('https://c0.wallpaperflare.com/preview/680/207/744/skyscape-cloudscape-sky-clouds.jpg')";
                }
                else if (desc2 == "shower rain") {
                    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjBkYXl8ZW58MHx8MHx8&w=1000&q=80')";
                }
                else if (desc2 == "thunderstorm") {
                    document.body.style.backgroundImage = "url('https://static01.nyt.com/images/2016/05/17/science/17tb-lightning2/17tb-lightning2-superJumbo.jpg')";
                }
                else if (desc2 == "snow") {
                    document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp9805898.jpg')";
                }
                else if (desc2 == "mist") {
                    document.body.style.backgroundImage = "url('https://w0.peakpx.com/wallpaper/952/947/HD-wallpaper-a-foggy-day-mystic-fog-landscape-mist.jpg')";
                }
                else if (desc2 == "haze") {
                    document.body.style.backgroundImage = "url('https://media-cldnry.s-nbcnews.com/image/upload/mpx/2704722219/2021_07/1626886385161_ott_now_nyc_air_quality_210721_1920x1080.jpg')";
                }
                else{
                    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?cs=srgb&dl=pexels-tahir-shaw-186980.jpg&fm=jpg')";
                }
            }
            else if (icoon[2] == 'n') {
                if (desc2 == "clear sky") {
                    document.body.style.backgroundImage = "url('https://free4kwallpapers.com/uploads/originals/2015/07/16/clear-night-sky-wallpaper.jpg')";
                }
                else if (desc2 == "few clouds") {
                    document.body.style.backgroundImage = "url('https://live.staticflickr.com/2936/14489008960_805be903f8_b.jpg')";
                }
                else if (desc2 == "rain") {
                    document.body.style.backgroundImage = "url('https://wallpaper.dog/large/10954285.jpg')";
                }
                else if (desc2 == "scattered clouds") {
                    document.body.style.backgroundImage = "url('https://live.staticflickr.com/2936/14489008960_805be903f8_b.jpg')";
                }
                else if (desc2 == "broken clouds") {
                    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/12/e9/43/12e94368f5b566aa5d1ae5358b10239a.jpg')";
                }
                else if (desc2 == "shower rain") {
                    document.body.style.backgroundImage = "url('https://wallpaper.dog/large/10954285.jpg')";
                }
                else if (desc2 == "thunderstorm") {
                    document.body.style.backgroundImage = "url('https://rtdjournal.com/wp-content/uploads/2021/06/toufik-tabikh-2wh869865gs-unsplash-scaled.jpg')";
                }
                else if (desc2 == "snow") {
                    document.body.style.backgroundImage = "url('https://p4.wallpaperbetter.com/wallpaper/572/493/255/cabin-nature-night-snow-wallpaper-preview.jpg')";
                }
                else if (desc2 == "mist") {
                    document.body.style.backgroundImage = "url('mist-night.jpg')";
                }
                else if (desc2 == "haze") {
                    document.body.style.backgroundImage = "url('https://c0.wallpaperflare.com/preview/497/72/902/city-night-cityscape-urban.jpg')";
                }
                else{
                    document.body.style.backgroundImage = "url('https://free4kwallpapers.com/uploads/originals/2015/07/16/clear-night-sky-wallpaper.jpg')";
                }
            }
        });
}

function dateAndTime(url2) {
    fetch(url2).then(response => response.json())
        .then((dat) => {
            ////console.log(1);
        });
}

let defaultUrl = `http://api.openweathermap.org/data/2.5/weather?q=Durgapur&units=metric&appid=32c612a4c1c744a7775b1473bd4ecc31`;

getWeather(defaultUrl);

setInterval(() => {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    //console.log(time, month, day, hour, minute, second);
    // console.log(year);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let newMonth = months[month];
    let newDay = weekDays[day];
    // console.log(newMonth);

    let newHour = 10;
    if(hour / 10 < 1){
        newHour = `0${hour}`;
    }

    let newMinute = 10;
    if(minute / 10 < 1){
        newMinute = `0${minute}`;
    }
    else{
        newMinute = `${minute}`;
    }

    let newSec = 10;
    if(second / 10 < 1){
        newSec = `0${second}`;
    } else{
        newSec = `${second}`;
    }

    let newTh = "th";
    if(date === 1){
        newTh = "st";
    } else if(date === 2){
        newTh = "nd";
    } else if(date === 3){
        newTh = "rd";
    } else{
        newTh = "th"
    }

    let newDate;
    if(date / 10 < 1){
        newDate = `0${date}`;
    } else{
        newDate = `${date}`;
    }
    
    

    let satTime = document.querySelector(".time");
    satTime.textContent = `${newHour}: ${newMinute}: ${newSec}`;

    let satDate = document.querySelector(".date");
    satDate.textContent = `${newDate}`;

    let satTh = document.querySelector(".th");
    satTh.textContent = `${newTh}`;

    let satMonth = document.querySelector(".month");
    satMonth.textContent = `${newMonth}`;

    let satYear = document.querySelector(".year");
    satYear.textContent = `${year}`;

    let satDay = document.querySelector(".day");
    satDay.textContent = `${newDay}`;



}, 1000);
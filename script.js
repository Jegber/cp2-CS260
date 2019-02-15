document.getElementById("weatherSubmit3hour").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
        return;
    console.log(value);


    const url2 = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ", US&units=imperial" + "&APPID=df68c7133a79ecfd42c1db2457caa38c";
    fetch(url2)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            let forecast = "";
            forecast += "<div class=\"card\">"
            forecast += "<h5 class=\"card-header\">3-Hour forecast for <b>" + json.name + "</b></h5>"
            forecast += "<div class=\"card-body\">"

            forecast += "<h2 class=\"card-title\">"
            forecast += json.main.temp + "&#x00B0;"
            forecast += '<img src="http://openweathermap.org/img/w/' + json.weather[0].icon + '.png"/>';
            forecast += "</h2>"

            forecast += "<h4 class=\"card-subtitle mb-3 text-muted\">" + moment(json.dt_txt).format('MMMM Do YYYY, h:mm a') + "</h4>"

            forecast += "<h4 class=\"card-subtitle mb-3 text-muted\">" + json.weather[0].description + "</h4>"

            forecast += "<h4 class=\"card-subtitle mb-3 text-muted\">Wind: " + json.wind.speed + "mph at " + json.wind.deg + " degrees</h4>"

            forecast += "<h4 class=\"card-subtitle mb-3 text-muted\">Humidity: " + json.main.humidity + "%</h4>"


            forecast += "</div>"
            forecast += "</div>"
            document.getElementById("forecastResults").innerHTML = forecast;
        });
});









document.getElementById("weatherSubmit5day").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
        return;
    console.log(value);


    const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=df68c7133a79ecfd42c1db2457caa38c";
    fetch(url2)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            let forecast = "";
            let numHours = 24 / 3;
            /*
            for (let i = 0; i < json.list.length; i++) {
                forecast += "<div class=\"card my-3\" style=\"width: 10rem;\">"
                forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';
                forecast += "</div>"
            }
            */
            forecast += "<div class=\"container\">"
            forecast += "<div class=\"card-deck\" id=\"forecastResults\">"

            for (let i = 0; i < json.list.length; i++) {
                forecast += "<div class=\"card my-3\" style=\"width: 10rem;\">"
                forecast += "<div class=\"card-body\">"

                forecast += "<h2 class=\"card-title\">"
                forecast += json.list[i].main.temp + "&#x00B0;"
                forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';
                forecast += "</h2>"

                forecast += "<h6 class=\"card-subtitle mb-3 text-muted\">" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm a') + "</h6>"

                forecast += "<h6 class=\"card-subtitle mb-2 text-muted\">" + json.list[i].weather[0].description + "</h6>"


                forecast += "</div>"
                forecast += "</div>"
            }
            forecast += "</div>"
            forecast += "</div>"
            document.getElementById("forecastResults").innerHTML = forecast;
        });
});

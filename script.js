document.getElementById("weatherSubmit5day").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
  return;
  console.log(value);
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url2 = proxyurl + "https://tastedive.com/api/similar?q=" + value + "&k=330529-JohnTDal-NRLT9GRD";
  fetch(url2)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
    let forecast = "";
  forecast += "<div class=\"container\">"
  forecast += "<div class=\"card-deck\" id=\"forecastResults\">"

  for (let i = 0; i < 18; i++) {
    forecast += "<div class=\"card my-3\" style=\"width: 10rem;\">"
    forecast += "<div class=\"card-body\">"

    forecast += "<h2 class=\"card-title\" style=\"word-wrap: normal;\">"
    forecast += json.Similar.Results[i].Name;
    console.log(json.Similar.Results[i].Name);
    forecast += "</h2>"

    forecast += "<h6 class=\"card-subtitle mb-3 text-muted\">" + "Type: " + json.Similar.Results[i].Type + "</h6>"

    forecast += "</div>"
    forecast += "</div>"
  }
  forecast += "</div>"
  forecast += "</div>"
  document.getElementById("forecastResults").innerHTML = forecast;
});
});

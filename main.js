var button = document.getElementById("result");
button.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  var city = document.getElementById("city").value;
  getWeather(city);
});
function getWeather(city) {
  var xhttp = new XMLHttpRequest();
  var metric = true ;
  var unit = metric ? " &#8451; " : " &#8457; " ;
  var metricQuery = metric ? "&units=metric" : "" ; 
  const api_key = 'a96bee9b8b5588e77dafc135903ab8f4';
  const base_url= 'api.openweathermap.org/data/2.5/weather';
  xhttp.onreadystatechange = function () {
    try {
      if (this.readyState == 4) {
        var result_container = document.getElementById("weather");
        var feels_container = document.querySelector("#feels");
        var raw_data = JSON.parse(this.response);
        console.log(raw_data);
        result_container.innerHTML = raw_data.main.temp + unit;
        feels_container.innerHTML = raw_data.main.feels_like + unit;
      }
    }
    catch (error) {
      result_container.innerHTML = "Non Existant";
    }
  };
  xhttp.open(
    "GET",
    `//${base_url}?q=${city}${metricQuery}&appid=${api_key}`,
    true
  );
  xhttp.send();
}

// api key: a96bee9b8b5588e77dafc135903ab8f4

// https://api.openweathermap.org/data/2.5/weather?q=Tunis&units=metric&appid=a96bee9b8b5588e77dafc135903ab8f4

// 

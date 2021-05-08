var button = document.getElementById("result");
button.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  var city = document.getElementById("city").value;
  getWeather(city);
});
function getWeather(city) {
  var xhttp = new XMLHttpRequest();
  const api_key = 'a96bee9b8b5588e77dafc135903ab8f4';
  const base_url= 'api.openweathermap.org/data/2.5/weather';
  xhttp.onreadystatechange = function () {
    try {
      if (this.readyState == 4) {
        var result_contaier = document.getElementById("weather");
        var raw_data = JSON.parse(this.response);
        result_contaier.innerHTML = raw_data.main.temp;
      }
    }
    catch (error) {
      result_contaier.innerHTML = "Non Existant";
    }
  };
  xhttp.open(
    "GET",
    `//${base_url}?q=${city}&units=metric&appid=${api_key}`,
    true
  );
  xhttp.send();
}

// api key: a96bee9b8b5588e77dafc135903ab8f4

// https://api.openweathermap.org/data/2.5/weather?q=Tunis&units=metric&appid=a96bee9b8b5588e77dafc135903ab8f4

// 

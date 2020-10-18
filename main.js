var button = document.getElementById("result");
button.addEventListener("click", function () {
  console.log("clicked");
  var city = document.getElementById("city").value;
  console.log(city);
  getWeather(city);
});
function getWeather(city) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var weather = document.getElementById("weather");
      var temp = JSON.parse(this.response);
      console.log(temp);

      weather.innerHTML = temp.current.temperature;
      if (temp.error.code == 615) {
        weather.innerHTML = "Non Existant";
      }
    }
  };
  xhttp.open(
    "GET",
    `//api.weatherstack.com/current?access_key=03a74986671c5f411100cfd9cc98b6d9&query=${city}`,
    true
  );
  xhttp.send();
}

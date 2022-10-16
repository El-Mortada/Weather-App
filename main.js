let userSearchInput = document.getElementById("userSearchInput");
let array = [];
async function getData(cairo) {
  let myResponse = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=c15916080195416ea8c103216221110&q=${cairo}&days=7&aqi=no&alerts=no`
  );

  let responseData = await myResponse.json();
  array.push(responseData.forecast.forecastday[0].hour[2].chance_of_rain);
  array.push(responseData.forecast.forecastday[0].hour[12].chance_of_rain);
  array.push(responseData.forecast.forecastday[0].hour[18].chance_of_rain);
  array.push(responseData.forecast.forecastday[0].hour[23].chance_of_rain);
  document.getElementById("p1").style.width = `${array[0]}%`;
  document.getElementById("p2").style.width = `${array[1]}%`;
  document.getElementById("p3").style.width = `${array[2]}%`;
  document.getElementById("p4").style.width = `${array[3]}%`;
  console.log(responseData.forecast.forecastday[1].hour[5].chance_of_rain);
  document.getElementById("townName").innerHTML = responseData.location.name;
  document.getElementById("degree").innerHTML =
    responseData.current.temp_c + "<sup>o</sup>" + "C";
  document.getElementById("degree1").innerHTML =
    responseData.current.temp_c + "<sup>o</sup>" + "C";
  document.getElementById("humid").innerHTML =
    responseData.current.humidity + "%";
  document.getElementById(
    "iconDegree"
  ).innerHTML = `<img src="${responseData.current.condition.icon} " alt=""></img>`;
  document.getElementById("minDegree").innerHTML =
    responseData.forecast.forecastday[0].day.mintemp_c + "<sup>o</sup>" + "C";
  document.getElementById("rainChance").innerHTML =
    responseData.forecast.forecastday[0].day.daily_chance_of_rain + "%";

  document.getElementById("degree2").innerHTML =
    responseData.forecast.forecastday[1].day.avgtemp_c + "<sup>o</sup>" + "C";
  document.getElementById("humid2").innerHTML =
    responseData.forecast.forecastday[1].day.avghumidity + "%";
  document.getElementById(
    "iconDegree2"
  ).innerHTML = `<img src="${responseData.forecast.forecastday[1].day.condition.icon} " alt=""></img>`;
  document.getElementById("minDegree2").innerHTML =
    responseData.forecast.forecastday[1].day.mintemp_c + "<sup>o</sup>" + "C";
  document.getElementById("rainChance2").innerHTML =
    responseData.forecast.forecastday[1].day.daily_chance_of_rain + "%";

  document.getElementById("degree3").innerHTML =
    responseData.forecast.forecastday[2].day.avgtemp_c + "<sup>o</sup>" + "C";
  document.getElementById("humid3").innerHTML =
    responseData.forecast.forecastday[2].day.avghumidity + "%";
  document.getElementById(
    "iconDegree3"
  ).innerHTML = `<img src="${responseData.forecast.forecastday[2].day.condition.icon} " alt=""></img>`;
  document.getElementById("minDegree3").innerHTML =
    responseData.forecast.forecastday[2].day.mintemp_c + "<sup>o</sup>" + "C";
  document.getElementById("rainChance3").innerHTML =
    responseData.forecast.forecastday[2].day.daily_chance_of_rain + "%";

  document.getElementById("degree4").innerHTML =
    responseData.forecast.forecastday[3].day.avgtemp_c + "<sup>o</sup>" + "C";
  document.getElementById("humid4").innerHTML =
    responseData.forecast.forecastday[3].day.avghumidity + "%";
  document.getElementById(
    "iconDegree4"
  ).innerHTML = `<img src="${responseData.forecast.forecastday[3].day.condition.icon} " alt=""></img>`;
  document.getElementById("minDegree4").innerHTML =
    responseData.forecast.forecastday[3].day.mintemp_c + "<sup>o</sup>" + "C";
  document.getElementById("rainChance4").innerHTML =
    responseData.forecast.forecastday[3].day.daily_chance_of_rain + "%";

  document.getElementById("degree5").innerHTML =
    responseData.forecast.forecastday[4].day.avgtemp_c + "<sup>o</sup>" + "C";
  document.getElementById("humid5").innerHTML =
    responseData.forecast.forecastday[4].day.avghumidity + "%";
  document.getElementById(
    "iconDegree5"
  ).innerHTML = `<img src="${responseData.forecast.forecastday[4].day.condition.icon} " alt=""></img>`;
  document.getElementById("minDegree5").innerHTML =
    responseData.forecast.forecastday[4].day.mintemp_c + "<sup>o</sup>" + "C";
  document.getElementById("rainChance5").innerHTML =
    responseData.forecast.forecastday[4].day.daily_chance_of_rain + "%";

  document.getElementById("degree6").innerHTML =
    responseData.forecast.forecastday[5].day.avgtemp_c + "<sup>o</sup>" + "C";
  document.getElementById("humid6").innerHTML =
    responseData.forecast.forecastday[5].day.avghumidity + "%";
  document.getElementById(
    "iconDegree6"
  ).innerHTML = `<img src="${responseData.forecast.forecastday[5].day.condition.icon} " alt=""></img>`;
  document.getElementById("minDegree6").innerHTML =
    responseData.forecast.forecastday[5].day.mintemp_c + "<sup>o</sup>" + "C";
  document.getElementById("rainChance6").innerHTML =
    responseData.forecast.forecastday[5].day.daily_chance_of_rain + "%";

  document.getElementById("degree7").innerHTML =
    responseData.forecast.forecastday[6].day.avgtemp_c + "<sup>o</sup>" + "C";
  document.getElementById("humid7").innerHTML =
    responseData.forecast.forecastday[6].day.avghumidity + "%";
  document.getElementById(
    "iconDegree7"
  ).innerHTML = `<img src="${responseData.forecast.forecastday[6].day.condition.icon} " alt=""></img>`;
  document.getElementById("minDegree7").innerHTML =
    responseData.forecast.forecastday[6].day.mintemp_c + "<sup>o</sup>" + "C";
  document.getElementById("rainChance7").innerHTML =
    responseData.forecast.forecastday[6].day.daily_chance_of_rain + "%";

  document.getElementById("minDegreeSec2").innerHTML =
    responseData.forecast.forecastday[1].day.mintemp_c;
  document.getElementById("secondStatus").innerHTML =
    responseData.forecast.forecastday[1].day.condition.text;
  document.getElementById("maxDegreeSec3").innerHTML =
    responseData.forecast.forecastday[2].day.maxtemp_c;
  document.getElementById("minDegreeSec3").innerHTML =
    responseData.forecast.forecastday[2].day.mintemp_c;
  document.getElementById("thirdStatus").innerHTML =
    responseData.forecast.forecastday[2].day.condition.text;
  document.getElementById(
    "icon2"
  ).innerHTML = `<img src="${responseData.forecast.forecastday[2].day.condition.icon}" alt=""></img>`;
}
getData("cairo");
function clear() {
  document.getElementById("p1").style.width = ``;
  document.getElementById("p2").style.width = ``;
  document.getElementById("p3").style.width = ``;
  document.getElementById("p4").style.width = ``;
  array = [];
}

let time = new Date();
let dd = time.getDate();
let mm = time.getMonth();
if (mm == 0) {
  document.getElementById("dateToday").innerHTML = dd + " Jan";
} else if (mm == 1) {
  document.getElementById("dateToday").innerHTML = dd + " Feb";
} else if (mm == 2) {
  document.getElementById("dateToday").innerHTML = dd + " Mar";
} else if (mm == 3) {
  document.getElementById("dateToday").innerHTML = dd + " Apr";
} else if (mm == 4) {
  document.getElementById("dateToday").innerHTML = dd + " May";
} else if (mm == 5) {
  document.getElementById("dateToday").innerHTML = dd + " Jun";
} else if (mm == 6) {
  document.getElementById("dateToday").innerHTML = dd + " Jul";
} else if (mm == 7) {
  document.getElementById("dateToday").innerHTML = dd + " Aug";
} else if (mm == 8) {
  document.getElementById("dateToday").innerHTML = dd + " Sep";
} else if (mm == 9) {
  document.getElementById("dateToday").innerHTML = dd + " Oct";
} else if (mm == 10) {
  document.getElementById("dateToday").innerHTML = dd + " Nov";
} else if (mm == 11) {
  document.getElementById("dateToday").innerHTML = dd + " Dec";
}

const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayNum = time.getDay();
let day = weekDay[dayNum];
console.log(day);
document.getElementById("dayName").innerHTML = day;
let tommorowDate = time.setDate(time.getDate() + 1);
let tommorowDateNum = time.getDay();
let tommorowDay = weekDay[tommorowDateNum];
document.getElementById("secDayName").innerHTML = tommorowDay;
let afterTommorowDate = time.setDate(time.getDate() + 1);
let afterTommorowDateNum = time.getDay();
let afterTommorowDay = weekDay[afterTommorowDateNum];
document.getElementById("thirdDayName").innerHTML = afterTommorowDay;
let day4 = time.setDate(time.getDate() + 1);
let day4Num = time.getDay();
let day4Day = weekDay[day4Num];
document.getElementById("fourthDayName").innerHTML = day4Day;
let day5 = time.setDate(time.getDate() + 1);
let day5Num = time.getDay();
let day5Day = weekDay[day5Num];
document.getElementById("fifthDayName").innerHTML = day5Day;
let day6 = time.setDate(time.getDate() + 1);
let day6Num = time.getDay();
let day6Day = weekDay[day6Num];
document.getElementById("sixthDayName").innerHTML = day6Day;
let day7 = time.setDate(time.getDate() + 1);
let day7Num = time.getDay();
let day7Day = weekDay[day7Num];
document.getElementById("seventhDayName").innerHTML = day7Day;

let clickBtn = document.getElementById("button");
let userCity = document.getElementById("userCity");
async function getImage(cairo) {
  let imgResponse = await fetch(
    `https://pixabay.com/api/?key=30613917-bfb129e0c369ac3a7fa00fa13&q=${cairo}&image_type=photo`
  );

  let imgData = await imgResponse.json();
  let cartona = `<div class="imgSec1 img offset-1">
  <img src="${imgData.hits[1].previewURL}" class="w-100 rounded-3" alt="">
  <div><p class="fw-bold">${imgData.hits[0].tags}</p></div>
</div>
`;
  document.getElementById("imgContainer").innerHTML += cartona;
  console.log(imgData);
}
clickBtn.addEventListener("click", function () {
  getImage(userCity.value);
  clear();
});
userCity.addEventListener("input", function () {
  clear();
});

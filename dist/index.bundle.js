(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

const getWeatherData = (location) => {
  return new Promise((resolve, reject) => {
    const apiKey = '8dbe756ea48f4c0da2395345241605';
    // const apiKey = '8dbe756ea48f4c0da2395345241605zzz';
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`,
      { mode: 'cors' },
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          reject(new Error(data.error.message));
        } else {
          resolve(data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

const processWeatherData = (data) => {
  return {
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    temp_c: data.current.temp_c,
    temp_f: data.current.temp_f,
  };
};

const showCurrentWeather = async (event) => {
  try {
    event.preventDefault();
    const location = locationInput.value;
    const data = await getWeatherData(location);
    const filteredData = processWeatherData(data);
    console.log(filteredData);
  } catch (err) {
    console.error(err);
  }
};

const button = document.querySelector('button');
button.addEventListener('click', showCurrentWeather);
const locationInput = document.getElementById('location');


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxPQUFPLEtBQUssU0FBUztBQUM3RSxRQUFRLGNBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIgYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFdlYXRoZXJEYXRhID0gKGxvY2F0aW9uKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgYXBpS2V5ID0gJzhkYmU3NTZlYTQ4ZjRjMGRhMjM5NTM0NTI0MTYwNSc7XG4gICAgLy8gY29uc3QgYXBpS2V5ID0gJzhkYmU3NTZlYTQ4ZjRjMGRhMjM5NTM0NTI0MTYwNXp6eic7XG4gICAgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2FwaUtleX0mcT0ke2xvY2F0aW9ufWAsXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9LFxuICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihkYXRhLmVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgcHJvY2Vzc1dlYXRoZXJEYXRhID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb25kaXRpb246IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICBpY29uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXG4gICAgdGVtcF9jOiBkYXRhLmN1cnJlbnQudGVtcF9jLFxuICAgIHRlbXBfZjogZGF0YS5jdXJyZW50LnRlbXBfZixcbiAgfTtcbn07XG5cbmNvbnN0IHNob3dDdXJyZW50V2VhdGhlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICB0cnkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvbklucHV0LnZhbHVlO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbik7XG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gcHJvY2Vzc1dlYXRoZXJEYXRhKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkRGF0YSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufTtcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Q3VycmVudFdlYXRoZXIpO1xuY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
import './style.css';

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
    location: data.location.name,
    region: data.location.region,
    country: data.location.country,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    temp_c: data.current.temp_c,
    temp_f: data.current.temp_f,
  };
};

const updateIcon = (data) => {
  const icon = document.createElement('img');
  const iconUrl = `https://${data.icon.substring(2)}`;
  icon.src = iconUrl;

  if (iconDiv.firstChild) {
    iconDiv.removeChild(iconDiv.firstChild);
  }

  iconDiv.appendChild(icon);
};

const updateInfo = (data) => {
  locationDiv.textContent = data.location;
  regionDiv.textContent = data.region;
  countryDiv.textContent = data.country;
  conditionDiv.textContent = data.condition;
  updateIcon(data);
  tempCDiv.textContent = `${data.temp_c} ℃`;
  tempFDiv.textContent = `${data.temp_f} ℉`;
};

const toggleLoadingMessage = () => {
  loadingMessage.classList.toggle('show-loading');
};

const showCurrentWeather = async (event) => {
  try {
    event.preventDefault();

    toggleLoadingMessage();
    const location = locationInput.value;
    const data = await getWeatherData(location);
    toggleLoadingMessage();
    const filteredData = processWeatherData(data);

    updateInfo(filteredData);
    // console.log(filteredData);
  } catch (err) {
    console.error(err);
  }
};

const locationInput = document.getElementById('location');
const button = document.querySelector('button');
button.addEventListener('click', showCurrentWeather);
const loadingMessage = document.getElementById('loading-message');

const locationDiv = document.getElementById('location');
const regionDiv = document.getElementById('region');
const countryDiv = document.getElementById('country');
const conditionDiv = document.getElementById('condition');
const iconDiv = document.getElementById('icon');
const tempCDiv = document.getElementById('temp-c');
const tempFDiv = document.getElementById('temp-f');

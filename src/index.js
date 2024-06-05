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

(async () => {
  try {
    const data = await getWeatherData('durban');
    const filteredData = processWeatherData(data);
    console.log(filteredData);
  } catch (err) {
    console.error(err);
  }
})();

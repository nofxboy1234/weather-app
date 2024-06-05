const getWeatherData = (location) => {
  return new Promise((resolve, reject) => {
    const apiKey = '8dbe756ea48f4c0da2395345241605';
    const p = fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`,
      { mode: 'cors' },
    );

    p.then((response) => {
      return response.json();
    }).then((data) => {
      resolve(data);
    });
  });
};

const processWeatherData = (data) => {
  console.log(data);
  return {
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    temp_c: data.current.temp_c,
    temp_f: data.current.temp_f,
  };
};

(async () => {
  const data = await getWeatherData('durban');
  const filteredData = processWeatherData(data);
  console.log(filteredData);
})();

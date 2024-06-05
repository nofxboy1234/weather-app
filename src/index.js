const getWeatherData = (location) => {
  const apiKey = '8dbe756ea48f4c0da2395345241605';
  const p = fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`,
    { mode: 'cors' },
  );
  p.then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data.current);
  });
};

getWeatherData('durban');

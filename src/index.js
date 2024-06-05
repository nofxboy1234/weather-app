const getWeatherData = (location) => {
  // const apiKey = '6654ca42d2499aca01507f539a69b74383c5c9d7';
  // const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=durban`;
  const p = fetch(
    'https://api.weatherapi.com/v1/current.json?key=8dbe756ea48f4c0da2395345241605&q=durban',
    { mode: 'cors' },
  );
  p.then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
  });
};

getWeatherData('Durban');

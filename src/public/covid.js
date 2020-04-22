const covidApi = 'https://corona.lmao.ninja/v2/countries/mex';

const getCovidInfo = async () => {
  await fetch(covidApi)
    .then((resp) => resp.json())
    .then((resp) => {
      let covidInfo = resp;
      $('#covidTotal').html(`${covidInfo.cases} (+${covidInfo.todayCases})`);
      $('#covidRecovered').html(covidInfo.recovered);
      $('#covidDeaths').html(`${covidInfo.deaths} (+${covidInfo.todayDeaths})`);
      console.log('covidInfo', covidInfo);
    })
    .finally(() => {
      console.log('End');
    });
};

getCovidInfo();

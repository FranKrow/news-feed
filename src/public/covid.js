const covidApi = 'https://corona.lmao.ninja/v2/countries/mex';

const getCovidInfo = async () => {
  await fetch(covidApi)
    .then((resp) => resp.json())
    .then((resp) => {
      let covidInfo = resp;
      nfObject = new Intl.NumberFormat('en-US');
      $('#covidTotal').html(
        `${nfObject.format(covidInfo.cases)} (+${nfObject.format(
          covidInfo.todayCases
        )})`
      );
      $('#covidRecovered').html(nfObject.format(covidInfo.recovered));
      $('#covidDeaths').html(
        `${nfObject.format(covidInfo.deaths)} (+${nfObject.format(
          covidInfo.todayDeaths
        )})`
      );
      console.log('covidInfo', covidInfo);
    })
    .finally(() => {
      console.log('End');
    });
};

getCovidInfo();

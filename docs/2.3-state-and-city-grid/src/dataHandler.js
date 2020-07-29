import dataParser from "./dataParser.js";

const getNumOfCities = (uf) => {
  const numOfCities = dataParser.getOneStateAndCities(uf).length;

  console.log("numero de cidades no estado do RS");
  console.log(numOfCities);

  return numOfCities;
};

//Retorna uma lista de estados com o total de cidades.
const getNumOfCitiesByStates = () => {
  const stateWithTotalCities = dataParser.getAllStates().map((state) => ({
    uf: state.Sigla,
    totalCities: getNumOfCities(state.Sigla),
  }));
  console.log(stateWithTotalCities);

  return stateWithTotalCities;
};

const getTop5MostCities = () => {
  const top5 = getNumOfCitiesByStates()
    .sort((a, b) => b.totalCities - a.totalCities)
    .slice(0, 5)
    .map((data) => `${data.uf} - ${data.totalCities}`);
  console.log("Top 5 most city by states:");
  console.log(top5);
};

const getTop5LessCities = () => {
  const less5 = getNumOfCitiesByStates()
    .sort((a, b) => a.totalCities - b.totalCities)
    .slice(0, 5)
    .map((data) => `${data.uf} - ${data.totalCities}`);
  console.log("Top 5 LESS city by states:");
  console.log(less5);
};

const getCityWithBiggestName = (uf) => {
  const cityWithBiggestName = dataParser
    .getOneStateAndCities(uf)
    .sort((a, b) => a.Nome.localeCompare(b.Nome))
    .sort((a, b) => b.Nome.length - a.Nome.length)[0];
  //console.log("Cidade com maior nome");
  //console.log(cityWithBiggestName);
  return cityWithBiggestName;
};

const getBiggestNameOfCity = () => {
  const biggestNames = dataParser
    .getAllStates()
    .map((state) => ({
      uf: state.Sigla,
      name: getCityWithBiggestName(state.Sigla).Nome,
    }))
    .map((city) => `${city.name} - ${city.uf}`)
    .sort()

  console.log("cidades com maiores nome por estados:");

  console.log(biggestNames);
};

const getCityWithShortestName = (uf) => {
  const citiesWithShortesName = dataParser
  .getOneStateAndCities(uf)
  .sort((a, b) => a.Nome.localeCompare(b.Nome))
  .sort((a, b) => a.Nome.length - b.Nome.length)[0];
  return citiesWithShortesName;
};

const getShortestNameCities = () => {
  const shortestNames = dataParser
    .getAllStates()
    .map((state) => ({
      uf: state.Sigla,
      name: getCityWithShortestName(state.Sigla).Nome,
    }))
    .map((city) => `${city.name} - ${city.uf}`)

  console.log("cidades com menores nome por estados:");

  console.log(shortestNames);
};

const getBiggestNameCity = () =>{
  const biggestNameCity = dataParser.getAllStates()
  .map((state) => ({
    uf: state.Sigla,
    name: getCityWithBiggestName(state.Sigla).Nome
  }))
  .sort((a, b) => a.name.localeCompare(b.name))
  .sort((a, b) => b.name.length - a.name.length);

  console.log('Cidade com maior nome:')
  console.log(biggestNameCity[0]);
}

const getShortestNameCity = () =>{
  const shortestNameCity = dataParser.getAllStates()
  .map((state) => ({
    uf: state.Sigla,
    name: getCityWithShortestName(state.Sigla).Nome
  }))
  .sort((a, b) => a.name.localeCompare(b.name))
  .sort((a, b) => a.name.length - b.name.length);

  console.log('Cidade com menor nome:')
  console.log(shortestNameCity[0]);
}

export default {
  generateFiles: dataParser.generateAllCitiesByStateFiles,
  getNumOfCities,
  getNumOfCitiesByStates,
  getTop5MostCities,
  getTop5LessCities,
  getBiggestNameOfCity,
  getShortestNameCities,
  getBiggestNameCity,
  getShortestNameCity
};

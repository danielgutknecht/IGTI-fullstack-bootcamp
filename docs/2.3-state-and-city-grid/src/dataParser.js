import fs from "fs";

const inputFolder = "./src/data/input";
const outputFolder = "./src/data/output";

const getFileData = (path) => {
  return JSON.parse(fs.readFileSync(path));
};

const generateAllCitiesByStateFiles = () => {
  const allStates = getAllStates();
  const allCities = getAllCities();

  allStates
    .map(processCitiesByStateFileData(allCities))
    .forEach(generateCitiesByStateFile);
};

const getAllStates = () => {
  return getFileData(`${inputFolder}/estados.json`);
};

const getAllCities = () => {
  return getFileData(`${inputFolder}/cidades.json`);
};

const getOneStateAndCities = (uf) => {
  const numOfCitiesByStates = getFileData(
    `${outputFolder}/${uf.toUpperCase()}.json`
  );
  return numOfCitiesByStates;
};

const processCitiesByStateFileData = (allCities) => (state) => ({
  filename: `${outputFolder}/${state.Sigla}.json`,
  data: JSON.stringify(allCities.filter((city) => city.Estado === state.ID)),
});

const generateCitiesByStateFile = ({ filename, data }) => {
  fs.mkdirSync(outputFolder, {
    recursive: true,
  });

  fs.writeFileSync(filename, data);
};

export default {
  generateAllCitiesByStateFiles,
  getOneStateAndCities,
  getAllStates,
};

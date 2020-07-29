/*
 *Estado da aplicação (state)
 */
let tabCountries = null;
let tabFavorites = null;

//Com let é possivel fazer array, com const não
let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormart = null;

window.addEventListener("load", () => {
  tabCountries = document.querySelector('#tab-countries');
  tabFavorites = document.querySelector('#tab-favorites');
  countCountries = document.querySelector('#count-countries');
  countFavorites = document.querySelector('#count-favorites');

  totalPopulationList = document.querySelector("#total-population-list");
  totalPopulationFavorites = document.querySelector(
    '#total-population-favorites'
  );

  numberFormat = Intl.NumberFormat('pt-BR');

  fetchCountries();
});

/*
function fetchCountries() {
  //const coutries = fetch('https://restcountries.eu/rest/v2/all');
  //console.log(coutries);

  //Uma forma
  //fetch("https://restcountries.eu/rest/v2/all")
    //.then((res) => res.json())
    //.then((json) => {
      //allCountries = json;
      //console.log(allCountries);
   // });
    */

async function fetchCountries() {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const json = await res.json();
  allCountries = json.map((country) => {
    // destructuring
    const { numericCode, translations, population, flag } = country;

    return {
      id: numericCode,
      name: translations.br,
      population: population,
      formattedPopulation: formatNumber(population),
      flag, // se o nome for igual ao objeto de destino, não é necessário escrever flag: flag
    };

    //Outra forma, antiga, sem o const
    //return{
    //      id: country.numericCode,
    //     name: country.translations.pt,
    //    population: country.population,
    //  flag: country.flag
    //};
  });

  render();
}

function render() {
  renderCountryList();
  renderFavorites();
  renderSummary();

  handleCountryButtons();
}

function renderCountryList() {
  let countriesHTML = '<div>';

  allCountries.forEach((country) => {
    //destruction
    const { name, flag, id, population, formattedPopulation } = country;

    //template literals
    const countryHTML = `
        <div class = "country">
            <div> 
                <a id="${id}" class="waves-effect waves-light btn">+</a>
            </div>
            <div>
                <img src="${flag}" alt="${name}"/>
            </div> 
            <div>
                <ul>
                    <li>${name}</li>
                    <li>${formattedPopulation}</li>
                <ul>
            </div>       
        </div>
        `;
    countriesHTML += countryHTML;
  });

  countriesHTML += "</div>"; //fechando a div
  tabCountries.innerHTML = countriesHTML;
}

function renderFavorites() {
  let favoritesHTML = "<div>";

  favoriteCountries.forEach((country) => {
    //destruction
    const { name, flag, id, population, formattedPopulation } = country;

    //template literals
    const favoriteCountryHTML = `
        <div class = "country">
            <div> 
              <a id = "${id}" class="waves-effect waves-light btn red darken-4">-</a>
            </div>
            <div>
              <img src="${flag}" alt="${name}"/>
            </div> 
            <div>
                <ul>
                    <li>${name}</li>
                    <li>${formattedPopulation}</li>
                <ul>
            </div>       
        </div>
        `;
    favoritesHTML += favoriteCountryHTML;
  });

  favoritesHTML += "</div>";
  tabFavorites.innerHTML = favoritesHTML;
}

function renderSummary() {
  countCountries.textContent = allCountries.length;
  countFavorites.textContent = favoriteCountries.length;

  const totalPopulation = allCountries.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);

  const totalFavorites = favoriteCountries.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);

  totalPopulationList.textContent = formatNumber(totalPopulation);  
  totalPopulationFavorites.textContent = formatNumber(totalFavorites);
}

function handleCountryButtons() {
  const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
  const favoriteButtons = Array.from(tabFavorites.querySelectorAll('.btn'));

  countryButtons.forEach((button) => {
    button.addEventListener('click', () => addToFavorites(button.id));
  });

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", () => removeFromFavorites(button.id));
  });
}

function addToFavorites(id) {
  //procura o país pelo id
  const countryToAdd = allCountries.find((country) => country.id === id);

  //Spread Operator, espalha os elemento no array, 
  favoriteCountries = [...favoriteCountries, countryToAdd];
  
  favoriteCountries.sort((a, b) => {;
    return a.name.localeCompare(b.name);
  });
  //console.log(favoriteCountries);

  //O filter é imutável, gera um novo vetor. Vai comparar o id dos países, e se for diferente vai manter na lista
  allCountries = allCountries.filter((country) => country.id !== id);
  //console.log(favoriteCountries.length);
  //console.log(allCountries.length);


  render();
}

function removeFromFavorites(id) {
  //procura o país pelo id na lista de favoritos
  const countryToRemove = favoriteCountries.find((country) => country.id === id);

  //Spread Operator, espalha os elemento no array, 
  //Espalha, voltando para lista original
  allCountries = [...allCountries, countryToRemove];
  
  allCountries.sort((a, b) => {;
    return a.name.localeCompare(b.name);
  });

  //O filter é imutável, gera um novo vetor. Vai comparar o id dos países, e se for diferente vai remover dos favoritos
  favoriteCountries = favoriteCountries.filter((country) => country.id !== id);


  render();
}


function formatNumber(number) {
  return numberFormat.format(number);
}
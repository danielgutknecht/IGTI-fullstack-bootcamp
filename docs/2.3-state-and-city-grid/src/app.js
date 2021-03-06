import dataHandler from './dataHandler.js';


/* 
1. Implementar um método que irá criar um arquivo JSON para cada estado 
representado no arquivo Estados.json, e o seu conteúdo será um array das cidades
 pertencentes aquele estado, de acordo com o arquivo Cidades.json. O nome do 
 arquivo deve ser o UF do estado, por exemplo: MG.json.
*/
dataHandler.generateFiles();

/* 
2. Criar um método que recebe como parâmetro o UF do estado, realize a leitura 
do arquivo JSON correspondente e retorne a quantidade de cidades daquele estado.
*/
dataHandler.getNumOfCities('rs');

/**
 * 3. Criar um método que imprima no console um array com o UF dos cinco estados que mais 
 * possuem cidades, seguidos da quantidade, em ordem decrescente. Utilize o método criado no 
 * tópico anterior. 
 * Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]
 */

 //dataHandler.getNumOfCitiesByStates();
 
 dataHandler.getTop5MostCities();

 /**
 * 4. Criar um método que imprima no console um array com o UF dos cinco estados que menos 
 * possuem cidades, seguidos da quantidade, em ordem decrescente. Utilize o método criado no 
 * tópico anterior. 
 * Exemplo de impressão: [“UF - 30”, “UF - 27”, “UF - 25”, “UF - 23”, “UF - 21”]
 */
dataHandler.getTop5LessCities();

/**
 * 5. Criar um método que imprima no console um array com a cidade de maior nome de cada estado, 
 * seguida de seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então 
 * retornar o primeiro. 
 * Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].
 */

 dataHandler.getBiggestNameOfCity();

/**
 * 6. Criar um método que imprima no console um array com a cidade de menor nome de cada estado, 
 * seguida de seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então 
 * retorne o primeiro. 
 * Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].
 */

 dataHandler.getShortestNameCities();

 /**
 * 7. Criar um método que imprima no console a cidade de maior nome entre todos os estados, 
 * seguido do seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então 
 * retornar o primeiro. 
 * Exemplo: “Nome da Cidade - UF".
 */
dataHandler.getBiggestNameCity();

/**
 * 8. Criar um método que imprima no console a cidade de menor nome entre todos os estados, 
 * seguido do seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então 
 * retornar o primeiro. 
 * Exemplo: “Nome da Cidade - UF".
 */
dataHandler.getShortestNameCity();

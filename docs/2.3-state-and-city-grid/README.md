# State And City Grid

## Instal and Run
1. Go to project folder
2. Run command in terminal to install packages`npm install`
3. Run application `npm start`

## Objectives
Create a Node js backend application for processing some information from states and cities files JSON.

## To exercise some concepts as:
* Node.js and
* Nodemon
* JavaScript methods
* Read and write files
* Template literals
* Map, reduce and filter
* Modules (import and export files)

## Features required
* Implement a method to create a new JSON file by each state with all cities from reference.Ex. RS.json
* Implement a function as parameter to read a state JSON file and return a total sum of cities.
* Implement a method to print in array a top 5 states with more cities. Ex [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]
* Implement a method to print in array a top 5 states with less cities.: [“UF - 30”, “UF - 27”, “UF - 25”, “UF - 23”, “UF - 21”]
* Implement a method to print in array a cities with biggest names by states. Ex. [“Name of city – UF”, “Name of City – UF”, ...].
* Implement a method to print in array a cities with small names by states. Ex. [“Name of city – UF”, “Name of City – UF”, ...].
* Implement a method to print a city with small name by state. Ex. Name of city - UF
* Implement a method to print a city with biggest name by state. Ex. Name of city - UF

## Attributes

| state |
| :--------| 
|Id (int)
|Sigla (string)
|Nome (string)

| city |
| :--------| 
|Id(int)
|Nome(string)
|Estado(int) foreign key (id) reference state

## Methods and functions
* generateFiles();
* getNumOfCities('rs');
* getTop5MostCities();
* getTop5LessCities();
* getBiggestNameOfCity();
* getShortestNameCities();
* getBiggestNameCity();
* getShortestNameCity();
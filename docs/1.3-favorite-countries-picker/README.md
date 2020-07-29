# Favorite Countries Picker

## Objectives
Create an user application to select favorites countries and add to list.

## To exercise some concepts as:
* [HTML5](https://html.spec.whatwg.org/multipage/)
  * Basic elementes (head, body), inputs, buttons, div, link etc...
  * Attributes (id, class, type, value)
* [CSS3](https://www.w3.org/TR/css3-roadmap/)
  * CSS manipulation
* [JavaScript 'Vanilla'](https://www.ecma-international.org/ecma-262/9.0/index.html)
  * DOM handling
  * QuerySelector document method usage
  * Event listener
  * Array list methods(map)
  * Template literals
  * Destructuring
  * Async/await
  * Function

## Features required
* User can click a button to add a favorite country on list.
* User can click a button to remove a country from favorite list.
* Fetch countries list from [restcountries.eu]('https://restcountries.eu/rest/v2/all')
* UI must show total number of countries.
* UI must show total number of favorite countries.
* UI must show sum total of population each country listed.
* UI must show sum total of population each countries selected on favorite list.
* UI must show total population of each country.
* Country names must be in portuguese (pt-BR).
* Number of population must be formated on portuguese (pt-BR).
* All Countries must be sort in alphabetically.

## Development Tips
* Get only necessary data from resource. Ex. (id, name, population, flag).
* Keep number country population formated.
* Render list after each operation.
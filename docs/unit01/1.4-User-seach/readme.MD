# User Search

## Objectives
Create an application that filters a given list of users by name and show statistics over the filtered data.

##To exercise some concepts as:
* [HTML5](https://html.spec.whatwg.org/multipage/)
  * Basic elementes (head, body), inputs, buttons, div, link etc...
  *  Attributes (id, class, type, value) 
* [CSS3](https://www.w3.org/TR/css3-roadmap/)
  * CSS manipulation
 [JavaScript 'Vanilla'](https://www.ecma-international.org/ecma-262/9.0/index.html)
  * DOM handling
  * QuerySelector document method usage
  * Event listener
  * Functions
  * Array methods
  * Template literals
  * Async/await
  * map,reduce, filter, sort


## Features required
* Fetch data from [randomuser.me](https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo)
* Load data in array
* Filter the array based on the user input
  * Filter user 'enter' input
  * Filter 'SEARCH' button input
  * Input text can't be empty in 'SEARCH', so button must be disable.
  * Put side-by-side to show the filter results
  * Left side container
      * List of users from data source list:
      * Photo
      * Name
      * Age
  * Right side container 
      * Filter name input statistics
      * Number of users male
      * Number of users female
      * Sum of ages
      * Age average

* Data to be mapped from the API
  * name: name.first + name.last
  * photo: picture.thumbnail
  * age: dob.age
  * gender
* Events to be listened:
  * 'load' on window
  * 'keyup' on input
  * 'click' on button

* Pre event all'keyup', every character typed will trigger the filter.
* User name is case sensitive on input text area, toLowerCase or toUpperCase. Filter a half inputs data from any part of name.
* Use innerHTML with HTML code and template literal to handle DOM document.

> have  you a better? UI, use [Materialize](https://materializecss.com) or [Bootstrap](https://getbootstrap.com)


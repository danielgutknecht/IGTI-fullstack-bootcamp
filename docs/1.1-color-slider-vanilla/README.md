# RGB Color Piker

## Objectives
Create an apllication to change intensity of color on range RGB color and produce a new one.

## To exercise some concepts as:
* [HTML5](https://html.spec.whatwg.org/multipage/)
  * Basic elementes head, body, inputs, buttons, div, link etc...
  *  Attributes (id, class, type, value) 
* [CSS3](https://www.w3.org/TR/css3-roadmap/)
  * CSS manipulation
* [JavaScript 'Vanilla'](https://www.ecma-international.org/ecma-262/9.0/index.html)
  * QuerySelector document method usage
  * Event Listener
  * Function 
* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## Features Required
* The application must have 3 types inputs with range buttons values from 0 to 255 for represent the intensity of red, green and blue color.
* A text box read-only must be show the current selected value.
* A new background color must be combined on ('div') container.
* The background color must be updated when any of the range inputs values is changed.

## Development Tips
* addEventListener 'load' is event to guarantee a page be completely loaded before running any JavaScript code.
* document.querySelector' is javascript method to handle of elements in HTML pages.

```javascript
  document.querySelector(
    '#color-box'
  ).style.backgroundColor = `rgb(${r},${g}, ${b})`;
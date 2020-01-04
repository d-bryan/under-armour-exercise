'use strict';

// constants and selectors for use in document
const fillContainer = document.getElementById("element--container");
const buttonContainer = document.getElementById("button-container");
const dataAttribute = fillContainer.getAttribute("data-number-of-elements");
const numElements = parseInt(dataAttribute,10);

/**
 * Creates and fills new elements with argument passed through
 * @param {Text} data - parameter to fill the paragraph tags with
 */
function createParagraphElements (data) {
  // loop to create paragraph elements
  for (let i = 0; i < numElements; i ++) {
    let newParagraph = document.createElement("p");
    fillContainer.append(newParagraph);
    newParagraph.innerHTML = data;
  }
}

/**
 * On click event that changes the inner elements of "element-container" div
 * @param {Click} event - click event
 */
function createElements(event) {

  // if the event target is a button
  if (event.target.tagName === "BUTTON") {

    // while there are children elements delete them before adding the new ones
    while (fillContainer.firstChild) {
      fillContainer.removeChild(fillContainer.firstChild);
    }

    // if event target is hello
    if (event.target.id === "hello") {

      // create the paragraph elements
      createParagraphElements(event.target.id);

      // if event target is goodbye
    } else if (event.target.id === "goodbye") {

      // create the paragraph elements
      createParagraphElements(event.target.id);

    } else {
      // if both have failed log an error to the console with the event
      console.error("There was an error with the event listener.", event);
    }
  }

}

// single event listener for both buttons
buttonContainer.addEventListener("click", createElements, false);


// Function to remove elements by class name
function removeElementsByClassName(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

// Function to remove elements by data attribute and class name
function removeElementsByDataAttributeAndClassName(dataAttribute, className) {
  const elements = document.querySelectorAll(`[${dataAttribute}].${className}`);
  elements.forEach(element => {
    element.parentNode.removeChild(element);
  });
}

// Function to remove elements by data attribute
function removeElementsByDataAttribute(dataAttribute) {
  const elements = document.querySelectorAll(`[${dataAttribute}]`);
  elements.forEach(element => {
    element.parentNode.removeChild(element);
  });
}

// Remove the elements with the specified class names and data attributes
removeElementsByClassName('game-sort-header-container');
removeElementsByDataAttributeAndClassName('data-testid="game-carousel"', 'game-carousel');
removeElementsByDataAttribute('data-testid="home-page-game-grid"');

// Additional console log to verify the script is running
console.log('Specified elements removed.');

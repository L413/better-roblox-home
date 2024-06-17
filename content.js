setTimeout(() => {
  // Function to remove the first element by class name
  function removeFirstElementByClassName(className) {
    const element = document.getElementsByClassName(className)[0];
    if (element) {
      element.parentNode.removeChild(element);
      console.log(`Removed first element with class name: ${className}`);
    } else {
      console.log(`No elements found with class name: ${className}`);
    }
  }

  // Function to remove the first element by data attribute and class name
  function removeFirstElementByDataAttributeAndClassName(dataAttribute, className) {
    const element = document.querySelector(`[${dataAttribute}].${className}`);
    if (element) {
      element.parentNode.removeChild(element);
      console.log(`Removed first element with ${dataAttribute} and class name: ${className}`);
    } else {
      console.log(`No elements found with ${dataAttribute} and class name: ${className}`);
    }
  }

  // Function to remove the first element by data attribute
  function removeFirstElementByDataAttribute(dataAttribute) {
    const element = document.querySelector(`[${dataAttribute}]`);
    if (element) {
      element.parentNode.removeChild(element);
      console.log(`Removed first element with ${dataAttribute}`);
    } else {
      console.log(`No elements found with ${dataAttribute}`);
    }
  }

  // Remove the first elements with the specified class names and data attributes
  removeFirstElementByClassName('game-sort-header-container');
  removeFirstElementByDataAttributeAndClassName('data-testid="game-carousel"', 'game-carousel');
  removeFirstElementByDataAttribute('data-testid="home-page-game-grid"');

  // Additional console log to verify the script is running
  console.log('Script executed after 1 second: specified elements removed.');
}, 1000); // 1000 milliseconds = 1 second

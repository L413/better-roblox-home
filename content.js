async function fetchHTML() {
  try {
    const response = await fetch('https://moored-mousy-muse.glitch.me');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const robloxGames = await response.text();
    console.log(robloxGames);
    return robloxGames;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

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

// Function to create and insert the new HTML content
function addFavoritesSection() {
    // Create the new elements
    const newDiv1 = document.createElement('div');
    newDiv1.className = 'game-sort-header-container';
    
    const containerHeaderDiv = document.createElement('div');
    containerHeaderDiv.className = 'container-header';
    
    const headerH2 = document.createElement('h2');
    const headerLink = document.createElement('a');
    headerLink.textContent = 'Goofy Ahh Friend Games';
    
    headerH2.appendChild(headerLink);
    containerHeaderDiv.appendChild(headerH2);
    newDiv1.appendChild(containerHeaderDiv);
    
    const newDiv2 = document.createElement('div');
    newDiv2.className = 'game-carousel expand-home-content-disabled';
    newDiv2.style.overflowX = "auto";
    newDiv2.style.overflowY = "hidden";
    newDiv2.style.whiteSpace = "nowrap";
    fetchHTML().then(robloxGames => {
         newDiv2.innerHTML = robloxGames;
    });
    
    // Get the reference to the friend-carousel-container div
    const friendCarouselContainer = document.querySelector('.friend-carousel-container');
    
    if (friendCarouselContainer) {
        // Get the parent element (place-list) to insert the new elements
        const placeList = document.getElementById('place-list');
        
        if (placeList) {
            // Insert the new elements after the friend-carousel-container
            friendCarouselContainer.insertAdjacentElement('afterend', newDiv1);
            newDiv1.insertAdjacentElement('afterend', newDiv2);
        } else {
            console.error('Element with id "place-list" not found.');
        }
    } else {
        console.error('Element with class "friend-carousel-container" not found.');
    }
}

// Call the function to add the new section
addFavoritesSection();


  // Additional console log to verify the script is running
  console.log('Script executed after 1 second: specified elements removed.');
}, 1000); // 1000 milliseconds = 1 second

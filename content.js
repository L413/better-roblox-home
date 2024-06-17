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
    newDiv2.setAttribute('data-testid', 'game-carousel');
    newDiv2.innerHTML = `<div class="grid-item-container game-card-container" data-testid="game-tile"><a class="game-card-link" href="https://www.roblox.com/games/286090429/Arsenal?gameSetTypeId=100000003&amp;homePageSessionInfo=1ed2ab21-8fb7-4654-b14e-a0bdb4b3eb42&amp;isAd=false&amp;numberOfLoadedTiles=6&amp;page=homePage&amp;placeId=286090429&amp;playContext=homePage&amp;position=1&amp;sortPos=3&amp;universeId=111958650" tabindex="0" aria-hidden="false" id="111958650"><span class="thumbnail-2d-container game-card-thumb-container"><img class="" src="https://tr.rbxcdn.com/cec26b2f816a082dbf196fa9e716098e/150/150/Image/Webp" alt="Arsenal" title="Arsenal"></span><div class="game-card-name game-name-title" title="Arsenal">Arsenal</div><div class="game-card-info" data-testid="game-tile-stats"></div></a></div><div class="grid-item-container game-card-container" data-testid="game-tile"><a class="game-card-link" href="https://www.roblox.com/games/537413528/Build-A-Boat-For-Treasure?gameSetTypeId=100000003&amp;homePageSessionInfo=5ddf8c73-4a86-497e-8460-d64436089c82&amp;isAd=false&amp;numberOfLoadedTiles=6&amp;page=homePage&amp;placeId=537413528&amp;playContext=homePage&amp;position=0&amp;sortPos=3&amp;universeId=210851291" tabindex="0" aria-hidden="false" id="210851291"><span class="thumbnail-2d-container game-card-thumb-container"><img class="" src="https://tr.rbxcdn.com/d7157dfa30242a5172aaa9cd821e2570/150/150/Image/Webp" alt="Build A Boat For Treasure" title="Build A Boat For Treasure"></span><div class="game-card-name game-name-title" title="Build A Boat For Treasure">Build A Boat For Treasure</div><div class="game-card-info" data-testid="game-tile-stats"></div></a></div><div class="grid-item-container game-card-container" data-testid="game-tile"><a class="game-card-link" href="https://www.roblox.com/games/2768379856/3008-2-73?gameSetTypeId=100000003&amp;homePageSessionInfo=5ddf8c73-4a86-497e-8460-d64436089c82&amp;isAd=false&amp;numberOfLoadedTiles=52&amp;page=sortDetailPageHome&amp;placeId=2768379856&amp;position=7&amp;universeId=1000233041" tabindex="0" aria-hidden="false" id="1000233041"><span class="thumbnail-2d-container game-card-thumb-container"><img class="" src="https://tr.rbxcdn.com/9e770340182118e35042c60cb52a6fc4/150/150/Image/Webp" alt="3008" title="3008"></span><div class="game-card-name game-name-title" title="3008">3008</div><div class="game-card-info" data-testid="game-tile-stats"></div></a></div><div class="grid-item-container game-card-container" data-testid="game-tile"><a class="game-card-link" href="https://www.roblox.com/games/6516141723/DOORS?gameSetTypeId=100000003&amp;homePageSessionInfo=5ddf8c73-4a86-497e-8460-d64436089c82&amp;isAd=false&amp;numberOfLoadedTiles=52&amp;page=sortDetailPageHome&amp;placeId=6516141723&amp;position=51&amp;universeId=2440500124" tabindex="0" aria-hidden="false" id="2440500124"><span class="thumbnail-2d-container game-card-thumb-container"><img class="" src="https://tr.rbxcdn.com/2c993df62e2303f8c4c761477bd4a872/150/150/Image/Webp" alt="DOORS 👁️" title="DOORS 👁️"></span><div class="game-card-name game-name-title" title="DOORS 👁️">DOORS 👁️</div><div class="game-card-info" data-testid="game-tile-stats"></div></a></div>

<div class="grid-item-container game-card-container" data-testid="game-tile"><a class="game-card-link" href="roblox-studio://1+launchmode/:edit+task:EditPlace+placeId:0" tabindex="0" aria-hidden="false" id="2440500124"><span class="thumbnail-2d-container game-card-thumb-container"><img class="" src="https://i.ibb.co/r6dxfRx/robolx-strrudio.png" alt="Roblox Studio" title="Roblox Studio"></span><div class="game-card-name game-name-title" title="Roblox Studio">Roblox Studio</div><div class="game-card-info" data-testid="game-tile-stats"></div></a></div>`
    
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

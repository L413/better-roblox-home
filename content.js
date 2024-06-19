function fetchId() {
  // Find the element with the specified class
  const element = document.querySelector(
    `.text-link.dynamic-overflow-container`
  );

  // Check if the element exists and has an href attribute
  if (element && element.href) {
    return element.href;
  } else {
    console.error(
      "Element with the specified class not found or it does not have an href attribute."
    );
    return null;
  }
}

async function fetchHTML() {
  try {
    const response = await fetch("https://moored-mousy-muse.glitch.me");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const robloxGames = await response.text();
    return robloxGames;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

async function fetchStudio() {
  try {
    const response = await fetch(
      "https://moored-mousy-muse.glitch.me/studio.html"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const studioCode = await response.text();
    return studioCode;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

async function fetchFavorites() {
  try {
    const response = await fetch(fetchId());
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const favorites = await response.text();
    return favorites;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
var targetUrl = "https://www.roblox.com/games/12133572587/roblox-studio";
var currentUrl = window.location.href;

function runMyFunction() {
  console.log("URL matches. Running my function...");
  fetchStudio().then((studioCode) => {
    document.querySelector(".content").innerHTML = studioCode;
  });
}

if (currentUrl === targetUrl) {
  runMyFunction();
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
  function removeFirstElementByDataAttributeAndClassName(
    dataAttribute,
    className
  ) {
    const element = document.querySelector(`[${dataAttribute}].${className}`);
    if (element) {
      element.parentNode.removeChild(element);
      console.log(
        `Removed first element with ${dataAttribute} and class name: ${className}`
      );
    } else {
      console.log(
        `No elements found with ${dataAttribute} and class name: ${className}`
      );
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
  removeFirstElementByClassName("game-sort-header-container");
  removeFirstElementByDataAttributeAndClassName(
    'data-testid="game-carousel"',
    "game-carousel"
  );
  removeFirstElementByDataAttribute('data-testid="home-page-game-grid"');

  // Function to create and insert the new HTML content
  function addFriendGames() {
    // Create the new elements
    const newDiv1 = document.createElement("div");
    newDiv1.className = "game-sort-header-container";

    const containerHeaderDiv = document.createElement("div");
    containerHeaderDiv.className = "container-header";

    const headerH2 = document.createElement("h2");
    const headerLink = document.createElement("a");
    headerLink.textContent = "Goofy Ahh Friend Games";

    headerH2.appendChild(headerLink);
    containerHeaderDiv.appendChild(headerH2);
    newDiv1.appendChild(containerHeaderDiv);

    const newDiv2 = document.createElement("div");
    newDiv2.className = "game-carousel expand-home-content-disabled";
    newDiv2.style.overflowX = "auto";
    newDiv2.style.overflowY = "hidden";
    newDiv2.style.whiteSpace = "nowrap";
    fetchHTML().then((robloxGames) => {
      newDiv2.innerHTML = robloxGames;
    });

    // Get the reference to the friend-carousel-container div
    const friendCarouselContainer = document.querySelector(
      ".friend-carousel-container"
    );

    if (friendCarouselContainer) {
      // Get the parent element (place-list) to insert the new elements
      const placeList = document.getElementById("place-list");

      if (placeList) {
        // Insert the new elements after the friend-carousel-container
        friendCarouselContainer.insertAdjacentElement("afterend", newDiv1);
        newDiv1.insertAdjacentElement("afterend", newDiv2);
      } else {
        console.error('Element with id "place-list" not found.');
      }
    } else {
      console.error(
        'Element with class "friend-carousel-container" not found.'
      );
    }
  }

  function addFavorites() {
    const elements = document.querySelectorAll(
      ".game-carousel.expand-home-content-disabled"
    );

    // Create the span element
    const span = document.createElement("span");
    fetchFavorites().then((code) => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(code, "text/html");
      const uptCode = doc.querySelector(
        ".container-list.favorite-games-container"
      );
      uptCode.querySelector(".container-header").firstElementChild.innerText =
        "Favorites";
      // Get the original list of game cards
      const originalList = uptCode.querySelector(".hlist.game-cards");

      // Create the new carousel container
      const newCarouselContainer = document.createElement("div");
      newCarouselContainer.setAttribute("data-testid", "game-carousel");
      newCarouselContainer.className =
        "game-carousel expand-home-content-disabled";

      // Iterate through each list item and reformat it
      originalList
        .querySelectorAll(".list-item.game-card.game-tile")
        .forEach((item) => {
          const newItem = document.createElement("div");
          newItem.className = "grid-item-container game-card-container";
          newItem.setAttribute("data-testid", "game-tile");

          const link = item.querySelector(".game-card-link");
          const newLink = document.createElement("a");
          newLink.className = "game-card-link";
          newLink.href = link.href;
          newLink.tabIndex = 0;
          newLink.ariaHidden = false;
          newLink.id = link.href.split("=")[1].split("&")[0]; // Extract PlaceId as id

          const thumbContainer = link.querySelector(
            ".game-card-thumb-container"
          );
          const newThumbContainer = document.createElement("span");
          newThumbContainer.className =
            "thumbnail-2d-container game-card-thumb-container";

          const img = thumbContainer.querySelector("img");
          const newImg = document.createElement("img");
          newImg.src = img.src;
          newImg.alt = img.alt;
          newImg.title = img.alt;

          newThumbContainer.appendChild(newImg);
          newLink.appendChild(newThumbContainer);

          const gameName = link.querySelector(".game-card-name");
          const newGameName = document.createElement("div");
          newGameName.className = "game-card-name game-name-title";
          newGameName.title = gameName.title;
          newGameName.textContent = gameName.textContent;

          newLink.appendChild(newGameName);

          const gameInfo = link.querySelector(".game-card-info");
          const newGameInfo = document.createElement("div");
          newGameInfo.className = "game-card-info";
          newGameInfo.setAttribute("data-testid", "game-tile-stats");

          gameInfo.querySelectorAll(".info-label").forEach((label) => {
            const newLabel = document.createElement("span");
            newLabel.className = label.className;
            newLabel.textContent = label.textContent;
            newGameInfo.appendChild(newLabel);
          });

          newLink.appendChild(newGameInfo);
          newItem.appendChild(newLink);
          newCarouselContainer.appendChild(newItem);
        });

      // Replace the old list with the new carousel
      originalList.parentNode.replaceChild(newCarouselContainer, originalList);

      span.appendChild(uptCode.querySelector(".container-header"));
      span.appendChild(
        uptCode.querySelector(".game-carousel.expand-home-content-disabled")
      );
    });

    // Get the second element
    const secondElement = elements[1];

    secondElement.insertAdjacentElement("afterend", span);
  }

  // Call the function to add the new section
  fetchId();
  addFriendGames();
  addFavorites();

  // Additional console log to verify the script is running
  console.log("Script executed after 1 second: specified elements removed.");
}, 1000);

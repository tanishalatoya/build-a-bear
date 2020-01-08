var saveButton = document.querySelector('#save-button');
var backgroundContainer = document.querySelector('.backgrounds');
var allClothingOptions = document.querySelector('.all-clothing-options');
var allGarments = [];
var hatImages = document.querySelectorAll('.hat-img');
var hatContainer = document.querySelector('.hats');
var accessoriesImages = document.querySelectorAll('.accessories-img')
var accessoriesContainer = document.querySelector('.accessories');
var clothesImages = document.querySelectorAll('.clothing-img');
var clothesContainer = document.querySelector('.clothes');
var backgroundImages = document.querySelectorAll('.background-img');
var backgroundsContainer = document.querySelector('.backgrounds');
var titleInput = document.querySelector('input');
var savedOutfitsContainer = document.querySelector('.saved-outfits-container');
var allOutfitCards;


window.addEventListener('load', createNewOutfitInstance);
saveButton.addEventListener('click', saveOutfit);
backgroundContainer.addEventListener('click', selectBackground);
allClothingOptions.addEventListener('click', selectGarment);
hatContainer.addEventListener('click', clickedHatButtons);
hatContainer.addEventListener('click', toggleHats);
accessoriesContainer.addEventListener('click', clickedAccessoriesButtons);
accessoriesContainer.addEventListener('click', toggleAccessories);
clothesContainer.addEventListener('click', clickedClothesButtons);
clothesContainer.addEventListener('click', toggleClothes);
backgroundsContainer.addEventListener('click', clickedBackgroundsButtons);
backgroundsContainer.addEventListener('click', toggleBackgrounds);
titleInput.addEventListener('input', toggleSaveBtn);
savedOutfitsContainer.addEventListener('click', removeOutfitCard);
savedOutfitsContainer.addEventListener('click', redressBear);
savedOutfitsContainer.addEventListener('click', reapplyBackground);

function createNewOutfitInstance() {
  allOutfitCards = [];
  var storedOutfitCards = JSON.parse(localStorage.getItem("savedOutfit"));
  for (var i = 0; i < storedOutfitCards.length; i++) {
    var retrievedOutfit = new Outfit(storedOutfitCards[i].title, storedOutfitCards[i].background , storedOutfitCards[i].id, storedOutfitCards[i].garments);
    createSavedOutfitCard(retrievedOutfit);
    allOutfitCards.push(retrievedOutfit);
    console.log(allOutfitCards);
  }
  toggleSaveBtn()
}

function saveOutfit() {
  var background = localStorage.getItem('selectedBackground')
  var uniqueId = generateId()
  var garments = JSON.parse(localStorage.getItem('selectGarments'));
  var savedOutfit = new Outfit(titleInput.value, background , uniqueId, garments);
  createSavedOutfitCard(savedOutfit);
  allOutfitCards.push(savedOutfit);
  var stringifiedOutfitCards = JSON.stringify(allOutfitCards);
  localStorage.setItem("savedOutfit", stringifiedOutfitCards);
}

function clearBackgroundAndGarments() {
  localStorage.removeItem("selectedBackground")
  localStorage.removeItem("selectGarments")
}

function createSavedOutfitCard(outfitInfo) {
  savedOutfitsContainer.innerHTML +=
    `<div id="${outfitInfo.id}">
      <p>${outfitInfo.title}</p>
      <button type="button" name="button"><img data-id="${outfitInfo.id}" src="./assets/cancel.svg" alt="close icon"></button>
    </div>`
  clearBackgroundAndGarments()
  saveButton.disabled = true;
  titleInput.value = "";
  // saveButton.setAttribute("id", "save-button");
  undressBear();
}

function toggleSaveBtn() {
  if (!titleInput.value || titleInput.value === "Name this outfit") {
    saveButton.disabled = true;
  } else {
    saveButton.disabled = false;
    // saveButton.removeAttribute("id")
  }
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function selectBackground(event) {
  var selectedBackground = event.target.id
  localStorage.setItem('selectedBackground', selectedBackground);
}

function selectGarment(event) {
  var hatButtons = document.querySelectorAll('.hats');
  var clothesButtons = document.querySelectorAll('.clothes')
  var accessoriesButtons = document.querySelectorAll('.accessories')

  for (var i = 0; i < hatButtons.length; i++) {
    if (event.target.parentElement.className === 'hats') {
      allGarments[0] = event.target.id
    }
  }
  for (var i = 0; i < clothesButtons.length; i++) {
    if (event.target.parentElement.className === 'clothes') {
      allGarments[1] = event.target.id
    }
  }
  for (var i = 0; i < accessoriesButtons.length; i++) {
    if (event.target.parentElement.className === 'accessories') {
      allGarments[2] = event.target.id
    }
  }

  var stringifiedGarments = JSON.stringify(allGarments)
  localStorage.setItem('selectGarments', stringifiedGarments);
}

function clickedHatButtons() {
  var buttons = document.querySelectorAll('.hats > button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('button-clicked');
    if (buttons[i] === event.target) {
    event.target.classList.toggle('button-clicked');
    }
  }
}

function clickedClothesButtons() {
  var buttons = document.querySelectorAll('.clothes > button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('button-clicked');
    if (buttons[i] === event.target) {
    event.target.classList.toggle('button-clicked');
    }
  }
}
function clickedAccessoriesButtons() {
  var buttons = document.querySelectorAll('.accessories > button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('button-clicked');
    if (buttons[i] === event.target) {
    event.target.classList.toggle('button-clicked');
    }
  }
}
function clickedBackgroundsButtons() {
  var buttons = document.querySelectorAll('.backgrounds > button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('button-clicked');
    if (buttons[i] === event.target) {
    event.target.classList.toggle('button-clicked');
    }
  }
}

function addHatGarments() {
  removeHats()
  var allHats = document.querySelector(`#${event.target.dataset.id}`);
  allHats.classList.toggle('hidden');
  event.target.dataset.active = 'true';
}

function removeHats() {
  for (var i = 0; i < hatImages.length; i++) {
    hatImages[i].classList.add('hidden');
    hatImages[i].classList.add('false');
  }
}

function toggleHats() {
  if (event.target.dataset.active === 'true') {
    removeHats()
    event.target.dataset.active = 'false'
  } else {
    removeHats()
    addHatGarments();
  }
}

function addAccessoriesGarments() {
  removeAccessories()
  var allAccessories = document.querySelector(`#${event.target.dataset.id}`);
  allAccessories.classList.toggle('hidden');
  event.target.dataset.active = 'true';
}

function removeAccessories() {
  for (var i = 0; i < accessoriesImages.length; i++) {
    accessoriesImages[i].classList.add('hidden');
    accessoriesImages[i].classList.add('false');
  }
}

function toggleAccessories() {
  if (event.target.dataset.active === 'true') {
    removeAccessories()
    event.target.dataset.active = 'false'
  } else {
    removeAccessories()
    addAccessoriesGarments();
  }
}

function addClothesGarments() {
  removeClothes()
  var allClothes = document.querySelector(`#${event.target.dataset.id}`);
  allClothes.classList.toggle('hidden');
  event.target.dataset.active = 'true';
}

function removeClothes() {
  for (var i = 0; i < clothesImages.length; i++) {
    clothesImages[i].classList.add('hidden');
    clothesImages[i].classList.add('false');
  }
}

function toggleClothes() {
  if (event.target.dataset.active === 'true') {
    removeClothes()
    event.target.dataset.active = 'false'
  } else {
    removeClothes()
    addClothesGarments();
  }
}

function addBackgrounds() {
  removeBackgrouds()
  var allBackgrounds = document.querySelector(`#${event.target.dataset.id}`);
  allBackgrounds.classList.toggle('hidden');
  event.target.dataset.active = 'true';
}

function removeBackgrouds() {
  for (var i = 0; i < backgroundImages.length; i++) {
    backgroundImages[i].classList.add('hidden');
    backgroundImages[i].classList.add('false');
  }
}

function toggleBackgrounds() {
  if (event.target.dataset.active === 'true') {
    removeBackgrouds()
    event.target.dataset.active = 'false'
  } else {
    removeBackgrouds()
    addBackgrounds();
  }
}

function undressBear() {
  var allImages = document.querySelectorAll('img')
  for (var i = 1; i < 15; i++) {
    allImages[i].classList.add('hidden');
  }
}

function removeOutfitCard(event) {

  for (var i = 0; i < allOutfitCards.length; i++) {
    // console.log(allOutfitCards[i].background);
    if (event.target.dataset.id === allOutfitCards[i].id) {
      allOutfitCards.splice(i, 1);
      event.target.parentElement.parentElement.remove();
    }
  }

  var updatedStringifiedOutfitCards = JSON.stringify(allOutfitCards);
  localStorage.setItem("savedOutfit", updatedStringifiedOutfitCards);
}

function redressBear() {
  undressBear();
  unclickGarmentButtons();

  for (var i = 0; i < allOutfitCards.length; i++) {
    if (allOutfitCards[i].id === event.target.parentElement.id || allOutfitCards[i].id === event.target.id) {
      console.log(allOutfitCards[i].garments[0]);
      if (allOutfitCards[i].garments[0]) {
        removeHats();
        var readdHat = document.getElementById(`${allOutfitCards[i].garments[0]}-img`);
        var hatButton = document.getElementById(`${allOutfitCards[i].garments[0]}`);
        readdHat.classList.toggle('hidden');
        hatButton.classList.toggle('button-clicked');
      } else {
        removeHats();
      }
      if (allOutfitCards[i].garments[1]) {
        removeClothes();
        var readdClothes = document.getElementById(`${allOutfitCards[i].garments[1]}-img`);
        var clothesButton = document.getElementById(`${allOutfitCards[i].garments[1]}`);
        readdClothes.classList.toggle('hidden');
        clothesButton.classList.toggle('button-clicked');
      } else {
        removeClothes();
      }
      if (allOutfitCards[i].garments[2]) {
        removeAccessories();
        var readdAccessories = document.getElementById(`${allOutfitCards[i].garments[2]}-img`);
        var accessoriesButton = document.getElementById(`${allOutfitCards[i].garments[2]}`);
        readdAccessories.classList.toggle('hidden');
        accessoriesButton.classList.toggle('button-clicked');
      } else {
        removeAccessories();
      }
    }
    updateInput()
  }
}

function unclickGarmentButtons() {
  var hatButtons = document.querySelectorAll('.hats > button');
  var clothesButtons = document.querySelectorAll('.clothes > button');
  var accessoriesButtons = document.querySelectorAll('.accessories > button');
    for (var i = 0; i < hatButtons.length; i++) {
      hatButtons[i].classList.remove('button-clicked');
    };
    for (var i = 0; i < clothesButtons.length; i++) {
      clothesButtons[i].classList.remove('button-clicked');
    };
    for (var i = 0; i < accessoriesButtons.length; i++) {
      accessoriesButtons[i].classList.remove('button-clicked');
    };
}

function reapplyBackground() {
  unclickBackgroundButtons()
  for (var i = 0; i < allOutfitCards.length; i++) {
    if (allOutfitCards[i].id === event.target.parentElement.id || allOutfitCards[i].id === event.target.id) {
      if (allOutfitCards[i].background) {
        console.log(allOutfitCards[i].background);
        removeBackgrouds()
        var readdBackground = document.getElementById(`${allOutfitCards[i].background}-img`);
        var backgroundButton = document.getElementById(`${allOutfitCards[i].background}`);
        readdBackground.classList.toggle('hidden');
        backgroundButton.classList.toggle('button-clicked');
      } else {
        removeBackgrouds();
      }
    }
  }
}

function unclickBackgroundButtons() {
  var backgroundButtons = document.querySelectorAll('.backgrounds > button');
  for (var i = 0; i < backgroundButtons.length; i++) {
    backgroundButtons[i].classList.remove('button-clicked');
  }
}

function updateInput() {
  for (var i = 0; i < allOutfitCards.length; i++) {
    if (allOutfitCards[i].id === event.target.parentElement.id || allOutfitCards[i].id === event.target.id) {
      titleInput.value = allOutfitCards[i].title
    }
  }

}

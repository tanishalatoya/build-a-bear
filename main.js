var saveButton = document.querySelector('#save-button');
var backgroundContainer = document.querySelector('.backgrounds');
var allClothingOptions = document.querySelector('.all-clothing-options');
var allGarments = [];
var hatImages = document.querySelectorAll('.hat-img');
var hatContainer = document.querySelector('.hats');
var accessoriesImages = document.querySelectorAll('.accessories-img')
var accessoriesContainer = document.querySelector('.accessories');
var clothesImages = document.querySelectorAll('.clothes-img');
var clothesContainer = document.querySelector('.clothes');
var backgroundImages = document.querySelectorAll('.background-img');
var backgroundsContainer = document.querySelector('.backgrounds');

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
saveButton.addEventListener('click', createSavedOutfitCard);



function createNewOutfitInstance() {
  var outfit = new Outfit('none', 'none', 1);
}

function saveOutfit() {
  var titleInput = document.querySelector('input');
  var background = localStorage.getItem('selectedBackground')
  var uniqueId = generateId()
  var garments = JSON.parse(localStorage.getItem('selectGarments'));
  var savedOutfit = new Outfit(titleInput.value, background , uniqueId, garments)

  return savedOutfit;
}

function createSavedOutfitCard(outfitInfo) {
  var savedOutfitsContainer = document.querySelector('.saved-outfits-container');
  var outfitInfo = saveOutfit();

  savedOutfitsContainer.innerHTML +=
    `<div>
      <p>${outfitInfo.title}</p>
      <button id=${outfitInfo.id}type="button" name="button"><img src="./assets/cancel.svg" alt="close icon"></button>
    </div>`
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

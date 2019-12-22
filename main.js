var saveButton = document.querySelector('#save-button');
var backgroundContainer = document.querySelector('.backgrounds');
var allClothingOptions = document.querySelector('.all-clothing-options');
var allGarments = [];
var hatContainer = document.querySelector('.hats');

var accessoriesContainer = document.querySelector('.accessories');

window.addEventListener('load', createNewOutfitInstance);
saveButton.addEventListener('click', saveOutfit);
backgroundContainer.addEventListener('click', selectBackground);
allClothingOptions.addEventListener('click', selectGarment);
allClothingOptions.addEventListener('click', clickedGarmentButtons);
// allClothingOptions.addEventListener('click', dressBear);
hatContainer.addEventListener('click', addHatGarments);
accessoriesContainer.addEventListener('click', addAccessoriesGarments);


function createNewOutfitInstance() {
  var outfit = new Outfit('none', 'none', 1);
}

function saveOutfit() {
  var titleInput = document.querySelector('input');
  var background = localStorage.getItem('selectedBackground')
  var uniqueId = generateId()
  var garments = JSON.parse(localStorage.getItem('selectGarments'));
  var savedOutfit = new Outfit(titleInput.value, background , uniqueId, garments)
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

function clickedGarmentButtons() {
  var buttons = document.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('button-clicked');
    if (buttons[i] === event.target) {
    event.target.classList.toggle('button-clicked');

      // event.target.classList.toggle('hidden');
    }
  }
}

function addHatGarments() {
  var allHats = document.querySelector(`#${event.target.dataset.id}`);
  var hatImages = document.querySelectorAll('.hat-img')
  console.log(event.target.dataset.id, event.target.id);
  for (var i = 0; i < hatImages.length; i++) {
    if (event.target === hatImages[i]) {
      hatImages[i].classList.add('hidden');
      console.log(hatImages[0], hatImages[1], hatImages[2], hatImages[3]);
    } else {
      allHats.classList.remove('hidden');
    }
  }
}


function addAccessoriesGarments() {
  var allAccessories = document.querySelector(`#${event.target.dataset.id}`);
  var accessoriesImages = document.querySelectorAll('.accessories-img');

  for (var i = 0; i < accessoriesImages.length; i++) {
    accessoriesImages[i].classList.add('hidden');
    allAccessories.classList.remove('hidden');
  }
}

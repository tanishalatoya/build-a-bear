var saveButton = document.querySelector('#save-button');
var backgroundContainer = document.querySelector('.backgrounds');
var allClothingOptions = document.querySelector('.all-clothing-options');
var allGarments = [];


window.addEventListener('load', createNewOutfitInstance);
saveButton.addEventListener('click', saveOutfit);
backgroundContainer.addEventListener('click', selectBackground);
allClothingOptions.addEventListener('click', selectGarment);
allClothingOptions.addEventListener('click', clickedGarmentButtons);

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
  for (var i = 0; i < buttons.length; i++)  {
    if (buttons[i] === event.target) {
      console.log('yes');
      event.target.classList.toggleAdd functionality('button-clicked');
    }
  }
  // console.log(buttons);
}

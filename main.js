var saveButton = document.querySelector('#save-button');
var backgroundContainer = document.querySelector('.backgrounds');
var allClothingOptions = document.querySelector('.all-clothing-options');
// var clothesContainer = document.querySelector('.clothes');
// var accessoriesContainer = document.querySelector('.accessories');
var allGarments = [];


window.addEventListener('load', createNewOutfitInstance)
saveButton.addEventListener('click', saveOutfit)
backgroundContainer.addEventListener('click', selectBackground)
allClothingOptions.addEventListener('click', selectGarment)
// clothesContainer.addEventListener('click', selectClothes)
// accessoriesContainer.addEventListener('click', selectAccessories)


function createNewOutfitInstance() {
  var outfit = new Outfit('none', 'none', 1);
}

// add event listener to the save button
// create an new instance on click of save button
// in new instance generate title, background, id, update garments
// create a variable that will pull in the title from the input
// create another variable thats going to hold onto the background that user selects
// create a function that generates a unique id
// variable thats going to hold on to the selected garments that is an array

function saveOutfit() {
  var titleInput = document.querySelector('input');
  var background = localStorage.getItem('selectedBackground')
  var uniqueId = generateId()
  var savedOutfit = new Outfit(titleInput.value, background , uniqueId, 'garments')
  console.log({savedOutfit})
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function selectBackground(event) {
  console.log(event)
  var selectedBackground = event.target.id
  localStorage.setItem('selectedBackground', selectedBackground);
}

// click on garment buttons
// have that information passed into an array
// transfer that array into save outfits function


// function selectHats(event) {
//   var selectedHat = event.target.id
//   if (allGarments[0]) {
//     allGarments[0] = selectedHat
//   } else {
//     allGarments[0] = selectedHat
//   }
//   console.log(allGarments);
// }
//
// function selectClothes(event) {
//   var selectedClothes = event.target.id
//   if (allGarments[1]) {
//     allGarments[1] = selectedClothes
//   } else {
//     allGarments[1] = selectedClothes
//   }
//   console.log(allGarments);
// }
//
// function selectAccessories(event) {
//   var selectedAccessories = event.target.id
//   if (allGarments[2]) {
//     allGarments[2] = selectedAccessories
//   } else {
//     allGarments[2] = selectedAccessories
//   }
//   console.log(allGarments);
// }

function selectGarment(event) {
  console.log(event);
  var hatButtons = document.querySelectorAll('.hats');
  for (var i = 0; i < hatButtons.length; i++) {
    if (event.target.parentElement.className === 'hats') {
      allGarments[0] = event.target.id
    }
  }
  console.log({allGarments});
}

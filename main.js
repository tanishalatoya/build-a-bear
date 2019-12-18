var saveButton = document.querySelector('#save-button');


window.addEventListener('load', createNewOutfitInstance)
saveButton.addEventListener('click', saveOutfit)

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
  // console.log({titleInput})
  var uniqueId = generateId()
  var savedOutfit = new Outfit(titleInput.value, 'background' , uniqueId, 'garments')
  //
  console.log({savedOutfit})
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

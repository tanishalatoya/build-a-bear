var saveButton = document.querySelector('#save-button');

window.addEventListener('load', createNewOutfitInstance)
saveButton.addEventListener('click', saveOutfit)

function createNewOutfitInstance() {
  var outfit = new Outfit('none', 'none', 1);
}

// add event listener to the save button
// create an new instance on click of save button
// in new instance generate title, background, id, update garments
function saveOutfit() {
  var savedOutfit = new Outfit(title, background, id, garments)
}

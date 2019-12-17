var saveButton = document.querySelector('#save-button')

saveButton.addEventListener('click', saveOutfit)

function saveOutfit() {
  var outfitInput = document.querySelector('input');
  var outfit = new Outfit(outfitInput.value)
  console.log(outfit);
}

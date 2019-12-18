//when the page loads, a new naked bear to show up --> event listener on window
//needs to be new instance of the object

window.addEventListener('load', createNewOutfitInstance)

function createNewOutfitInstance() {

  var outfit = new Outfit('none', 'none', 1);
}

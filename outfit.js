class Outfit {
  constructor(title, background, id) {
    this.title = title;
    this.garments = [];
    this.background = background || 'none';
    this.id = id || 'anything';
  }

  addGarment(attire) {
    this.garments.push(attire)
  }

  removeGarment() {
    // itterate over the array with a for loop and find the index of the id of the item we are trying to remove. And then remove it.
    for (var i = 0; i < this.garments.length; i++) {
      if(this.garments[i] === this.id) {
        this.garments.splice(i, 1);
      }
    }
  }
}

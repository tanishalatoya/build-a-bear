class Outfit {
  constructor(title, background, id, garments) {
    this.title = title || 'title';
    this.garments = garments || [];
    this.background = background;
    this.id = id || undefined;
  }
}

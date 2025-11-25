export default class Pokemon {
    constructor(apiData) {
      this.id = apiData.id;
      this.name = apiData.name;
      this.image =
        apiData.sprites.other["official-artwork"].front_default;
      this.types = apiData.types.map(t => t.type.name);
    }
  }
  
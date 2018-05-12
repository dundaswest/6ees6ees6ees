class ForagerBee extends Bee {
  constructor() {
    super()
    this.age = 10,
    this.canFly = true,
    this.treasureChest = [],
    this.job = 'find pollen'
  }
  forage() {this.treasureChest.push(this.treasure)};

};

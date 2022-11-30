export default class Dice {
  public _value: number[];

  constructor(value: number[]) {
    this._value = value;
  }

  /**
   * Permet de lancer un dé random
   */
  get roll(): number {
    let value = Math.floor(Math.random() * 6) + 1;
    return value;
  }
}

const dice: Dice = new Dice([1, 2, 3, 4, 5, 6]);

console.log(dice.roll);

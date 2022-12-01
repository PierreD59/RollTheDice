export default class Dice {
  public _value: number;

  constructor(value: number) {
    this._value = value;
  }

  /**
   * Permet de lancer un dé random
   */
  get roll(): number {
    this._value = Math.floor(Math.random() * 6) + 1;
    return this._value;
  }
}
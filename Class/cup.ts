import Dice from "./dice";

export default class Cup {
    public _value:number = 0;
    public _dice:Dice;

    constructor(dice:Dice)
    {
        this._dice = dice;
    }
    /**
     * Fonction qui permet de lancer un nombre de dé définit dans les paramètres
     * @returns this._value
     */
    roll(number:number):number
    {
        let sum:number = 0;
        let rollDice:number = 0;

        for (let index = 0; index < number; index++) {
            rollDice = this._dice.roll;
            sum += rollDice;
            this._value = sum;
        }
        return this._value;
    }

    showScore()
    {
        return `Vous avez fait ${this._value}`;
    }
}
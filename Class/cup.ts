import Dice from "./dice";

export default class Cup {
    public _value:number;
    public _dice:Dice;
    public _multipleDice:number[] = [];

    constructor(value:number, dice:Dice, multipleDice:number[])
    {
        this._value = value;
        this._dice = dice;
        this._multipleDice = multipleDice;
    }
    roll(roll:number)
    {
        let sum:number = 0;
        for (let index = 0; index <= roll; index++) {
            sum += this._dice.roll;
            // this._multipleDice.push[sum];
            // this._value += this._multipleDice[index];
            console.log(this._value);
        }
    }

    showScore()
    {
        return `Vous avez fait ${this._value}`;
    }
}

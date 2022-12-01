import Cup from "./cup";

export default class Player {
    _nom: string;
    _score: number = 0;
    _cup: Cup;

    constructor(nom: string, cup:Cup)
    {
        this._nom = nom;
        this._cup = cup;
    }

    play():number
    {
        let rollTheDice:number = 0;
        rollTheDice = this._cup.roll(3);
        return this._score = rollTheDice;
    }

    showScore()
    {
        return `${this._nom} a fait ${this._score}`;
    }
}
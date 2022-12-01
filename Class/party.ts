import Cup from "./cup";
import Dice from "./dice";
import Player from "./player";

export default class Party {
    private _player: Player;
    private _cup: Cup;
    private _dice:Dice;

    initialization(player:Player, cup:Cup, dice:Dice):void
    {
        this._player = player;
        this._cup = cup;
        this._dice = dice;
    }

    runParty()
    {

    }

    showWinner():string
    {
        if()
    }
}
import Cup from "./Class/cup";
import Dice from "./Class/dice";
import Party from "./Class/party";
import Player from "./Class/player";


const dice: Dice = new Dice(6);
const cup = new Cup(dice);
const pierre = new Player('Pierre', cup);
const eddy = new Player('Eddy', cup);
const party = new Party();

pierre.play();
console.log(pierre.showScore());

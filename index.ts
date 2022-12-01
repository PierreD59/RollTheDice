import Cup from "./Class/cup";
import Dice from "./Class/dice";
import Party from "./Class/party";
import Player from "./Class/player";

const dice: Dice = new Dice(6);
const cup = new Cup(dice);
const player1 = new Player('Pierre', cup);
const player2 = new Player('Eddy', cup);
const player3 = new Player('Audrey', cup);

const party = new Party(player1, player2, player3);
party.runParty();

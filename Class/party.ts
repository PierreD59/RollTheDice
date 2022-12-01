import Player from "./player";
export default class Party {
  private _player: Player[];

  constructor(...player: Player[]) {
    this._player = player;
  }

  runParty() {
    let hightScore: number = 0;
    this._player.forEach((element) => {
      element.play();
      console.log(element.showScore());
    });
    this.showWinner();
  }

  showWinner() {
    let showWinner: number = 0;
    let score: number[] = [];
    this._player.forEach((element) => {
      score.push(element._score);
    });
    showWinner = Math.max(...score);
    this._player.forEach((element) => {
      if (element._score == showWinner) {
        console.log(`${element._nom} a gagné !`);
      }
    });
  }
}

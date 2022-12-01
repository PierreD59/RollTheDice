import Player from "./player";
export default class Party {
  private _player: Player[];

  constructor(...player: Player[]) {
    this._player = player;
  }

  /**
   * Lance une partie de dé, affiche le score de chacun et indique le gagnant à la fin.
   */
  runParty() {
    let hightScore: number = 0;
    this._player.forEach((element) => {
      element.play();
      console.log(element.showScore());
    });
    this.showWinner();
  }

  /**
   * Affiche celui qui à gagné
   */
  showWinner() {
    let showWinner: number = 0;
    let score: number[] = [];
    // Affiche le score de tout le monde et les insère dans un tableau
    this._player.forEach((element) => {
      score.push(element._score);
    });
    // Depuis le tableau, affiche celui qui a le plus grand score
    showWinner = Math.max(...score);
    // Avec le plus grand score, on cherche grâce à un forEach qui possède le même nombre
    this._player.forEach((element) => {
      if (element._score == showWinner) {
        console.log(`${element._nom} a gagné !`);
      }
    });
  }
}

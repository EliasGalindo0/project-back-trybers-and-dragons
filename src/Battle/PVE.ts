import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(public _player: Fighter, public _monster: SimpleFighter[]) {
    super(_player);
  }

  private battles(enemy: SimpleFighter): void {
    if (this._player.lifePoints !== -1) {
      this._player.attack(enemy);
    }
    if (enemy.lifePoints !== -1) {
      enemy.attack(this._player);
    }
  }

  fight(): number {
    this._monster.forEach((enemy) => {
      while (this._player.lifePoints > 0 && enemy.lifePoints > 0) {
        this.battles(enemy);
      }
    });
    const result = super.fight();
    return result;
  }
}
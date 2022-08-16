import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(public _player: Fighter, public _monster: SimpleFighter[]) {
    super(_player);
  }

  fight(): number {
    this._monster.forEach((enemy) => {
      while (this._player.lifePoints > 0 && enemy.lifePoints > 0) {
        this._player.attack(enemy);
        enemy.attack(this._player);
      }
    });
    return super.fight();
  }
}
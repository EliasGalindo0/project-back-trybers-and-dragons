// lifePoints, do tipo number;
// strength, do tipo number;
// defense, do tipo number;
// energy, do tipo Energy
// attack(), que recebe um enemy do tipo Fighter como parâmetro e não possui retorno (void);
// special(), que recebe um enemy do tipo Fighter como parâmetro e não possui retorno (void);
// levelUp(), que não recebe parâmetro e não possui retorno (void);
// receiveDamage(), que recebe um attackPoints do tipo number como parâmetro e retorne um number

import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;

  attack(enemy: Fighter): void;
  special(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number
}

export default Fighter;
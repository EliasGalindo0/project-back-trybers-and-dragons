// lifePoints, do tipo number;
// strength, do tipo number;
// defense, do tipo number;
// energy, do tipo Energy
// attack(), que recebe um enemy do tipo Fighter como parâmetro e não possui retorno (void);
// special(), que recebe um enemy do tipo Fighter como parâmetro e não possui retorno (void);
// levelUp(), que não recebe parâmetro e não possui retorno (void);
// receiveDamage(), que recebe um attackPoints do tipo number como parâmetro e retorne um number

import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy: Energy;
  levelUp(): void;
  special(enemy: Fighter): void;
  attack(enemy: Fighter): void;
  receiveDamage(amount: number): void;
}

export default Fighter;
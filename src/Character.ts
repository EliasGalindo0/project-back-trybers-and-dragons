// A classe deve implementar a interface Fighter;
// A classe Character deve ter os atributos privados: race, archetype, maxLifePoints, lifePoints, strength, defense, dexterity e energy, todos inicializados em seu construtor;
// O atributo race deve ser do tipo Race;
// O atributo archetype deve ser do tipo Archetype;
// O atributo maxLifePoints deve ser do tipo number;
// O atributo lifePoints deve ser do tipo number;
// O atributo strength deve ser do tipo number;
// O atributo defense deve ser do tipo number;
// O atributo dexterity deve ser do tipo number;
// O atributo energy deve ser do tipo Energy;
// O atributo name deve ser recebido como parâmetro no construtor e deve ser usado para dar nome à sua personagem.

import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  
  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get strength(): number {
    return this._strength;
  }

  public get energy(): Energy {
    const energyType = {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
    return energyType;
  }

  public get defense(): number {
    return this._defense;
  }

  //   receiveDamage 😵 este método recebe por parâmetro um valor (attackPoints) e as regras são:
  // Este valor deve ser decrescido de sua defesa (defense), assim causando um dano (damage);
  // Se o dano for maior que 0, você perde pontos de vida (lifePoints);
  // Ao receber o ataque e perder pontos de vida (lifePoints), e se sua vida chegar a 0 ou menos, você deve fixá-la com o valor -1;
  // Ao final sempre retorne o valor atualizado de seus pontos de vida.
  receiveDamage(attackPoints: number): number {
    const damageReceived = attackPoints - this._defense;

    if (damageReceived > 0) {
      this._lifePoints -= damageReceived;
      if (this._lifePoints <= 0) {
        this._lifePoints = -1;
      }

      return this._lifePoints;
    }

    return this._lifePoints;
  }

  // attack 🪄 este método recebe por parâmetro uma pessoa inimiga (enemy) e as regras são:
  // Toda vez que acontecer um ataque, o inimigo recebido por parâmetro recebe um dano;
  // Este dano deve ser equivalente a força (strength) de quem ataca.
  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  //   levelUp 🆙 este método não recebe parâmetro e as regras são:
  // Sempre que este método for chamado os atributos maxLifePoints, strength, dexterity e defense terão um incremento de no mínimo 1 e no máximo 10 pontos; ✨✨
  // Assim como os atributos anteriores o montante de energia (amount dentro de energy) deve ser alterado também, ele deve ficar cheio, valendo exatamente 10;
  // O atributo maxLifePoints do Character nunca poderá ser maior que o maxLifePoints de sua raça (race). Se, ao incrementar o valor de maxLifePoints do Character esse valor ficar maior do que o maxLifePoints da raça, ele deve receber o valor igual ao do da raça. Exemplo: se o maxLifePointsda raça é 100, e o do Character é 95, e ao fazer o levelUp ele ficaria 8 pontos maior, isso daria 103, que é maior do que o da raça, portanto você deveria deixar em 100.
  // Ao final, o atributo lifePoints também deve ser atualizado, recebendo o novo valor de maxLifePoints (de acordo com as regras anteriores).
  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  //   special ⚡ este método não recebe parâmetro e as regras é você quem decide:
  // Aqui você pode expandir sua mente e realizar a lógica que achar mais interessante para um ataque especial, use tudo que aprendeu no mundo de T&D!
  special(enemy: SimpleFighter): void | number {
    const special = this._strength + getRandomInt(10, 50);
    
    if (special === 10) {
      console.log('Better luck on the next time, your special didn`t hurt me!');
    }
    enemy.receiveDamage(special);
  }
}
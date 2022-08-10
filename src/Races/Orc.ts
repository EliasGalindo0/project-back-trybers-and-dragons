import Race from './Race';

export default class Orc extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
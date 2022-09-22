import Race from './Race';

// Cada raça deve possuir um número máximo de pontos de vida (maxLifePoints), que deve ser inicializado em seu construtor:
// A raça Dwarf deve receber 80 pontos de vida;
// A raça Elf deve receber 99 pontos de vida;
// A raça Halfling deve receber 60 pontos de vida;
// A raça Orc deve receber 74 pontos de vida.
// Não se esqueça de implementar o(s) método(s) necessário(s) após estender a classe abstrata Race;
// Não se esqueça de fazer a sobrescrita (override) do(s) método(s) necessário(s).

export default class Dwarf extends Race {
  static counter = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.counter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.counter;
  }
}
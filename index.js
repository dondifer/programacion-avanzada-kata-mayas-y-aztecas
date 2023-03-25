class Warrior {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }

  attack() {
    console.log("attack", this.power);
    return this.power;
  }

  defend(damage) {
    this.life -= damage;
    console.log("Life:", this.life);
  }
}

class Maya extends Warrior {
  constructor(life, power) {
    super(life, power);
  }
  drinkColaCao() {
    this.power += 10;
    console.log("Maya power:", this.power);
  }
}

class Azteca extends Warrior {
  constructor(life, power) {
    super(life, power);
  }
  drinkNesquik() {
    this.life += 10;
    console.log("Azteca life:", this.life);
  }
}
const myMaya = new Maya(200, 20);
const myAzteca = new Azteca(190, 30);

myAzteca.drinkNesquik();
myMaya.drinkColaCao();
myAzteca.defend(myMaya.attack());
myMaya.defend(myAzteca.attack());

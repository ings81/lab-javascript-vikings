// Soldier
class Soldier {
  constructor(a, b) {
    this.strength = b;
    this.health = a;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health <= 0) return `${this.name} has died in act of combat`;
    return `${this.name} has received ${damage} points of damage`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health <= 0) return `A Saxon has died in combat`;
    return `A Saxon has received ${damage} points of damage`;
  }
}
// War
class War {}

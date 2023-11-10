class hero {
  constructor(name, age, kind) {
    this.name = name;
    this.age = age;
    this.kind = kind;
  }

  attacks() {
    let attack;

    switch (this.kind) {
      case "Wizard":
        attack = "Magic";
        break;
      case "Warrior":
        attack = "a Sword";
        break;
      case "Monk":
        attack = "Martial Arts";
        break;
      case "Ninja":
        attack = "Shurikens";
        break;
      default:
        attack = "An unknown hero attacked";
    }
    console.log(`The ${this.kind} atacked using ${attack}`);
  }
}

let wizard = new hero("Gandalf", 150, "Wizard");
let warrior = new hero("Goro", 38, "Warrior");
let monk = new hero("Shun", 79, "Monk");
let ninja = new hero("Neji", 44, "Ninja");

wizard.attacks();
warrior.attacks();
monk.attacks();
ninja.attacks();

// It is possible to use an if else structure in place of the switch structure as well
if (this.kind === "Wizard") {
  console.log(`The ${this.kind} atacked using magic`);
} else if (this.kind === "Warrior") {
  console.log(`The ${this.kind} atacked using a sword`);
} else if (this.kind === "Monk") {
  console.log(`The ${this.kind} atacked using martial arts`);
} else if (this.kind === "Ninja") {
  console.log(`The ${this.kind} atacked using Shurikens`);
} else {
  console.log("An unknown hero attacked");
}

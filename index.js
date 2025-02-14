console.log("************");

// Part 1: Humble Beginnings
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//“Robin.”

// const adventurer = {
// name: "Robin",
// health: 10,
// inventory: ["sword", "potion", "artifact"]
// }
// console.log(adventurer.inventory[0]);

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion:{
            name: "Frank",
            type: "Flea",
            belongings: ["small hat","sunglasses"]
                }
             },
        roll(mod=0){
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`);
        }
    }

// Test this method by calling adventurer.roll() a few times.
    
   adventurer.roll(); 
   adventurer.roll();
   adventurer.roll();
   adventurer.roll(); 
console.log("**********************************");

//Part 2: Class Fantasy
// Here is what the basic Character class looks like so far, including a constructor function that allows us to create new characters with whatever name we would like:
class Character {
  static MAX_HEALTH = 100;  //part 4:Add a static MAX_HEALTH property to the Character class, equal to 100.
  constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll(mod=0){
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    
    }
  }

console.log("**************************************");

// Part 3: Class Features:
//expand upon it with your own properties and methods.

class Adventurer extends Character {
  static ROLES = ["Fighter","Healer", "Wizard"]; //Add a static ROLES array to the Adventurer class, with values “Fighter,” “Healer,” and “Wizard.” 
    constructor (name, role) {
      super(name);

      this.role = role;
      this. level = 1;  //starting level 1
      this.lives = 3;   // Adventurer starting with 3 lives
      this.experience = 0; // starting with 0 expo points
      this.inventory.push("bedroll", "50 gold coins");
      //this.attack = 1;
  }

  //PART 5:
  roll(){
    return Math.floor(Math.random() * 10) + 1; 
  }
  duel(opponent){
    console.log(`${this.name} is duelling ${opponent.name}`);
    const thisRoll = this.roll(); // Roll for the current adventurer
    const opponentRoll = opponent.roll(); // Roll for the opponent adventurer
  
    // Log the rolls
    console.log(`${this.name} rolled: ${thisRoll}`);
    console.log(`${opponent.name} rolled: ${opponentRoll}`);
    if (thisRoll < opponentRoll) {
      this.health -= 1;  // Current adventurer takes damage
      console.log(`${this.name} takes 1 damage! Current health: ${this.health}`);}
      else if (thisRoll > opponentRoll) {
        opponent.health -= 1;  // Opponent takes damage
        console.log(`${opponent.name} takes 1 damage! Current health: ${opponent.health}`);
      } else {
        console.log("It's a tie! No one takes damage.");
      }
  }
  
  //method for attack
  attack(target,damage)
  {

    target.lives -= damage;
    console.log(`${adventurer.name} attack`)
    console.log(`${target.name} has ${target.lives} lives remaining`)
    
  }

  //method to check the current level based on experience
  getLevel()
  {
    return Math.floor(this.experience/1000) + 1; //eg: 1000 Xp for each level
  }
  //Method to levelup 
  levelUp(){
    const currLevel = this.getLevel();
    const newLevel = Math.floor(this.experience/1000) + 1;
    if(newLevel>currLevel)
    {
      console.log(`${this.name} leveled up! Now at level ${newLevel}`);
    } else{
      console.log(`${this.name} is still at level  ${currLevel}.`)
    }
  }
 
  //method to gain expos
  gainExperience(expos){
    this.experience += expos;
    console.log(`${this.name} gains ${expos} expo's! now Total expo's ${this.experience}`);
    this.levelUp();
  }
  // method to check expos needed for the next level
  exposToNextLevel()
  {
    const currLevel = this.getLevel();
    const nextLevelXP = (currLevel) * 1000; // xp needed for next level
    const xpNeeded = nextLevelXP - this.experience;
    if (xpNeeded <= 0) {
      console.log(`${this.name} is already at level ${currLevel + 1} or higher.`);
    } else {
    console.log(`${this.name} needs ${xpNeeded} more experience to reach level ${currLevel + 1}.`);
    }
  }
//Method to lose lives when the Adventurer dies
loseLife()
{
  if(this.lives>0)
  {
    this.lives -=1;
    console.log(`${this.name} loses a life. ${this.lives} remaining`)
  } else{
    console.log(`${this.name} has no lives left.`);
  }
}
//Method to check lives left
checkLives()
{
  console.log(`${this.name} has ${this.lives} lives left.`);
  if(this.lives <=0)
  {
    console.log(`${this.name} has no lives left and cannot continue!`)
  }
}
respawn() {
  if (this.lives === 0) {
    this.lives = 3; // Reset lives to 3 when respawn happens
    console.log(`${this.name} has respawn with ${this.lives} lives.`);
  } else {
    console.log(`${this.name} is still alive with ${this.lives} lives.`);
  }
}

scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

//display information about the adventurer
  displayInfo() 
  {
    // super.displayInfo();
    console.log(`Name: ${this.name}, Role: ${this.role}, Level: ${this.getLevel()}, Lives: ${this.lives}`);
  }
}

try{
  const adventurer1 = new Adventurer("Brooke","Healer")
  adventurer1.displayInfo();
  
  const adventurer2 = new Adventurer("Aaron","warrior")
  adventurer2.displayInfo();
}catch(error){
  console.error(error.message);
}

//creating instance to the Adventurer class
let robin = new Adventurer ("Robin",  "warrior")
let monster= new Adventurer("Dylan")
console.log("**********ROBIN DUELING WITH MONSTER::*********")
robin.duel(monster);

robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);

//Even the companions can roll now; give it a try!
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();
console.log(robin instanceof Adventurer)
console.log(monster instanceof Adventurer)
robin.attack(monster,1);
robin.displayInfo();
robin.gainExperience(3000); // Gain 1500 XP
robin.displayInfo();
robin.exposToNextLevel();
robin.loseLife();
robin.checkLives();
robin.respawn();
robin.displayInfo();

//create a Companion class with properties and methods specific to the companions.
class Companion {
  constructor(name, type, belongings = []) {
    this.name = name;
    this.type = type;
    this.belongings = belongings;
    this.companion = null; // had own companion
  }
  
// Method to roll
roll(mod = 0) {
  const result = Math.floor(Math.random() * 20) + 1 + mod;
  console.log(`${this.name} the ${this.type} rolled a ${result}.`);
}
// Method to display companion's info
// Method to display the companion's info
displayInfo() {
  let companionInfo = this.companion ? `${this.companion.name} the ${this.companion.type}` : "No companion.";
  console.log(`Companion: ${this.name}, Type: ${this.type}, Companion: ${companionInfo}`);
}
}
//creating instance of companion class
// Creating companions
let leo = new Companion("Leo", "Cat");
let frank = new Companion("Frank", "Flea", ["small hat", "sunglasses"]);
robin.companion = leo;
console.log(robin);
console.log(leo);
leo.displayInfo();


//Part 5: Gather your Party

class AdventurerFactory {  
  constructor (role) {
    this.role = role;
    this.adventurers = [];
  }
  generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
    return newAdventurer;
  }
  findByIndex (index) {
    return this.adventurers[index];
  }
  findByName (name) {
    return this.adventurers.find((a) => a.name === name);
  }
}
try{
const healers = new AdventurerFactory("Healer");

const Dylan = healers.generate("Dylan");
Dylan.displayInfo();
const Aaron = healers.generate("Aaron");
Aaron.displayInfo();
const Alice = healers.generate("Alice");
Alice.displayInfo();
const cliff = healers.generate("cliff");
cliff.displayInfo();
console.log(healers)
}catch (error) {
  console.error(error.message); // Warrior is not a valid role!
}
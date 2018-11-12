class Grub {
	constructor() {
		this.age = 0;
		this.color = 'pink';
		this.food = 'jelly';
		this.eat = function() {
			return 'Mmmmmmmmm jelly';
		}
	}
};

// class Bee extends Grub {
// 	constructor() {
// 		super();
// 		this.age = 5;
// 		this.color = 'yellow';
// 		this.job = 'Keep on growing';
// 	}		
// };

// class HoneyMakerBee extends Bee {
// 	constructor() {
// 		super();
// 		this.age = 10;
// 		this.job = 'make honey';
// 		this.honeyPot = 0;
// 		this.makeHoney = function() {
// 			this.honeyPot++;
// 		}
// 		this.giveHoney = function() {
// 			this.honeyPot--;
// 		}
// 	}
// };

// class ForagerBee extends Bee {
// 	constructor() {
// 		super();
// 		this.age = 10;
// 		this.job = 'find pollen';
// 		this.canFly = true;
// 		this.treasureChest = [];
// 		this.forage = function(treasure) {
// 			this.treasureChest.push(treasure);
// 		}
// 	}
// };

// class RetiredForagerBee extends ForagerBee {
// 	constructor() {
// 		super();
// 		this.age = 40;
// 		this.job = 'gamble';
// 		this.canFly = false;
// 		this.color = 'grey';
// 		this.forage = function() {
// 			return 'I am too old, let me play cards instead';
// 		}
// 		this.gamble = function(treasure) {
// 			this.treasureChest.push(treasure);
// 		}
// 	}
// };
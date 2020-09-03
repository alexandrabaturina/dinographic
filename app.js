const dinoCompare = document.getElementById('dino-compare');
const infographicsGrid = document.getElementById('grid');

// Create Dino Constructor
function Dino(species, weight, height, diet, habitat, period, fact, image) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.habitat = habitat;
    this.period = period;
    this.fact = fact;
    this.image = image;
}

// Create Human Constructor
function Human(name, weight, height, diet) {
    this.species = name;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.fact = "";
    this.image = "human.png";
}

// Create Dino Objects
const triceratops = new Dino("Triceratops", 13000, 114, "herbavor", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh.", "triceratops.png");
const tyrannosaurusRex = new Dino("Tyrannosaurus Rex", 11905, 144, "carnivor", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long.", "tyrannosaurus rex.png");
const anklyosaurus = new Dino("Anklyosaurus", 10500, 55, "herbavor", "North America", "Late Cretaceous", "Anklyosaurus survived for approximately 135 million years.", "anklyosaurus.png");
const brachiosaurus = new Dino("Brachiosaurus", 70000, 372, "herbavor", "North America", "Late Jurasic", "An asteroid was named 9954 Brachiosaurus in 1991.", "brachiosaurus.png");
const stegosaurus = new Dino("Stegosaurus", 11600, 79, "herbavor", "North America, Europe, Asia", "Late Jurasic to Early Cretaceous", "The Stegosaurus had between 17 and 22 seperate places and flat spines.", "stegosaurus.png");
const elasmosaurus = new Dino("Elasmosaurus", 16000, 59, "carnivor", "North America", "Late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.", "elasmosaurus.png");
const ptaranodon = new Dino("Pteranodon", 44, 20, "carnivor", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.", "pteranodon.png");
const pigeon = new Dino("Pigeon", 0.5, 9, "herbavor", "World Wide", "Holocene", "All birds are living dinosaurs", "pigeon.png");


// Get human data from form
function getHumanDataFromForm() {
    const name = document.getElementById("name").value;
    const weight = document.getElementById("weight").value;
    const height = Number(document.getElementById("inches").value) +
        Number(document.getElementById("feet").value) * 12;
    const diet = document.getElementById("diet").value;
    human = new Human(name, weight, height, diet);
    return human;
};

// Get random fact
getRandomFact = (list) => list[Math.floor((Math.random() * list.length))];

// Create Dino Compare Method 1
function compareWeight(dinosaur) {
    const dinoWeight = Number(dinosaur.weight);
    const humanWeight = Number(human.weight);
    const weigthRatio = Math.round(dinoWeight / humanWeight);
    if (dinoWeight > humanWeight) {
        return `${dinosaur.species} is ${weigthRatio} times heavier than you.`;
    } else {
        return `You are ${humanWeight - dinoWeight} lbs heavier than ${dinosaur.species}`;
    }
};

// Create Dino Compare Method 2
function compareHeight(dinosaur) {
    const dinoHeight = Number(dinosaur.height);
    const humanHeight = human.height;
    const feetDiff = Math.floor((dinoHeight - humanHeight) / 12);
    const inchesDiff = (dinoHeight - humanHeight) % 12;
    if (dinoHeight > humanHeight) {
        return `${dinosaur.species} is ${feetDiff} feet ${inchesDiff} inches taller than you.`;
    } else if (dinoHeight < humanHeight) {
        return `You are ${Math.abs(feetDiff)} feet ${Math.abs(inchesDiff)} inches taller than ${dinosaur.species}`;
    } else {
        return `You are as tall as ${dinosaur.species}.`
    }
};

// Create Dino Compare Method 3
function compareDiet(dinosaur) {
    if (dinosaur.diet === human.diet.toLowerCase()) {
        return `Both you and ${dinosaur.species} have ${dinosaur.diet} diet.`
    } else {
        return `Unlike you, ${dinosaur.species} has ${dinosaur.diet} diet.`
    }
};

// Create tiles for human and dinosaurs
function createTile(animal) {
    if (animal.species !== 'Pigeon') {
        const facts = [animal.fact, compareWeight(animal), compareHeight(animal), compareDiet(animal)];
        fact = getRandomFact(facts);
    } else {
        fact = animal.fact;
    }
    const tile = document.createElement('div');
    tile.classList.add('grid-item');
    tile.innerHTML = `
    <h3>${animal.species}</h3>
    <img src="images/${animal.image}">
    `;
    if (animal instanceof Dino) {
        tile.innerHTML += `
    <p>${fact}</p>
    `;
    }
    infographicsGrid.appendChild(tile);
}

function generateInfographics(objects) {
    objects.forEach(object => createTile(object));
}

function showInfographics() {
    const objects = [triceratops, tyrannosaurusRex, anklyosaurus, brachiosaurus, getHumanDataFromForm(), stegosaurus, elasmosaurus, ptaranodon, pigeon];
    generateInfographics(objects);
    dinoCompare.style.display = 'none';
    infographicsGrid.style.display = 'flex';
}

// On button click, display infographic
infographicsGrid.style.display = 'none';
document.getElementById('btn').addEventListener("click", showInfographics);
const dinoJSON = {
    "Dinos": [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh",
            "image": "triceratops.png"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long.",
            "image": "tyrannosaurus rex.png"
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years.",
            "image": "anklyosaurus.png"
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991.",
            "image": "brachiosaurus.png"
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
            "image": "stegosaurus.png"
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas.",
            "image": "elasmosaurus.png"
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur.",
            "image": "pteranodon.png"
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs.",
            "image": "pigeon.png"
        }
    ]
};

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

// Create Dino Objects
function getDinoArray() {
    dinoArray = Array();
    dinoJSON.Dinos.forEach((dino) => {
        newObj = new Dino(
            dino.species,
            dino.weight,
            dino.height,
            dino.diet,
            dino.where,
            dino.when,
            dino.fact,
            dino.image
        )
        dinoArray.push(newObj);
    });
    return dinoArray
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

// Get human data from form
function getHumanDataFromForm() {
    const name = document.getElementById("name").value;
    const weight = document.getElementById("weight").value;
    const height = Number(document.getElementById("inches").value) +
        Number(document.getElementById("feet").value) * 12;
    const diet = document.getElementById("diet").value;
    return new Human(name, weight, height, diet);
}

// Get random fact
getRandomFact = (list) => list[Math.floor((Math.random() * list.length))];

// Create Dino Compare Method 1
function compareWeight(dinosaur) {
    const dinoWeight = Number(dinosaur.weight);
    const humanWeight = Number(getHumanDataFromForm().weight);
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
    const humanHeight = getHumanDataFromForm().height;
    const feetDiff = Math.floor((dinoHeight - humanHeight) / 12);
    const inchesDiff = (dinoHeight - humanHeight) % 12;
    if (dinoHeight > humanHeight) {
        return `${dinosaur.species} is ${feetDiff} feet ${inchesDiff} inches taller than you.`;
    } else if (dinoHeight < humanHeight) {
        return `You are ${Math.abs(feetDiff)} feet ${Math.abs(inchesDiff)} inches taller than ${dinosaur.species}`;
    } else {
        return `You are as tall as ${dinosaur.species}.`
    }
}

// Create Dino Compare Method 3
function compareDiet(dinosaur) {
    if (dinosaur.diet === getHumanDataFromForm().diet.toLowerCase()) {
        return `Both you and ${dinosaur.species} have ${dinosaur.diet} diet.`
    } else {
        return `Unlike you, ${dinosaur.species} has ${dinosaur.diet} diet.`
    }
}

// Create fact about habitat
function habitatFact(dinosaur) {
    return `${dinosaur.species[0].toUpperCase() + dinosaur.species.slice(1)} lived in ${dinosaur.habitat}.`
}

// Create fact about period
function periodFact(dinosaur) {
    return `${dinosaur.species[0].toUpperCase() + dinosaur.species.slice(1)} lived during ${dinosaur.period} period.`
}

// Create tiles for human and dinosaurs
function createTile(animal) {
    const tile = document.createElement('div');
    tile.classList.add('grid-item');
    tile.innerHTML = `
    <h3>${animal.species}</h3>
    <img src="images/${animal.image}">
    `;
    if (animal.species !== "Pigeon" && animal instanceof Dino) {
        const facts = [
            animal.fact,
            compareWeight(animal),
            compareHeight(animal),
            compareDiet(animal),
            habitatFact(animal),
            periodFact(animal)
        ];
        tile.innerHTML += `<p>${getRandomFact(facts)}</p>`;
    } else if (animal.species === "Pigeon") {
        tile.innerHTML += `<p>${animal.fact}</p>`;
    }
    infographicsGrid.appendChild(tile);
}

function generateInfographics(objects) {
    objects.forEach(object => createTile(object));
}

// Create array of Dino and Human objects
function getObjects() {
    const objects = Array();
    for (let i = 0; i < 4; i++) {
        objects.push(getDinoArray()[i]);
    }
    objects.push(getHumanDataFromForm());
    for (let i = 4; i < 8; i++) {
        objects.push(getDinoArray()[i]);
    }
    return objects
}

function showInfographics() {
    generateInfographics(getObjects());
    dinoCompare.style.display = 'none';
    infographicsGrid.style.display = 'flex';
}

// On button click, display infographic
infographicsGrid.style.display = 'none';
document.getElementById('btn').addEventListener("click", showInfographics);
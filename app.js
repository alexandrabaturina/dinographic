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

// Create Dino Object
function getDinoArray(dinos) {

    dinoArray = Array();
    dinos.forEach((dino) => {
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
    return dinoArray;
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
getRandomFact = list => list[Math.floor((Math.random() * list.length))];

// Create Dino Compare Method 1
function compareWeight(dinosaur) {

    const dinoWeight = Number(dinosaur.weight);
    const humanWeight = Number(getHumanDataFromForm().weight);
    const weigthRatio = Math.round(dinoWeight / humanWeight);
    if (dinoWeight > humanWeight) {
        return `${dinosaur.species} is ${weigthRatio} times heavier than you`;
    } else {
        return `You are ${humanWeight - dinoWeight} lbs heavier than ${dinosaur.species}`;
    }
}

// Create Dino Compare Method 2
function compareHeight(dinosaur) {

    const dinoHeight = Number(dinosaur.height);
    const humanHeight = getHumanDataFromForm().height;
    const feetDiff = Math.floor((dinoHeight - humanHeight) / 12);
    const inchesDiff = (dinoHeight - humanHeight) % 12;
    if (dinoHeight > humanHeight) {
        return `${dinosaur.species} is ${feetDiff} feet ${inchesDiff} inches taller than you`;
    } else if (dinoHeight < humanHeight) {
        return `You are ${Math.abs(feetDiff)} feet ${Math.abs(inchesDiff)} inches taller than ${dinosaur.species}`;
    } else {
        return `You are as tall as ${dinosaur.species}`
    }
}

// Create Dino Compare Method 3
function compareDiet(dinosaur) {

    if (dinosaur.diet === getHumanDataFromForm().diet.toLowerCase()) {
        return `Both you and ${dinosaur.species} have ${dinosaur.diet} diet`
    } else {
        return `Unlike you, ${dinosaur.species} has ${dinosaur.diet} diet`
    }
}

// Capitalize dino name
capitalize = dinosaur => dinosaur.species[0].toUpperCase() + dinosaur.species.slice(1);


// Create fact about habitat
habitatFact = dinosaur => `${capitalize(dinosaur)} lived in ${dinosaur.habitat}`;


// Create fact about period
periodFact = dinosaur => `${capitalize(dinosaur)} lived during ${dinosaur.period} period`;


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

// Shuffle dino array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

// Create array of Dino and Human objects
function getHumanDinoArray(dinos) {

    const shuffledDinos = shuffle(dinos);

    return shuffledDinos.slice(0, 4)
        .concat(getHumanDataFromForm())
        .concat(shuffledDinos.slice(4, 8))
}

// Show infographic
function showInfographics(array) {
    generateInfographics(array);
    dinoCompare.style.display = 'none';
    infographicsGrid.style.display = 'flex';
}


// Read data from JSON
fetch('dino.json')
    .then(response => response.json())
    .then(data => {
        const dinoArray = getDinoArray(data.Dinos);
        document.getElementById('btn').addEventListener("click", () => {
            const humanDinoArray = getHumanDinoArray(dinoArray);
            showInfographics(humanDinoArray);
        });
    })
    .catch(err => console.log(`Unable to read data from dino.json: ${err}`));
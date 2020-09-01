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
function Human(name, weight, height, diet, image) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.image = image;
}

// Read JSON data

// async function getData() {

//     try {
//         let response = await fetch('dino.json');
//         let promise = await response.json();
//         let data = await response.data;
//         return data
//     } catch (err) {
//         alert(err);
//     }
// }

// const jsonData = getData();


// Create Dino Objects

const triceratops = new Dino("Triceratops", 13000, 114, "herbavor", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh.", "triceratops.png");
const tyrannosaurusRex = new Dino("Tyrannosaurus Rex", 11905, 144, "carnivor", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long.", "tyrannosaurus rex.png");
const anklyosaurus = new Dino("Anklyosaurus", 10500, 55, "herbavor", "North America", "Late Cretaceous", "Anklyosaurus survived for approximately 135 million years.", "anklyosaurus.png");
const brachiosaurus = new Dino("Brachiosaurus", 70000, 372, "herbavor", "North America", "Late Jurasic", "An asteroid was named 9954 Brachiosaurus in 1991.", "brachiosaurus.png");
const stegosaurus = new Dino("Stegosaurus", 11600, 79, "herbavor", "North America, Europe, Asia", "Late Jurasic to Early Cretaceous", "The Stegosaurus had between 17 and 22 seperate places and flat spines.", "stegosaurus.png");
const elasmosaurus = new Dino("Elasmosaurus", 16000, 59, "carnivor", "North America", "Late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.", "elasmosaurus.png");
const ptaranodon = new Dino("Pteranodon", 44, 20, "carnivor", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.", "pteranodon.png");
const pigeon = new Dino("Pigeon", 0.5, 9, "herbavor", "World Wide", "Holocene", "All birds are living dinosaurs", "pigeon.png");


// Create Human Object

// Use IIFE to get human data from form

(function getHumanDataFromForm() {
    var aName = "Barry";
})();

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array

    // Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic

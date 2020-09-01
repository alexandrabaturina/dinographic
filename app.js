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


// Read JSON data

async function getData() {

    try {
        let response = await fetch('dino.json');
        return await response.json();
    } catch (err) {
        alert(err);
    }
}


// Create Dino Objects


// Create Human Object

// Use IIFE to get human data from form


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

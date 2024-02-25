// Selecting elements
let button = document.getElementById("button");
let click = document.getElementById("click");
let reset = document.getElementById("reset");
let generatorButton = document.getElementById("generator");
let randImage = document.getElementById("randImage");
let startOverButton = document.getElementById("startover");
let images = ['image1.gif', 'image2.gif', 'image3.gif', 'image4.gif'];
let count = 0;

// Event listener for the first button
button.addEventListener("click", function() {
    count++;
    click.textContent = 'Your click count => ' + count;
});

// Event listener for the reset button
reset.addEventListener('click', function() {
    count = 0;
    click.textContent = 'Your click count => ' + count;

    // Hide random image
    randImage.classList.add("hidden");
});

// Event listener for the generator button
generatorButton.addEventListener('click', function() {
    // Generate a new random number
    let randomNumber = Math.floor(Math.random() * images.length);

    // Set the src attribute of the random image
    randImage.src = `img/${images[randomNumber]}`;

    // Show the random image
    randImage.classList.remove("hidden");
});

// Event listener for the start over button
startOverButton.addEventListener('click', function() {
    // Hide random image
    randImage.classList.add("hidden");
});

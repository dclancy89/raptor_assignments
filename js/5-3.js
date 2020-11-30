// Miles Per Gallon
// Daniel Clancy
// v1.0 updated 11-29-20
// Simulates a do while loop that calculates miles per gallon



let submit = document.getElementById('submit');

// We will use this to keep track of which iteration of the display we're on for the even listeners.
let counter = 1;

// Adds a click event listener to the go button.
// This listens for when someone clicks the button
// and does runs the anonymous function
submit.addEventListener('click', function(e) {

    // Prevent the default form submission from happening
    e.preventDefault();

    startProgram();
    
});

function startProgram() {

    // grab the output div so we can append stuff do it
    const outputDiv = document.getElementById('outputDiv');

    //build and append the display html for the "loop"
    let html = `<label for="miles${counter}">Miles Driven</label><br /><input type="text" id="miles${counter}"><br /><br /><label for="gallons${counter}">Gallons Used"</label><br /><input type="text" id="gallons${counter}"><br /><br /><input type="submit" value="calculate" id="submit${counter}">`;
    outputDiv.innerHTML += html;

    // Add the event listener for the calculate button
    document.getElementById('submit' + counter).addEventListener('click', calcSubmitButtonClick);
}

function calcSubmitButtonClick(e) {
    // prevent default submit
    e.preventDefault();

    // grab the values from the correct inputs
    let miles = parseFloat(document.getElementById('miles' + counter).value);
    let gallons = parseFloat(document.getElementById('gallons' + counter).value);

    // calculate the mpg
    let mpg = calcMilesPerGallon(miles, gallons);
    
    // build an append the output html
    const outputDiv = document.getElementById('outputDiv');
    const html = `<br /><br />MPG: ${mpg}<br /><br /> Calculate Another? <span id="yes${counter}"><button>Yes</button></span> / <span id="no${counter}"><button>No</button></span><br />`;

    outputDiv.innerHTML += html;

    // add the event listeners for the yes and no buttons
    document.getElementById('yes' + counter).addEventListener('click', clickYes);
    document.getElementById('no' + counter).addEventListener('click', clickNo);

}


//if they clicked yes, run the program again
function clickYes() {
    counter++;
    startProgram();
}


//if they clicked no, display thank you message
function clickNo() {
    const outputDiv = document.getElementById('outputDiv');
    outputDiv.innerHTML += `<br /><p>Thanks for coming!</p>`;
}


// calulates the miles per gallon.
function calcMilesPerGallon(miles, gallons) {
    return miles / gallons;
}
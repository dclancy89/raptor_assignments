// Miles Per Gallon
// Daniel Clancy
// v1.0 updated 11-29-20
// Simulates a do while loop that calculates miles per gallon



let submit = document.getElementById('submit');

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

    const outputDiv = document.getElementById('outputDiv');
    let html = `<label for="miles${counter}">Miles Driven</label><br /><input type="text" id="miles${counter}"><br /><br /><label for="gallons${counter}">Gallons Used"</label><br /><input type="text" id="gallons${counter}"><br /><br /><input type="submit" value="calculate" id="submit${counter}">`;
    outputDiv.innerHTML += html;
    document.getElementById('submit' + counter).addEventListener('click', calcSubmitButtonClick);
}

function calcSubmitButtonClick(e) {
    e.preventDefault();
    let miles = parseFloat(document.getElementById('miles' + counter).value);
    let gallons = parseFloat(document.getElementById('gallons' + counter).value);

    let mpg = calcMilesPerGallon(miles, gallons);
    
    const outputDiv = document.getElementById('outputDiv');
    const html = `<br /><br />MPG: ${mpg}<br /><br /> Calculate Another? <span id="yes${counter}"><button>Yes</button></span> / <span id="no${counter}"><button>No</button></span><br />`;

    outputDiv.innerHTML += html;

    document.getElementById('yes' + counter).addEventListener('click', clickYes);
    document.getElementById('no' + counter).addEventListener('click', clickNo);

}

function clickYes() {
    counter++;
    startProgram();
}

function clickNo() {
    const outputDiv = document.getElementById('outputDiv');
    outputDiv.innerHTML += `<br /><p>Thanks for coming!</p>`;
}

function calcMilesPerGallon(miles, gallons) {
    return miles / gallons;
}
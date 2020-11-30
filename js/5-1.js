// Sum of squares
// Daniel Clancy
// v1.0 updated 11-29-20
// Returns a sum of squares from 1 to n where
// n in input by the user and must be positive



let submit = document.getElementById('submit');

// Adds a click event listener to the go button.
// This listens for when someone clicks the button
// and does runs the anonymous function
submit.addEventListener('click', function(e) {

    // Prevent the default form submission from happening
    e.preventDefault();

    // calls the calculate function that actually does the calculations
    let isInputValid = false;
    isInputValid = validateInput();

    if(isInputValid) {
        calculate();
    }
    
});

function validateInput() {
    let input = parseInt(document.getElementById('MySquare').value);
    if (input < 0) {
        document.getElementById('outputList').innerHTML = `<li class="error">You must enter a positive integer</li>`;
        return false;
    } else {
        return true;
    }
}


function calculate() {

    // Grab all of of the data from the inputs
    let MySquare = parseInt(document.getElementById('MySquare').value);


    // initialize the sum to 0
    let sum = 0;

    // loop through from 1 to the square and add the square to the sum
    for(let i = 1; i <= MySquare; i++) {
        sum += Math.pow(i, 2);
    }

    // display the final sum to the user
    let outputHTML = `<li>${sum}</li>`;
    document.getElementById('outputList').innerHTML = outputHTML;

}
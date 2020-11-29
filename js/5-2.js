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
    let input = document.getElementById('ages').value;
    let arr = input.split(',');
    arr.forEach((num) => {
        if(num < 0) {
            return false;
        }
    });

    return true;
}


function calculate() {

    // Grab all of of the data from the inputs
    let ages = (document.getElementById('ages').value);
    let agesArray = ages.split(',');

    let sum = 0;
    for(let i = 0; i < agesArray.length; i++) {
        sum += parseInt(agesArray[i]);
    }

    let meanAge = sum / agesArray.length;

    // display the final sum to the user
    let outputHTML = `<li>${meanAge}</li>`;
    document.getElementById('outputList').innerHTML = outputHTML;

}
// Truth Table
// Daniel Clancy
// v1.0 updated 12-3-20
// Outputs the truth table for a user given set of values



let submit = document.getElementById('submit');

// Adds a click event listener to the go button.
// This listens for when someone clicks the button
// and does runs the anonymous function
submit.addEventListener('click', function(e) {

    // Prevent the default form submission from happening
    e.preventDefault();

    calculate();
    
});


function calculate() {

    // Grab all of of the data from the inputs
    let value1 = document.getElementById('value1').value;
    let value2 = document.getElementById('value2').value;

    // Check for F as a falsey value
    if(value1.toLowerCase() === 'f') {
        value1 = false;
    }

    if(value2.toLowerCase() === 'f') {
        value2 = false;
    }

    // Get the truth value. the !! gives us a boolean represenation of the value.
    // This uses javascripts set of truthy values.
    let truth = !!value1 || !!value2;
    

    // display the final sum to the user
    let outputHTML = `<li>The value of ${document.getElementById('value1').value} OR ${document.getElementById('value2').value} = ${truth}</li>`;
    document.getElementById('outputList').innerHTML = outputHTML;

}
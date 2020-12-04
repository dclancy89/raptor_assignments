// User Menu Calculator
// Daniel Clancy
// v1.0 updated 12-3-20
// Outputs the answer between two input values based on the button clicked
// options: sum, diff, prod, quot



let sum = document.getElementById('sum');
let diff = document.getElementById('difference');
let prod = document.getElementById('product');
let quot = document.getElementById('quotient');

// Adds a click event listener to the go button.
// This listens for when someone clicks the button
// and does runs the anonymous function
sum.addEventListener('click', function(e) {

    // Prevent the default form submission from happening
    e.preventDefault();
    calculate("sum");
    
});

diff.addEventListener('click', function(e) {

    // Prevent the default form submission from happening
    e.preventDefault();
    calculate("diff");
    
})

prod.addEventListener('click', function(e) {

    // Prevent the default form submission from happening
    e.preventDefault();
    calculate("prod");
    
})

quot.addEventListener('click', function(e) {

    // Prevent the default form submission from happening
    e.preventDefault();
    calculate("quot");
    
})


function calculate(action) {

    // Grab all of of the data from the inputs
    let value1 = parseFloat(document.getElementById('value1').value);
    let value2 = parseFloat(document.getElementById('value2').value);

    let answer;
    let operation;

    switch(action) {
        case "sum":
            answer = value1 + value2;
            operation = "+";
            break;
        case "diff":
            answer = value1 - value2;
            operation = "-";
            break;
        case "prod":
            answer = value2 * value2;
            operation= "*";
            break;
        case "quot":
            answer = value1 / value2;
            operation = "/";
            break;
    }
    

    // display the final sum to the user
    let outputHTML = `<li>The value of ${value1} ${operation} ${value2} = ${answer}</li>`;
    document.getElementById('outputList').innerHTML = outputHTML;

}
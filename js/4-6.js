// Area calculator
// Daniel Clancy
// v1.0 updated 12-3-20
// Outputs the area of a square, circle, or triangle
// based on the user input length



let square = document.getElementById('square');
let circle = document.getElementById('circle');
let triangle = document.getElementById('triangle');

// Adds a click event listener to the go button.
// This listens for when someone clicks the button
// and does runs the anonymous function
square.addEventListener('click', function(e) {

    // Prevent the default form submission from happening
    e.preventDefault();
    calculate("square");
    
});

circle.addEventListener('click', function(e) {

    // Prevent the default form submission from happening
    e.preventDefault();
    calculate("circle");
    
});

triangle.addEventListener('click', function(e) {

    // Prevent the default form submission from happening
    e.preventDefault();
    calculate("triangle");
    
});



function calculate(action) {

    // Grab all of of the data from the inputs
    let x = parseFloat(document.getElementById('value1').value);

    let answer;
    let outputHTML

    switch(action) {
        case "square":
            answer = x * x;
            outputHTML = `<li>The area of a square with sides of length ${x} is ${answer}`;
            break;
        case "circle":
            answer = 3.14 * Math.pow(x, 2);
            outputHTML = `<li>The area if a circle with radius of length ${x} is ${answer}`;
            break;
        case "triangle":
            answer = Math.sqrt(3) / 4 * Math.pow(x,2);
            outputHTML = `<li>The area of an equilateral triangle with sides of length ${x} is ${answer}`;
            break;

    }
    

    // display the final sum to the user
    document.getElementById('outputList').innerHTML = outputHTML;

}
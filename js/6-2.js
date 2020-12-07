// Sum or pos and neg numbers
// Daniel Clancy
// v1.0 updated 12-6-20
// Output the sum of positive and negative numbers from a given list



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
    let list = document.getElementById('numbers').value;
    list = list.split(',');

    let sumPos = 0;
    let sumNeg = 0;

    // loop through the array and find the sums
    list.forEach((num) => {
        if(parseFloat(num) > 0) {
            sumPos += parseFloat(num);
        } else {
            sumNeg += parseFloat(num);
        }
    });

    outputHTML = `<li>Sum of Positive Numbers: ${sumPos}</li><li>Sum of Negative Numbers: ${sumNeg}</li>`;


    // display the final sum to the user
    document.getElementById('outputList').innerHTML = outputHTML;

}
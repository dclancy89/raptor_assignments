let submit = document.getElementById('submit');

// Adds a click event listener to the go button.
// This listens for when someone clicks the button
// and does runs the anonymous function
submit.addEventListener('click', function(e) {

    // Prevent the default form submission from happening
    e.preventDefault();

    // calls the calculate function that actually does the calculations
    calculate();
})


function calculate() {

    // Grab all of of the data from the inputs
    let LoanAmt = parseFloat(document.getElementById('LoanAmt').value);
    let InterestRate = parseFloat(document.getElementById('InterestRate').value);
    let NumberMonths = parseFloat(document.getElementById('NumberMonths').value);


    // Calculates the three averages
    let MonthlyRate = InterestRate / 1200;
    let Payment = (LoanAmt * MonthlyRate * Math.pow((1 + MonthlyRate), NumberMonths) / (Math.pow((1 + MonthlyRate), NumberMonths) - 1)).toFixed(2);
    // builds an html string to be displayed in place of the holder text o the page.
    outputListHTML = `<li><span>MonthlyRate: </span> ${MonthlyRate}</li><li><span>Payment: </span> $${Payment}</li>`
    document.getElementById('outputList').innerHTML = outputListHTML;
}
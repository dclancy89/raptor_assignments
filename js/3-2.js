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

    // Grab all the values from the inputs and parse them as needed
    let ItemName = document.getElementById('itemName').value;
    let PoundPrice = parseFloat(document.getElementById('poundPrice').value);
    let Pounds = parseFloat(document.getElementById('pounds').value);
    let Ounces = parseFloat(document.getElementById('ounces').value);

    // Calculates the various prices needed
    let UnitPrice = (PoundPrice / 16).toFixed(2);
    let TotalPrice = (PoundPrice * (Pounds + (Ounces / 16))).toFixed(2);

    // builds an html string to be displayed in place of the holder text o the page.
    outputListHTML = `<li><span>Item Name:</span> ${ItemName}</li><li><span>Unit Price:</span> $${UnitPrice}/ounce</li><li><span>Total Price:</span> $${TotalPrice}</li>`
    document.getElementById('outputList').innerHTML = outputListHTML;
}
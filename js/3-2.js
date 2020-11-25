let submit = document.getElementById('submit');

submit.addEventListener('click', function(e) {
    e.preventDefault();
    calculate();
})


function calculate() {
    let ItemName = document.getElementById('itemName').value;
    let PoundPrice = parseFloat(document.getElementById('poundPrice').value);
    let Pounds = parseFloat(document.getElementById('pounds').value);
    let Ounces = parseFloat(document.getElementById('ounces').value);

    let UnitPrice = (PoundPrice / 16).toFixed(2);
    let TotalPrice = (PoundPrice * (Pounds + (Ounces / 16))).toFixed(2);

    outputListHTML = `<li>Item Name: ${ItemName}</li><li>Unit Price: $${UnitPrice}/ounce</li><li>Total Price: $${TotalPrice}</li>`
    document.getElementById('outputList').innerHTML = outputListHTML;
}
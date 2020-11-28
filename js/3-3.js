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

    // Grab all of jasmine's scores and parse them to floats
    // we technically only need ints, but it makes the float math easier later.
    let jasmineScore1 = parseFloat(document.getElementById('jasmineScore1').value);
    let jasmineScore2 = parseFloat(document.getElementById('jasmineScore2').value);
    let jasmineScore3 = parseFloat(document.getElementById('jasmineScore3').value);

    // grab all of shannon's scores and parse them to floats
    let shannonScore1 = parseFloat(document.getElementById('shannonScore1').value);
    let shannonScore2 = parseFloat(document.getElementById('shannonScore2').value);
    let shannonScore3 = parseFloat(document.getElementById('shannonScore3').value);

    // Calculates the three averages
    let avgJasmine = (jasmineScore1 + jasmineScore2 + jasmineScore3) / 3;
    let avgShannon = (shannonScore1 + shannonScore2 + shannonScore3) / 3;
    let teamAvg = (avgShannon + avgJasmine) / 2;

    // builds an html string to be displayed in place of the holder text o the page.
    outputListHTML = `<li><span>avgJasmine: </span> ${avgJasmine}</li><li><span>avgShannon: </span> ${avgShannon}</li><li><span>teamAvg: </span> ${teamAvg}</li>`
    document.getElementById('outputList').innerHTML = outputListHTML;
}
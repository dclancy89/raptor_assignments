// Deal cards
// Daniel Clancy
// v1.0 updated 12-6-20
// "deals" 1000 random cards and counts the number of times each suite is dealt.



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

    let clubs = 0;
    let diamonds = 0;
    let hearts = 0;
    let spades = 0;

    // loop 1000 times!
    for(let i = 0; i < 1000; i++) {
        // generate a random number 1-52
        let card = Math.floor(Math.random() * 52) + 1
        
        // Figure out which suite the card was
        if(card <= 13) {
            clubs++;
        } else if (card > 13 && card <=26) {
            diamonds++;
        } else if (card > 26 && card <=39) {
            hearts++;
        } else {
            spades++;
        }
    }


    outputHTML = `<li>Clubs: ${clubs}</li><li>Diamons: ${diamonds}</li><li>Hearts: ${hearts}</li><li>Spades: ${spades}</li>`;


    // display the final sum to the user
    document.getElementById('outputList').innerHTML = outputHTML;

}
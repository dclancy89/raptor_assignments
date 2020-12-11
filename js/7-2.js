// Build Emails
// Daniel Clancy
// v1.0 updated 12-10-20
// Given two parallel lists containing first and last names, build a list of email addresses



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

   const firstNames = document.getElementById('firstNames').value.split(',');
   const lastNames = document.getElementById('lastNames').value.split(',');

   const emails = [];

   outputHTML = '';

   if(firstNames.length != lastNames.length) {
       outputHTML = `<li>List must contain the same number of names.</li>`;
   } else {
        for(let i = 0; i < firstNames.length; i++) {
            outputHTML += `<li>${firstNames[i].toLowerCase()}.${lastNames[i].toLowerCase()}@ivytech.edu</li>`
        }
   }

   

    // display the email list to the user
    document.getElementById('outputList').innerHTML = outputHTML;

}
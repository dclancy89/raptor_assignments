// Find Average from file
// Daniel Clancy
// v1.0 updated 12-10-20
// Given a text file with comma separated scores, calculated the average score.


document.getElementById('scores').addEventListener('change', function() {

    let fileContent;

    var fileReader = new FileReader();
    fileReader.onload = function() {
        fileContent = fileReader.result;
        calculate(fileContent.split(','));
    }

    fileReader.readAsText(this.files[0]);

});


function calculate(scores) {

   
   let total = 0;

   scores.forEach((score) => {
       total += parseInt(score);
   });

   average = total / scores.length;

   let outputHTML = `<li>Average score: ${average}</li>`;

    // display the average to the user
    document.getElementById('outputList').innerHTML = outputHTML;

}
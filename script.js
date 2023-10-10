function calculateAnswerNextera() {
    // Get the input value
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var claimnum = document.getElementById('claimNumber').value;
    
    // Calculate the answer using the formula
    var miles = inputValue * 2;
    var pay = (miles - 50) * 0.625;
    var minus = miles - 50; // Store the value of miles - 50 in the 'minus' variable
    
    // Get the answer and formula elements
    var answerElement = document.getElementById('answer');
    var formulaElement = document.getElementById('formula');
    var claimElement = document.getElementById('claim');
    
    // Display the answer
    if (pay < 0) {
      answerElement.textContent = "No miles for you.";
      formulaElement.textContent = ""; // Clear the formula
    } else {

      claimElement.textContent =  "Claim number: " + claimnum;
      formulaElement.textContent = miles + "rt - 50 = " + minus + " @ $.625"; // Fixed the formula display
  
      answerElement.textContent = "Pay: $" + pay.toFixed(2); // Use toFixed to round to 2 decimal places
    }
  }

  function calculateAnswerWestCoast() {
    // Get the input value
    var inputValue2 = parseFloat(document.getElementById("inputValue2").value);
    var claimnum = document.getElementById('claimNumber2').value;
    
    // Calculate the answer using the formula

    var miles = inputValue2  * 2;
    //west caost pays .60 a mile 
    var pay = (miles - 50) * 0.60;
    var minus = miles - 50; // Store the value of miles - 50 in the 'minus' variable
    
    // Get the answer and formula elements
    var answerElement = document.getElementById('answer2');
    var formulaElement = document.getElementById('formula2');
    var claimElement = document.getElementById('claim2');
    
    // Display the answer
    if (pay < 0) {
      answerElement.textContent = "No miles for you.";
      formulaElement.textContent = ""; // Clear the formula
    } else {

      claimElement.textContent =  "Claim number: " + claimnum;
      formulaElement.textContent = miles + "rt - 50 = " + minus + " @ $.60"; // Fixed the formula display
  
      answerElement.textContent = "Pay: $" + pay.toFixed(2); // Use toFixed to round to 2 decimal places
    }
  }
  
  
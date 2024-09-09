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
    var email = document.getElementById('email')
    // Display the answer
    if (pay < 0) {
      answerElement.textContent = "No miles for you.";
      formulaElement.textContent = ""; // Clear the formula
    } else {
       email.textContent = "Hi, here is the mailage request:"
      claimElement.textContent =  "Claim number: " + claimnum;
      formulaElement.textContent = miles + "rt - 50 = " + minus + " @ $.60"; // Fixed the formula display
  
      answerElement.textContent = "Pay: $" + pay.toFixed(2); // Use toFixed to round to 2 decimal places
    }
  }
  document.getElementById('repeatButton').addEventListener('click', function() {
    // Get the value from the input field
    var inputValue = document.getElementById('colorInput').value;

    // Construct the output sentence
    var outputSentence = 'Hi, my name is Meli McKinney. I am a vehicle appraiser. ' + 
        'I was calling to set a time and place to inspect your ' + 
        inputValue + '. Please give me a call back at your best convenience.';

    // Display the output sentence in the <p> element
    document.getElementById('outputText').textContent = outputSentence;
});
//Third copy button 
document.getElementById('copyButton').addEventListener('click', function() {
    // Get the text from the <p> element
    var outputText = document.getElementById('outputText').textContent;

    // Copy the text to the clipboard
    navigator.clipboard.writeText(outputText).then(function() {
        alert('Text copied to clipboard!');
    }, function(err) {
        alert('Failed to copy text: ', err);
    });
});

//second copy button 
document.getElementById('copyButton2').addEventListener('click', function() {
  // Get the text from the <p> element
  var outputText = document.getElementById('outputText2').textContent;

  // Copy the text to the clipboard
  navigator.clipboard.writeText(outputText).then(function() {
      alert('Text copied to clipboard!');
  }, function(err) {
      alert('Failed to copy text: ', err);
  });
});
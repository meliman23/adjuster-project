// Function to calculate pay and update DOM
function calculateAnswer(inputId, claimId, answerId, formulaId, claimElementId, rate, rateLabel) {
    // Get the input value and claim number
    var inputValue = parseFloat(document.getElementById(inputId).value);
    var claimnum = document.getElementById(claimId).value;

    // Calculate miles and pay
    var miles = inputValue * 2;
    var minus = miles - 50;
    var pay = minus * rate;

    // Get DOM elements
    var answerElement = document.getElementById(answerId);
    var formulaElement = document.getElementById(formulaId);
    var claimElement = document.getElementById(claimElementId);

    // Display the result
    if (pay < 0) {
        answerElement.textContent = "No miles for you.";
        formulaElement.textContent = ""; // Clear the formula
    } else {
        claimElement.textContent = "Claim number: " + claimnum;
        formulaElement.textContent = `${miles}rt - 50 = ${minus} @ $${rateLabel}`;
        answerElement.textContent = "Pay: $" + pay.toFixed(2); // Format pay to 2 decimal places
    }
}

// Function for calculating Nextera miles pay
function calculateAnswerNextera() {
    calculateAnswer("inputValue", "claimNumber", "answer", "formula", "claim", 0.625, "0.625");
}

// Function for calculating West Coast miles pay
function calculateAnswerWestCoast() {
    calculateAnswer("inputValue2", "claimNumber2", "answer2", "formula2", "claim2", 0.60, "0.60");
    document.getElementById('email').textContent = "Hi, here is the mileage request:";
}

// Function to generate and display output text
document.getElementById('repeatButton').addEventListener('click', function() {
    var inputValue = document.getElementById('colorInput').value;
    var outputSentence = 'Hi, my name is Meli McKinney. I am a vehicle appraiser. ' +
        'I was calling to set a time and place to inspect your ' + inputValue + 
        '. Please give me a call back at your best convenience.';
    document.getElementById('outputText').textContent = outputSentence;
});

// Function to copy text to clipboard
function copyToClipboard(outputId) {
    var outputText = document.getElementById(outputId).textContent;
    navigator.clipboard.writeText(outputText).then(function() {
        alert('Text copied to clipboard!');
    }, function(err) {
        alert('Failed to copy text: ', err);
    });
}

// Event listeners for copy buttons
document.getElementById('copyButton').addEventListener('click', function() {
    copyToClipboard('outputText');
});
document.getElementById('copyButton2').addEventListener('click', function() {
    copyToClipboard('outputText2');
});
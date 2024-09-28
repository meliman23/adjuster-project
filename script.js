

function calculateAnswerWestCoast() {
  // Get the input values
  var inputValue2 = parseFloat(document.getElementById("inputValue2").value);
  var claimnum = document.getElementById('claimNumber2').value;

  // Calculate miles and pay
  var miles = inputValue2 * 2;
  var pay = (miles - 50) * 0.60;
  var minus = miles - 50; // miles - 50

  // Output elements
  var answerElement = document.getElementById('answer2');
  var formulaElement = document.getElementById('formula2');
  var claimElement = document.getElementById('claim2');
  var emailElement = document.getElementById('email');

  if (pay < 0) {
      answerElement.textContent = "No miles for you.";
      formulaElement.textContent = "";
  } else {
      emailElement.textContent = "Hi, here is the mileage request:";
      claimElement.textContent = "Claim number: " + claimnum;
      formulaElement.textContent = `${miles} rt - 50 = ${minus} @ $0.60`;
      answerElement.textContent = `Pay: $${pay.toFixed(2)}`;
  }
}

// Paragraph generator
document.getElementById('repeatButton').addEventListener('click', function () {
  var carModel = document.getElementById('colorInput').value;
  var outputText = `Hi, my name is Meli McKinney. I am a vehicle appraiser. I was calling to set a time and place to inspect your ${carModel}. Please give me a call back at your best convenience.`;
  document.getElementById('outputText').textContent = outputText;
});

// Copy to clipboard functionality
function copyToClipboard(id) {
  var textToCopy = document.getElementById(id).textContent;
  navigator.clipboard.writeText(textToCopy).then(function () {
      alert('Text copied to clipboard!');
  }, function (err) {
      alert('Failed to copy text: ' + err);
  });
}

document.getElementById('copyButton').addEventListener('click', function () {
  copyToClipboard('outputText');
});

document.getElementById('copyButton2').addEventListener('click', function () {
  copyToClipboard('outputText2');
});





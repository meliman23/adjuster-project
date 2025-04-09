// ===== West Coast Calculator =====
function calculateAnswerWestCoast() {
  const inputValue = parseFloat(document.getElementById("inputValue2").value);
  const claimnum = document.getElementById("claimNumber2").value;

  const miles = inputValue * 2;
  const baseMiles = 50;
  const rate = 0.60;
  const minus = miles - baseMiles;
  const pay = minus * rate;

  const emailElement = document.getElementById("email");
  const claimElement = document.getElementById("claim2");
  const formulaElement = document.getElementById("formula2");
  const answerElement = document.getElementById("answer2");

  if (isNaN(inputValue) || inputValue <= 0) {
      answerElement.textContent = "Please enter a valid mileage.";
      formulaElement.textContent = "";
      return;
  }

  if (pay < 0) {
      answerElement.textContent = "No miles for you.";
      formulaElement.textContent = "";
  } else {
      emailElement.textContent = "Hi, here is the mileage request:";
      claimElement.textContent = "Claim number: " + claimnum;
      formulaElement.textContent = `${miles} rt - ${baseMiles} = ${minus} @ $${rate.toFixed(3)}`;
      answerElement.textContent = `Pay: $${pay.toFixed(2)}`;
  }
}

// ===== Cayman Calculator =====
function calculateAnswerCayman() {
  const inputValue = parseFloat(document.getElementById("inputValueCayman").value);
  const claimnum = document.getElementById("claimNumberCayman").value;

  const miles = inputValue * 2;
  const baseMiles = 50;
  const rate = 0.625;
  const minus = miles - baseMiles;
  const pay = minus * rate;

  const emailElement = document.getElementById("emailCayman");
  const claimElement = document.getElementById("claimCayman");
  const formulaElement = document.getElementById("formulaCayman");
  const answerElement = document.getElementById("answerCayman");

  if (isNaN(inputValue) || inputValue <= 0) {
      answerElement.textContent = "Please enter a valid mileage.";
      formulaElement.textContent = "";
      return;
  }

  if (pay < 0) {
      answerElement.textContent = "No miles for you.";
      formulaElement.textContent = "";
  } else {
      emailElement.textContent = "Hi, here is the mileage request:";
      claimElement.textContent = "Claim number: " + claimnum;
      formulaElement.textContent = `${miles} rt - ${baseMiles} = ${minus} @ $${rate.toFixed(3)}`;
      answerElement.textContent = `Pay: $${pay.toFixed(2)}`;
  }
}

// ===== Paragraph Generator =====
document.getElementById('repeatButton').addEventListener('click', function () {
  const carModel = document.getElementById('colorInput').value;
  const outputText = `Hi, my name is Meli McKinney. I am a vehicle appraiser. I was calling to set a time and place to inspect your ${carModel}. Please give me a call back at your best convenience.`;
  document.getElementById('outputText').textContent = outputText;
});

// ===== Copy to Clipboard =====
function copyToClipboard(id) {
  const textToCopy = document.getElementById(id).textContent;
  navigator.clipboard.writeText(textToCopy).then(function () {
      alert('Text copied to clipboard!');
  }, function (err) {
      alert('Failed to copy text: ' + err);
  });
}

// Copy buttons
document.getElementById('copyButton').addEventListener('click', function () {
  copyToClipboard('outputText');
});

document.getElementById('copyButton2').addEventListener('click', function () {
  copyToClipboard('outputText2');
});

document.getElementById('copyButtonCayman').addEventListener('click', function () {
  copyToClipboard('outputTextCayman');
});

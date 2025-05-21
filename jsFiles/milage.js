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

// This should come first
function copyToClipboard(id) {
  const outputDiv = document.getElementById(id);
  const paragraphs = outputDiv.getElementsByTagName("p");
  let textToCopy = "";

  for (let p of paragraphs) {
    if (p.textContent.trim() !== "") {
      textToCopy += p.textContent + "\n";
    }
  }

  if (textToCopy === "") {
    alert("Nothing to copy!");
    return;
  }

  navigator.clipboard.writeText(textToCopy).then(function () {
    alert("Text copied to clipboard!");
  }, function (err) {
    alert("Failed to copy text: " + err);
  });
}

// THEN your DOMContentLoaded code
document.addEventListener('DOMContentLoaded', () => {
  const copyButton2 = document.getElementById('copyButton2');
  const copyButtonCayman = document.getElementById('copyButtonCayman');

  if (copyButton2) {
    copyButton2.addEventListener('click', () => {
      copyToClipboard('outputText2');
    });
  }

  if (copyButtonCayman) {
    copyButtonCayman.addEventListener('click', () => {
      copyToClipboard('outputTextCayman');
    });
  }
});

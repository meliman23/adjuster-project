// ===== Paragraph Generator =====
document.getElementById('repeatButton').addEventListener('click', function () {
    const carModel = document.getElementById('colorInput').value;
    const outputText = `Hi, my name is Meli McKinney. 
    I am a vehicle appraiser. I was calling to set a
     time and place to inspect your ${carModel}. Please
      give me a call back at your best convenience.`;
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
  
  
  
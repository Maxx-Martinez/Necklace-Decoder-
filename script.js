const mapping = {
  "00": " ",
  "11": "A", "12": "B", "13": "C", "14": "D", "15": "E",
  "16": "F", "17": "G", "18": "H", "19": "I",
  "21": "J", "22": "K", "23": "L", "24": "M", "25": "N",
  "26": "O", "27": "P", "28": "Q", "29": "R",
  "31": "S", "32": "T", "33": "U", "34": "V", "35": "W",
  "36": "X", "37": "Y", "38": "Z"
};

// Function to process numbers and map result
function processNumbers() {
  let mainNum = document.getElementById("numberInput").value.trim();
  let divider = parseFloat(document.getElementById("dividerInput").value);

  if (!mainNum || isNaN(divider) || divider === 0) {
    document.getElementById("result").textContent = "⚠️ Please enter valid numbers.";
    return;
  }

  // Perform division with 2 decimal precision
  let divisionResult = parseFloat(mainNum) / divider;

  // Scale to avoid decimal point issues
  let scaled = Math.round(divisionResult * 100);

  // Convert to string with padding to at least 4 digits
  let resultString = scaled.toString().padStart(4, "0");

  // Split into 2-digit chunks
  let chunks = resultString.match(/.{1,2}/g);

  // Map chunks to letters
  let finalMessage = "";
  chunks.forEach(chunk => {
    finalMessage += mapping[chunk] !== undefined ? mapping[chunk] : "?";
  });

  document.getElementById("result").textContent = finalMessage;
}
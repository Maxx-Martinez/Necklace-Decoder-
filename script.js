// Define your number-to-letter mapping
const mapping = {
  "01": "a", "02": "b", "03": "c", "04": "d", "05": "e",
  "06": "f", "07": "g", "08": "h", "09": "i", "10": "j",
  "11": "k", "12": "l", "13": "m", "14": "n", "15": "o",
  "16": "p", "17": "q", "18": "r", "19": "s", "20": "t",
  "21": "u", "22": "v", "23": "w", "24": "x", "25": "y",
  "26": "z", "00": " "   // space if 00 appears
};

function processNumbers() {
  let mainNum = document.getElementById("numberInput").value.trim();
  let divider = parseFloat(document.getElementById("dividerInput").value);

  if (!mainNum || isNaN(divider) || divider === 0) {
    document.getElementById("result").textContent = "⚠️ Please enter valid numbers.";
    return;
  }

  // Step 1: Perform division
  let divisionResult = parseFloat(mainNum) / divider;

  // Convert result to string of digits (remove decimal point)
  let resultString = divisionResult.toString().replace(".", "");

  // Step 2: Break into 2-digit chunks and map
  let finalMessage = "";
  for (let i = 0; i < resultString.length; i += 2) {
    let chunk = resultString.substring(i, i+2);
    finalMessage += mapping[chunk] !== undefined ? mapping[chunk] : "?";
  }

  // Output the decoded message
  document.getElementById("result").textContent = finalMessage;
}

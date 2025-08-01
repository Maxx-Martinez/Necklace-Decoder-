// Number-to-letter mapping (expand as needed)
const mapping = {
  "00": " ", "01": "a", "02": "b", "03": "c", "04": "d", "05": "e",
  "06": "f", "07": "g", "08": "h", "09": "i", "10": "j",
  "11": "k", "12": "l", "13": "m", "14": "n", "15": "o",
  "16": "p", "17": "q", "18": "r", "19": "s", "20": "t",
  "21": "u", "22": "v", "23": "w", "24": "x", "25": "y",
  "26": "z", "50": "L", "25": "S"  // Example for custom necklace codes
};

function processNumbers() {
  let mainNum = document.getElementById("numberInput").value.trim();
  let divider = parseFloat(document.getElementById("dividerInput").value);

  if (!mainNum || isNaN(divider) || divider === 0) {
    document.getElementById("result").textContent = "⚠️ Please enter valid numbers.";
    return;
  }

  // Perform division with decimals
  let divisionResult = parseFloat(mainNum) / divider;

  // Convert result to a string with 2 decimal places (adjust precision as needed)
  let resultString = divisionResult.toFixed(2); // e.g., 50.25

  // Remove decimal point but keep its digits
  resultString = resultString.replace(".", ""); // → "5025"

  // Pad if result has odd length
  if (resultString.length % 2 !== 0) {
    resultString = "0" + resultString;
  }

  // Split into chunks and map
  let finalMessage = "";
  for (let i = 0; i < resultString.length; i += 2) {
    let chunk = resultString.substring(i, i+2);
    finalMessage += mapping[chunk] !== undefined ? mapping[chunk] : "?";
  }

  document.getElementById("result").textContent = finalMessage;
}

function caesarShift(data, shiftVal) {
  const text = data.toString();
  const shift = parseInt(shiftVal, 10);
  let result = '';

  for (let i = 0; i < text.length; i++) {
    let c = text.charCodeAt(i);
    if (65 <= c && c <= 90) {
      result += String.fromCharCode((c - 65 + shift) % 26 + 65);  // Uppercase
    } else if (97 <= c && c <= 122) {
      result += String.fromCharCode((c - 97 + shift) % 26 + 97);  // Lowercase
    } else {
      result += text.charAt(i);  // Copy
    }
  }
  return result;
}

function encode(text, shift) {
  return caesarShift(text, shift);
}

function decode(text, shift) {
  return caesarShift(text, (26 - shift) % 26);
}

module.exports = {
  encode,
  decode
};
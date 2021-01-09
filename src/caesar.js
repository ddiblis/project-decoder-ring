function runShift(encodedASCII) {
  var returnString;
  if (encodedASCII < 97) {
    returnString = encodedASCII + 26
  }
  else if (encodedASCII > 122) {
    returnString = encodedASCII - 26
  } else {
    returnString = encodedASCII
  }
  return String.fromCharCode(returnString)
}

function caesar(word, shift, encode = true) {
  if (!shift || shift === 0 || shift > 25 || shift < -25){
    return false
  }
  let encodedString;
  encodedString = word.split("").map(letter => {
    if (letter.match(/[a-z]/i)) {
      let ascii = letter.toLowerCase().charCodeAt()
      let encodedASCII = encode ? (ascii + shift) : (ascii - shift)
      return runShift(encodedASCII)
      // if it's not a letter, return as is
    } else { return letter}
  })
  return encodedString.join("")
}

module.exports = caesar

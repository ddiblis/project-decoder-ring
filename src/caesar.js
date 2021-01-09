function runShift(encodedASCII) {
  let returnString
  if (97 <= encodedASCII  && encodedASCII <= 122) {
    returnString = encodedASCII
  } else {
    returnString = (encodedASCII < 97) ? encodedASCII + 26 : encodedASCII - 26
  }
  return String.fromCharCode(returnString)
}

function caesar(word, shift, encode = true) {
  if (!shift || shift === 0 || shift > 25 || shift < -25){
    return false
  }
  let encodedString
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

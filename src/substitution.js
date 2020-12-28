function substitution(string, alphabet, encode = true) {
  if (!alphabet || alphabet.length !== 26 || /(.).*\1/.test(alphabet)) {
    return false
  }

  const formattedString = []
  const letters = "abcdefghijklmnopqrstuvwxyz".split("")
  const stringArr = string.split("")
  const alphabetArr = alphabet.split("")

  if (encode === true) {
    stringArr.forEach(letter => {
      for (pos in alphabetArr) {
        lowerLetter = letter.toLowerCase()
        if (lowerLetter === " ") {
          formattedString.push(lowerLetter)
          // since there are 26 letters if there is no break it'll add 26 spaces
          break
        }
        if (lowerLetter === letters[pos]) {
          formattedString.push(alphabetArr[pos])
        }
      }
    })
  }
  else {
    stringArr.forEach(letter => {
      for (pos in alphabetArr) {
        lowerLetter = letter.toLowerCase()
        if (lowerLetter === " ") {
          formattedString.push(lowerLetter)
          break
        }
        if (lowerLetter === alphabetArr[pos]) {
          formattedString.push(letters[pos])
        }
      }
    })
  }
  return formattedString.join("")
}

module.exports = substitution

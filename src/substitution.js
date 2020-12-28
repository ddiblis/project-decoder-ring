function substitution(string, alphabet, encode = true) {
  // regex for if the string has any repeating letters included
  if (alphabet.length !== 26 || /(.).*\1/.test(alphabet)) {
    return false
  }

  const formattedString = []
  // I felt lazy so I just wrote the letters in a row into a string and had JS split into an array for me
  const letters = "abcdefghijklmnopqrstuvwxyz".split("")
  // turn the string input into an array
  const stringArr = string.split("")
  // turn the alphabet into an array
  const alphabetArr = alphabet.split("")

  if (encode === true) {
    stringArr.forEach(letter => {
      for (pos in alphabetArr) {
        lowerLetter = letter.toLowerCase()
        // if it's a space just return as is
        if (lowerLetter === " ") {
          formattedString.push(lowerLetter)
          // since there are 26 letters if there is no break it'll add 26 spaces
          break
        }
        // this one is nifty, let me explain my logic here, since the length of the alphabet and the substitution alphabet is the same, and they need to completely and exactly overlap, if the letter position matches in the actual alphabet
        if (lowerLetter === letters[pos]) {
          // just give me the same position in the array but from the substitution alphabet
          formattedString.push(alphabetArr[pos])
        }
      }
    })
  }
  else {
    stringArr.forEach(letter => {
      for (pos in alphabetArr) {
        lowerLetter = letter.toLowerCase()
        // same here for the spaces
        if (lowerLetter === " ") {
          formattedString.push(lowerLetter)
          break
        }
        // and all I have to do here is reverse the previous solution, where if it matches the letter in the substitution alphabet, then the real letter will be in the exact same position in the proper alphabet
        if (lowerLetter === alphabetArr[pos]) {
          // so return the alphabet item with the position where it matches the letter from the substitution alphabet
          formattedString.push(letters[pos])
        }
      }
    })
  }
  // then just join the formatted sting and return it
  return formattedString.join("")
}

module.exports = substitution

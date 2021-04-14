// Accepts string and 2 arrays of letters then encodes or decodes
function run(string, array1, array2) {
  return [...string].map((letter) => {
      for (position in array2) {
        lowerLetter = letter.toLowerCase()
        if (lowerLetter === " ") {
          return lowerLetter
        }
        if (lowerLetter === array1[position]) {
          return array2[position]
        }
      }
    })
}

function substitution(string, alphabet, encode = true) {
  if (!alphabet || alphabet.length !== 26 || /(.).*\1/.test(alphabet)) {
    return false
  }

  let formattedString 
  const letters = "abcdefghijklmnopqrstuvwxyz".split("")
  const stringArr = string.split("")
  const alphabetArr = alphabet.split("")

  if (encode === true) {
    formattedString = run(string, letters, alphabetArr)    
  }
  else {
    formattedString = run(string, alphabetArr, letters)
   
  }
  return formattedString.join("")
}

module.exports = substitution

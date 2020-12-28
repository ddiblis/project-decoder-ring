// polybius square of the letters, I got the idea from 2d arrays in Java
const letters = [
  [0,    1,     2,     3,     4,       5],
  [1,   "a",   "b",   "c",   "d",     "e"],
  [2,   "f",   "g",   "h", "(i/j)",   "k"],
  [3,   "l",   "m",   "n",   "o",     "p"],
  [4,   "q",   "r",   "s",   "t",     "u"],
  [5,   "v",   "w",   "x",   "y",     "z"],
]

function polybius(string, encode = true){

  if (encode === false && string.match(/\S/g).length % 2 != 0) {
    return false
  } 

  const encodedString = []

  if (encode === true) {
    string.split("").forEach(letter => {
      letter = letter.toLowerCase()
      if (letter.match(/[a-z]/i)) {
        // if it's an i or a j, the value is already known to be 42 so push that into array
        if (letter === "i" || letter === "j") {
          const iAndj = "42"
          encodedString.push(iAndj)
        }
        for (yAxis in letters) {
          for (xAxis in letters) {
            if (letter === letters[yAxis][xAxis]) {
              encodedString.push(xAxis.toString() + yAxis.toString())
            }
          }
        }
      } 
      else {
        encodedString.push(letter)
      }
    })
  } 
  else {
    const splitString = string.split("")
    const splitEncoded = []

    // initialising 2 variables, one that grabs the first item, the other the second, and it iterates by 2 so they jump over each other
    for (i=0, j=1;i<splitString.length,j<splitString.length;i+=2,j+=2) {
      if (splitString[i] === " ") {
        splitEncoded.push(splitString[i])
        i-=1
        j-=1
      }
      else {
        splitEncoded.push(splitString[i] + splitString[j])
      }
    }
    splitEncoded.forEach(letter => {
      if (letter === " ") {
        encodedString.push(letter)
      }
      for (yAxis in letters) {
        for (xAxis in letters) {
          if (letter.charAt(0) == xAxis && letter.charAt(1) == yAxis) {
            encodedString.push(letters[yAxis][xAxis])
          }
        }
      } 
    })
  }
  return encodedString.join("")
}

module.exports = polybius

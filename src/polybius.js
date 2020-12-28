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
      // if input is a letter
      if (letter.match(/[a-z]/i)) {
        // if it's an i or a j, the value is already known to be 42 so just go ahead and push that into the array
        if (letter === "i" || letter === "j") {
          const iAndj = "42"
          encodedString.push(iAndj)
        }
        for (yAxis in letters) {
          for (xAxis in letters) {
            // if the letter equals the letter in the square using the given x and y axis
            if (letter === letters[yAxis][xAxis]) {
              // convert the numbers of the x and y axis into string, add them together and push them into the array
              encodedString.push(xAxis.toString() + yAxis.toString())
            }
          }
        }
      } 
      else {
        // in case it's a space just push it as is
        encodedString.push(letter)
      }
    })
  } 
  else {
    //split the string into individual numbers or spaces
    const splitString = string.split("")
    const splitEncoded = []

    // initialising 2 variables, one that grabs the first item, the other the second, and it iterates by 2 so they jump over each other
    for (i=0, j=1;i<splitString.length,j<splitString.length;i+=2,j+=2) {
      // if the first string item is a space
      if (splitString[i] === " ") {
        // return it to the encoded array as is
        splitEncoded.push(splitString[i])
        // step back the i and j steppers so that they can iterate over the next item correctly
        i-=1
        j-=1
      }
      else {
        // otherwise, just add the numbers together into an item within the array
        splitEncoded.push(splitString[i] + splitString[j])
      }
    }
    splitEncoded.forEach(letter => {
      // again if the item is a space
      if (letter === " ") {
        // just return it into the encoded or decoded array
        encodedString.push(letter)
      }
      for (yAxis in letters) {
        for (xAxis in letters) {
          // if the first char in the item equals the x axis, and the second char in the item equals the y axis
          if (letter.charAt(0) == xAxis && letter.charAt(1) == yAxis) {
            // give me that letter with these coordinates from the polybius square
            encodedString.push(letters[yAxis][xAxis])
          }
        }
      } 
    })
  }
  // join the final encoded or decoded string and return it
  return encodedString.join("")
}

module.exports = polybius

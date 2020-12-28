function caesar(word, shift, encode = true) {
  if (!shift || shift === 0 || shift > 25 || shift < -25){
    return false
  }
  
  const encodedString = []
    
  if (encode === true) {
    word.split("").forEach(letter => {
      // regex for if input is a letter
      if (letter.match(/[a-z]/i)) {
        encodedASCII = letter.toLowerCase().charCodeAt() + shift
        // ASCII for the letter z is 122, so if it's above that, go ahead and 
        if (encodedASCII > 122) {
          // subtract 26(length of the english alphabet), this makes it so it loops to the beginning of the alphabet
          encodedASCII = encodedASCII - 26
          // decodes the ASCII to a string and pushes it to an array
          encodedString.push(String.fromCharCode(encodedASCII))
          // if it's not more than 122 just convert and push
        } else {encodedString.push(String.fromCharCode(encodedASCII))
          }
          // if it's not a letter, go ahead and push it as is
      } else {encodedString.push(letter)}
    })

  } else {
    word.split("").forEach(letter => {
  if (letter.match(/[a-z]/i)) {
    encodedASCII = letter.toLowerCase().charCodeAt() - shift
    // same code as above but the letter a is 97 in ASCII
    if (encodedASCII < 97) {
      // add 26(length of alphabet) so it would loop from the end of the alphabet
      encodedASCII = encodedASCII + 26
      encodedString.push(String.fromCharCode(encodedASCII))
    } else {encodedString.push(String.fromCharCode(encodedASCII))
      }
  } else {encodedString.push(letter)}
})
  }
  // join the items in the array which are the letters and return it
  return encodedString.join("")
}

module.exports = caesar

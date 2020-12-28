function caesar(word, shift, encode = true) {
  if (!shift || shift === 0 || shift > 25 || shift < -25){
    return false
  }
  
  const encodedString = []
    
  if (encode === true) {
    // checks if char is a letter, if it is, encodes it into ASCII modifies the number as appropriate and returns the correspnding letter
    word.split("").forEach(letter => {
      if (letter.match(/[a-z]/i)) {
        encodedASCII = letter.toLowerCase().charCodeAt() + shift
        console.log(encodedASCII)
        if (encodedASCII < 97) {
          encodedASCII = encodedASCII + 26
          encodedString.push(String.fromCharCode(encodedASCII))
        }
        else if (encodedASCII > 122) {
          encodedASCII = encodedASCII - 26
          encodedString.push(String.fromCharCode(encodedASCII))
        } else {encodedString.push(String.fromCharCode(encodedASCII))
          }
        // if it's not a letter, return as is
      } else {encodedString.push(letter)}
    })

  } else {
    word.split("").forEach(letter => {
  if (letter.match(/[a-z]/i)) {
    encodedASCII = letter.toLowerCase().charCodeAt() - shift
    if (encodedASCII > 122) {
          encodedASCII = encodedASCII - 26
          encodedString.push(String.fromCharCode(encodedASCII))
        }
    else if (encodedASCII < 97) {
      encodedASCII = encodedASCII + 26
      encodedString.push(String.fromCharCode(encodedASCII))
      
    } else {encodedString.push(String.fromCharCode(encodedASCII))
      }
  } else {encodedString.push(letter)}
})
  }
  return encodedString.join("")
}

module.exports = caesar

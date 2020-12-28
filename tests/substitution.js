const substitution = require("../src/substitution")
const {expect} = require("chai")

describe("substitution", () => {
  it("Should return false if the given alphabet isn't exactly 26 characters long.", () => {
    expect(substitution("thinkful", "short")).to.be.false
  })
  it("Should return false if there are any duplicate characters in the given alphabet", () => {
    expect(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")).to.be.false
  })

  it("Should maintain spaces and ignore casing in the message before encrypting", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
    const expected = 'elp xhm xf mbymwwmfj dne'
    expect(actual).to.equal(expected)
  })
  it("Should maintain spaces in the message after decoding", () => {
    const actual = substitution('elp xhm xf mbymwwmfj dne', "xoyqmcgrukswaflnthdjpzibev", false)
    const expected = "you are an excellent spy"
    expect(actual).to.equal(expected)
  })
})

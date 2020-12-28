const caesar = require ("../src/caesar")
const {expect} = require ("chai")

describe("caesar", () => {
  it("Should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
    expect(caesar("thinkful", 0)).to.be.false
    expect(caesar("thinkful", -26)).to.be.false
    expect(caesar("thinkful", 99)).to.be.false
    expect(caesar("thinkful")).to.be.false
  })
  it("Should ignore capital letters", () => {
    const actual = caesar("thinkful", 3)
    const expected = caesar("THINKFUL", 3)
    expect(actual).to.equal(expected)
  })
  it("Should when encoding handle shifts that go past the end of the alphabet", () => {
    const actual = caesar("zoo", 3)
    const expected = "crr"
    expect(actual).to.equal(expected)
  })
  it("Should shift in negative direction, maintaining special characters", () => {
    const actual = caesar("Test string", -3)
    const expected = "qbpq pqofkd"
    expect(actual).to.equal(expected)
  })
  it("Should maintain spaces and other nonalphabetic symbols in the message before encoding ", () => {
    const actual = caesar("This is a secret message!", 8)
    const expected = "bpqa qa i amkzmb umaaiom!"
    expect(actual).to.equal(expected)
  })
  it("Should maintain spaces and other nonalphabetic symbols in the message after decoding", () => {
    const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false)
    const expected = "This is a secret message!"
    expect(actual).to.equal(expected)
  })
})

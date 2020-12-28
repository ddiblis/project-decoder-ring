const polybius = require("../src/polybius")
const {expect} = require("chai")

describe("polybius", () => {
  it("Should return false if input numbers are uneven excluding spaces", () => {
    expect(polybius("443242 33421254134", false)).to.be.false
    expect(polybius("44324233521254134", false)).to.be.false
  })
  
  it("Should encrypt correctly", () => {
    const expected = "4432423352125413"
    const actual = polybius("thinkful")
    expect(actual).to.equal(expected)
  })
  it("Should return string of numbers while preserving spaces when encrypting", () => {
    const expected = '3251131343 2543241341'
    const actual = polybius("Hello world")
    expect(actual).to.equal(expected)
  })
  it("Should preserve spaces when decoding", () => {
    const expected = "hello world"
    const actual = polybius("3251131343 2543241341", false)
    expect(actual).to.eql(expected)
  })
  it("Should return return (i/j) for strings that include i or j letters", () => {
    const expected = "th(i/j)nkful"
    const actual = polybius("4432423352125413", false)
    expect(actual).to.eql(expected)
  })
})

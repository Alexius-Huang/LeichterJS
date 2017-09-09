const expect = require('expect.js')

export function checkTokenResult(expectedResults, actualResults) {
  let index = 0
  let tokenCount = 1
  let lineCount = 1

  for (let token of expectedResults) {
    /* Debug Log */
    if (token.type !== actualResults[index].type || token.value !== actualResults[index].value) {
      console.log(`Mismatched token - line: ${lineCount}, number: ${tokenCount}`)
    }

    /* Check Tokens */
    expect(token.type).to.be(actualResults[index].type)
    expect(token.value).to.be(actualResults[index].value)

    if (token.type === 'newline') { lineCount++; tokenCount = 1; } else tokenCount++
    index++
  }
}

const lexRuby = require('./lexer/lex_ruby.js').lexRuby
const parseRuby = require('./parser/parse_ruby.js').parseRuby
const className = 'lt'

export default function igniteRubyCode(element) {
  let codeString = element.innerText

  /* Parse the code for the first time into fundamental tokens */
  let lexedTokens = lexRuby(codeString)

  /* Secondary parse for complex combination syntax feature */
  const tokens = parseRuby(lexedTokens)

  /* Parsing Ruby code highlighting */
  element.innerText = ''
  for (let token of tokens) {
    let codeSegment = document.createElement('span')
    codeSegment.className = `${className} ${className}-${token.type}`
    codeSegment.innerText = token.value
    element.appendChild(codeSegment)
  }
}

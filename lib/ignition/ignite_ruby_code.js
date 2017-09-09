const lexRuby = require('./lexer/lex_ruby.js').lexRuby
const tokenizeRuby = require('./tokenizer/tokenize_ruby.js').tokenizeRuby
const className = 'lt'

export function igniteRubyCode(element) {
  let codeString = element.innerText

  /* Parse the code for the first time into fundamental tokens */
  let lexedTokens = lexRuby(codeString)

  /* Secondary parse for complex combination syntax feature */
  const tokens = tokenizeRuby(lexedTokens)

  /* Parsing Ruby code highlighting */
  element.innerText = ''
  for (let token of tokens) {
    let codeSegment = document.createElement('span')
    codeSegment.className = `${className} ${className}-${token.type}`
    codeSegment.innerText = token.value
    element.appendChild(codeSegment)
  }
}

const lexPython = require('./lexer/lex_python.js').lexPython
const parsePython = require('./parser/parse_python.js').parsePython
const className = 'lt'

export function ignitePythonCode(element) {
  let codeString = element.innerText

  /* Parse the code for the first time into fundamental tokens */
  let lexedTokens = lexPython(codeString)

  /* Secondary parse for complex combination syntax feature */
  const tokens = parsePython(lexedTokens)

  /* Parsing Python code highlighting */
  element.innerText = ''
  for (let token of tokens) {
    let codeSegment = document.createElement('span')
    codeSegment.className = `${className} ${className}-${token.type}`
    codeSegment.innerText = token.value
    element.appendChild(codeSegment)
  }
}

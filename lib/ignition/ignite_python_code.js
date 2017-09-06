const lexPython = require('./lexer/lex_python.js').lexPython
const tokenizePython = require('./tokenizer/tokenize_python.js').tokenizePython

export function ignitePythonCode(element) {
  let codeString = element.innerText

  /* Parse the code for the first time into fundamental tokens */
  let lexedTokens = lexPython(codeString)

  /* Secondary parse for complex combination syntax feature */
  const tokens = tokenizePython(lexedTokens)

  /* Parsing Python code highlighting */
  element.innerText = ''
  for (let token of tokens) {
    let codeSegment = document.createElement('span')
    codeSegment.className = `engz-${token.type}`
    codeSegment.innerText = token.value
    element.appendChild(codeSegment)
  }
}

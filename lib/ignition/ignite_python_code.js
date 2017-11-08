const lexPython = require('./lexer/lex_python.js').lexPython
const parsePython = require('./parser/parse_python.js').parsePython
const className = 'lt'

export default function ignitePythonCode(element, enableEscapedCharacter = false) {
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

  /* Dynamically Parse Escaped Character Style */
  if (enableEscapedCharacter) {
    const stringElements = element.getElementsByClassName('lt-string')
    for (let e of stringElements) {
      let string = e.innerText, result = '', value = '', char
      for (let i = 0, l = string.length; i < l; i++) {
        let char = string[i]
        if (char === '\\') {
          if (value) {
            result += value
            value = ''
          }
          result += `<span class="lt lt-escaped-character">${char + string[++i]}</span>`
        } else value += char
      }
      if (value) result += value
      e.innerHTML = result
    }  
  }
}

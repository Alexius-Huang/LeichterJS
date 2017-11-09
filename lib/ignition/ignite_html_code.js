import lexHTML   from './lexer/lex_html.js'
import parseHTML from './parser/parse_html.js'
const className = 'lt'

export default function igniteHTMLCode(element, enableEscapedCharacter = false) {
  let codeString = element.innerText

  /* Parse the code for the first time into fundamental tokens */
  let lexedTokens = lexHTML(codeString)

  /* Secondary parse for complex combination syntax feature */
  const tokens = parseHTML(lexedTokens)

  /* Parsing HTML code highlighting */
  element.innerText = ''
  for (let token of tokens) {
    let codeSegment = document.createElement('span')
    if (token instanceof Array) {
      /* Current token is a HTML tag */
      codeSegment.className = `${className} ${className}-html-tag`
      for (let innerToken of token) {
        let innerCodeSegment = document.createElement('span')
        innerCodeSegment.className = `${className} ${className}-${innerToken.type}`
        innerCodeSegment.innerText = innerToken.value
        codeSegment.appendChild(innerCodeSegment)
      }
    } else {
      codeSegment.className = `${className} ${className}-${token.type}`
      codeSegment.innerText = token.value
    }
    element.appendChild(codeSegment)
  }
}

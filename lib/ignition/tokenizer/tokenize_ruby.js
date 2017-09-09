/*
 * Ruby Tokenizer
 * 
 * Basically tokenizer is for the secondary parse of the tokens
 * in order to parse complex token combinations or types
 *
 */

export function tokenizeRuby(tokens) {
  let tokenPosition = 0
  let currentToken = tokens[0]
  let peekToken = tokens[1]

  function nextToken() {
    tokenPosition++
    currentToken = tokens[tokenPosition]
    peekToken = tokens[tokenPosition + 1]
  }

  function parseArgumentTokens() {
    while (currentToken && ['right-parentheses', 'newline', 'semicolon'].indexOf(currentToken.type) === -1) {
      if (currentToken.type === 'default') {
        currentToken.type = 'argument'
      }
      nextToken()
    }
  }

  while (currentToken) {
    switch(currentToken.type) {
      case 'keyword':
        if (currentToken.value === 'def' && peekToken && peekToken.type === 'space') {
          nextToken()
          if (peekToken && peekToken.type === 'default') {
            peekToken.type = 'function-name'
          }
        } else if (currentToken.value === 'class' && peekToken && peekToken.type === 'space') {
          nextToken()
          if (peekToken && peekToken.type === 'default') {
            peekToken.type = 'class-name'
          }
        }
        nextToken()
        break;

      case 'function-name':
      case 'class-name':
        parseArgumentTokens()
        break

      case 'default':
        if (!isNaN(currentToken.value)) {
          currentToken.type = 'number'
        }
        nextToken()
        break;

      default:
        nextToken()
    }
  }

  return tokens
}
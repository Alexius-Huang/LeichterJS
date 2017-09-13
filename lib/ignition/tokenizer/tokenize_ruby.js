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
    return currentToken
  }

  function peekTokenIs(type) {
    return peekToken && peekToken.type === type
  }

  function tokenizeArguments() {
    while (currentToken && ['right-parentheses', 'newline', 'semicolon'].indexOf(currentToken.type) === -1) {
      if (currentToken.type === 'default') {
        currentToken.type = 'argument'
      }
      nextToken()
    }
  }

  function tokenizeClassScope() {
    nextToken() /* Current token type is space */
    if (peekTokenIs('default')) {
      peekToken.type = 'class-name'

      /* Match the Inheritance Pattern */
      if (
        nextToken() && peekTokenIs('space')    &&
        nextToken() && peekTokenIs('operator') && peekToken.value === '<' &&
        nextToken() && peekTokenIs('space')    &&
        nextToken() && peekTokenIs('default')
      ) {
        peekToken.type = 'inherited-class'
      }
    }
  }

  function isGlobalVariable() {
    return currentToken.value[0] === '$'
  }

  while (currentToken) {
    switch(currentToken.type) {
      case 'keyword':
        if (currentToken.value === 'def' && peekTokenIs('space')) {
          if (nextToken() && peekTokenIs('default')) {
            peekToken.type = 'function-name'
          }
        } else if (currentToken.value === 'class' && peekTokenIs('space')) {
          tokenizeClassScope()
        }
        nextToken()
        break;

      case 'function-name':
        tokenizeArguments()
        break

      case 'default':
        if (!isNaN(currentToken.value)) {
          currentToken.type = 'number'
        } else if (isGlobalVariable(currentToken)) {
          currentToken.type = 'global-variable'
        }
        nextToken()
        break;

      default:
        nextToken()
    }
  }

  return tokens
}

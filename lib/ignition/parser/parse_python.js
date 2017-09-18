/*
 * Python Parser
 * 
 * Basically parser is for the parsing complex token combinations or types
 */

export function parsePython(tokens) {
  let tokenPosition = 0
  let currentToken = tokens[0]
  let peekToken = tokens[1]

  function nextToken() {
    tokenPosition++
    currentToken = tokens[tokenPosition]
    peekToken = tokens[tokenPosition + 1]
  }

  function parseArray() {
    while(currentToken && currentToken.type != 'right-bracket') {
      if (currentToken.type === 'default' && !isNaN(currentToken.value)) {
        currentToken.type = 'number'
      }
      nextToken()
    }
  }

  function parseArgumentTokens() {
    while (currentToken && !(currentToken.type === 'right-parentheses' && peekToken.type === 'colon')) {
      if (currentToken.type === 'default') {
        currentToken.type = 'argument'
      } else if (currentToken.type === 'operator' && currentToken.value === '=') {
        /* Argument with Default Value */
        while (currentToken && currentToken.type !== 'comma') {
          if (currentToken.type === 'default' && !isNaN(currentToken.value)) {
            currentToken.type = 'number'
          } else if (currentToken.type === 'left-bracket') {
            parseArray()
          }
          nextToken()
        }
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
        if (peekToken && peekToken.type === 'left-parentheses') {
          parseArgumentTokens()
        }
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

/*
 * HTML Parser
 * 
 * Basically parser is for the parsing complex token combinations or types
 */

import { $tags as T } from '../keywords/html'

Array.prototype.includes = function (item) {
  return this.indexOf(item) !== -1
}

export default function parseHTML(tokens) {
  let tokenPosition = 0
  let currentToken = tokens[0]
  let peekToken = tokens[1]

  function nextToken() {
    tokenPosition++
    currentToken = tokens[tokenPosition]
    peekToken = tokens[tokenPosition + 1]
  }

  while (currentToken) {
    /* Tag Level Parsing */
    if (currentToken instanceof Array) {
      for (let i = 0; i < currentToken.length; i++) {
        let innerToken = currentToken[i]
        let peekInnerToken = currentToken[i + 1]

        switch(innerToken.type) {
          case 'default':
            innerToken.type = T.includes(innerToken.value) ? 'tag-name' : 'attribute'
            break
        }
      }
    }

    nextToken()
  }

  return tokens
}

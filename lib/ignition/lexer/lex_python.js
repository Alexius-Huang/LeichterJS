const K = require('../keywords/python')

String.prototype.last = function() {
  return this[this.length - 1]
}
Array.prototype.includes = function(item) {
  return this.indexOf(item) !== -1
}

export function lexPython(code) {
  let currentChar = code[0]
  let peekChar = code[1]
  let charPosition = 0
  let lexedValue = ''
  let tokens = []

  function readChar() {
    charPosition++
    currentChar = code[charPosition]
    peekChar = code[charPosition + 1]
  }

  function readString() {
    let lexedString = currentChar
    readChar()

    if (currentChar === lexedString[0] && peekChar === lexedString) {
      /* Multi-line String Case */
      lexedString += currentChar
      readChar()
      lexedString += currentChar
      readChar()

      let stringClosing = [lexedString[0], lexedString[0], lexedString[0]].join('')

      while(currentChar && currentChar + peekChar + code[charPosition + 2] != stringClosing) {

        /* Escaped Character Case */
        if (currentChar === '\\') {
          lexedString += currentChar
          readChar()
        }

        lexedString += currentChar
        readChar()
      }

      for(let i = 0; i < 3; i++) {
        if (currentChar) {
          lexedString += currentChar
        } else break
        readChar()
      }
    } else {
      /* Single Line String Case */
      while (currentChar != lexedString[0] && currentChar !== '\n') {

        /* Escaped Character Case */
        if (currentChar === '\\') {
          lexedString += currentChar
          readChar()
        }

        lexedString += currentChar
        readChar()
      }

      if (currentChar !== '\n') {
        /* Current charcacter is the closing string */
        lexedString += currentChar
        readChar()
      }
    }

    /* Push String Token */
    tokens.push({ type: 'string', value: lexedString })
  }

  function readSpace() {
    let spaces = currentChar
    readChar()

    while (currentChar == ' ') {
      spaces += ' '
      readChar()
    }

    tokens.push({ type: 'space', value: spaces })
  }

  function readComment() {
    let commentString = currentChar
    readChar()

    while (currentChar !== undefined && currentChar != '\n') {
      commentString += currentChar
      readChar()
    }

    tokens.push({ type: 'comment', value: commentString })
  }

  function tokenizeLexedValue() {
    if (lexedValue) {
      for (let type of Object.keys(K)) {
        if (K[type].includes(lexedValue)) {
          tokens.push({ type: type.slice(1), value: lexedValue })
          lexedValue = ''
          break;
        }
      }

      if (lexedValue) {
        tokens.push({ type: 'default', value: lexedValue })
        lexedValue = ''
      }
    }
  }

  while (currentChar !== undefined) {
    switch(currentChar) {
      case ' ':
        tokenizeLexedValue()
        readSpace()
        break;

      case '"':
      case '\'':
        tokenizeLexedValue()
        readString()
        break;

      case '=':
      case '+':
      case '-':
      case '*':
      case '/':
      case '%':
      case '>':
      case '<':
      case '|':
      case '&':
        tokenizeLexedValue()
        tokens.push({ type: 'operator', value: currentChar })
        readChar()
        break;

      case ':':
        tokenizeLexedValue()
        tokens.push({ type: 'colon', value: ':' })
        readChar()
        break

      case '[':
        tokenizeLexedValue()
        tokens.push({ type: 'left-bracket', value: '[' })
        readChar()
        break

      case ']':
        tokenizeLexedValue()
        tokens.push({ type: 'right-bracket', value: ']' })
        readChar()
        break

      case '(':
        tokenizeLexedValue()
        tokens.push({ type: 'left-parentheses', value: '(' })
        readChar()
        break

      case ')':
        tokenizeLexedValue()
        tokens.push({ type: 'right-parentheses', value: ')' })
        readChar()
        break

      case '{':
        tokenizeLexedValue()
        tokens.push({ type: 'left-brace', value: '{' })
        readChar()
        break
  
      case '}':
        tokenizeLexedValue()
        tokens.push({ type: 'right-brace', value: '}' })
        readChar()
        break

      case ',':
        tokenizeLexedValue()
        tokens.push({ type: 'comma', value: ',' })
        readChar()
        break

      case ';':
        tokenizeLexedValue()
        tokens.push({ type: 'semicolon', value: ':' })
        readChar()
        break

      case '\n':
        tokenizeLexedValue()
        tokens.push({ type: 'newline', value: '\n' })
        readChar()
        break

      case '#':
        readComment()
        break

      default:
        lexedValue += currentChar
        readChar()
    }
  }

  if (lexedValue) tokenizeLexedValue()

  return tokens
}

import { $charMap as M, $tagCharMap as TM } from '../char_mapping/html'

String.prototype.last = function () {
  return this[this.length - 1]
}
Array.prototype.includes = function (item) {
  return this.indexOf(item) !== -1
}

export default function lexHTML(code) {
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

  function readString(targetTokenStack = tokens) {
    let lexedString = currentChar
    readChar()

    /* Single Line String Case */
    while (currentChar != lexedString[0] && currentChar !== '\n') {
      lexedString += currentChar
      readChar()
    }

    if (currentChar !== '\n') {
      /* Current charcacter is the closing string */
      lexedString += currentChar
      readChar()
    }

    /* Push String Token */
    targetTokenStack.push({ type: 'string', value: lexedString })
  }

  function readSpace(targetTokenStack = tokens) {
    let spaces = currentChar
    readChar()

    while (currentChar == ' ') {
      spaces += ' '
      readChar()
    }

    targetTokenStack.push({ type: 'space', value: spaces })
  }

  /* Setting functions in tag char mapping */
  TM.set(' ', readSpace)
  TM.set('"', readString)
  TM.set('\'', readString)

  function readTag() {
    /* For lexing HTML tags only */
    let tagTokens = [{ type: 'left-angle-bracket', value: '<' }]
    readChar()

    while (currentChar !== undefined) {
      /* End tag if current character is the closing bracket */
      if (currentChar === '>') {
        tokenizeLexedValue(tagTokens)
        tagTokens.push({ type: 'right-angle-bracket', value: '>' })
        readChar()
        break
      }

      if (TM.has(currentChar)) {
        tokenizeLexedValue(tagTokens)

        let value = TM.get(currentChar)
        if (typeof value === 'string') {
          tagTokens.push({ type: value, value: currentChar })
          readChar()
        } else if (typeof value === 'function') {
          /* Call function for specific lexing method */
          value(tagTokens)
        } else {
          console.log('Error')
        }
      }
      /* Parse default identifier */
      else {
        lexedValue += currentChar
        readChar()
      }
    }

    /* Push back to the main tokens stack */
    tokens.push(tagTokens)
  }

  function tokenizeLexedValue(targetTokenStack = tokens) {
    if (lexedValue) {
      targetTokenStack.push({ type: 'default', value: lexedValue })
      lexedValue = ''
    }
  }

  /* Setting function as values in character mapping */
  M.set(' ', readSpace)
  M.set('<', readTag)

  while (currentChar !== undefined) {

    /* Maps to special character and convert into tokens */
    if (M.has(currentChar)) {
      tokenizeLexedValue();

      let value = M.get(currentChar)
      if (typeof value === 'string') {
        tokens.push({ type: value, value: currentChar })
        readChar()
      } else if (typeof value === 'function') {
        /* Call function for specific lexing method */
        value()
      } else {
        console.log('Error')
      }
    }
    /* Parse default identifier */
    else {
      lexedValue += currentChar
      readChar()
    }

  }

  if (lexedValue) tokenizeLexedValue()

  return tokens
}

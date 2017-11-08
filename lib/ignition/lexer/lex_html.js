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

  function readTag() {
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

      switch(currentChar) {
        case ' ':
          tokenizeLexedValue(tagTokens)
          readSpace(tagTokens)
          break

        case '"':
        case '\'':
          tokenizeLexedValue(tagTokens)
          readString(tagTokens)
          break

        case '=':
          tokenizeLexedValue(tagTokens)
          tagTokens.push({ type: 'assignment-operator', value: '=' })
          readChar()
          break

        case '/':
          tokenizeLexedValue(tagTokens)
          tagTokens.push({ type: 'slash', value: '/' })
          readChar()
          break

        case '\n':
          tokenizeLexedValue(tagTokens)
          tagTokens.push({ type: 'newline', value: '\n' })
          readChar()
          break

        default:
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

  while (currentChar !== undefined) {
    switch (currentChar) {
      case ' ':
        tokenizeLexedValue()
        readSpace()
        break;

      case '<':
        tokenizeLexedValue()
        readTag()
        break

      case '\n':
        tokenizeLexedValue()
        tokens.push({ type: 'newline', value: '\n' })
        readChar()
        break

      default:
        lexedValue += currentChar
        readChar()
    }
  }

  if (lexedValue) tokenizeLexedValue()

  return tokens
}

const $keywords = ['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
const $functions = ['abs', 'dict', 'help', 'min', 'setattr', 'all', 'dir', 'hex', 'next', 'slice', 'any', 'divmod', 'id', 'object', 'sorted', 'ascii', 'enumerate', 'input', 'oct', 'staticmethod', 'bin', 'eval', 'int', 'open', 'str', 'bool', 'exec', 'isinstance', 'ord', 'sum', 'bytearray', 'filter', 'issubclass', 'pow', 'super', 'bytes', 'float', 'iter', 'print', 'tuple', 'callable', 'format', 'len', 'property', 'type', 'chr', 'frozenset', 'list', 'range', 'vars', 'classmethod', 'getattr', 'locals', 'repr', 'zip', 'compile', 'globals', 'map', 'reversed', '_import_', 'complex', 'hasattr', 'max', 'round', 'delattr', 'hash', 'memoryview', 'set']

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
    
    while (currentChar != lexedString[0] && currentChar !== '\n') {
      lexedString += currentChar
      readChar()
    }

    if (currentChar !== '\n') {
      /* Current charcacter is the closing string */
      lexedString += currentChar
      readChar()
    }

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

    while (currentChar != '\n') {
      commentString += currentChar
      readChar()
    }

    tokens.push({ type: 'comment', value: commentString })
  }

  function tokenizeLexedValue() {
    if (lexedValue) {
      if ($keywords.includes(lexedValue)) {
        tokens.push({ type: 'keyword', value: lexedValue })
      } else if ($functions.includes(lexedValue)) {
        tokens.push({ type: 'function', value: lexedValue })
      } else {
        tokens.push({ type: 'default', value: lexedValue })
      }
      lexedValue = ''
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

  return tokens
}

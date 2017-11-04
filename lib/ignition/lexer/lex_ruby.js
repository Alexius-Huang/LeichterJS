const $keywords = ['alias ', 'and', 'BEGIN', 'begin', 'break', 'case', 'class', 'def', 'defined?', 'do', 'else', 'elsif', 'END', 'end', 'ensure', 'false', 'for', 'if', 'in', 'module', 'next', 'nil', 'not', 'or', 'redo', 'rescue', 'retry', 'return', 'self', 'super', 'then', 'true', 'undef', 'unless', 'until', 'when', 'while', 'yield']
const $functions = ['include', 'using', 'public', 'private', 'define_method', 'irb_exit_org',  'default_src_encoding', 'irb_binding', 'sprintf', 'format',  'catch', 'throw', 'loop', 'block_given?', 'trace_var', 'untrace_var', 'at_exit', 'set_trace_func', 'caller', 'caller_locations', 'select', 'test', 'fork', '`', 'sleep', 'gem_original_require', 'respond_to_missing?', 'load', 'exec', 'exit!', 'system', 'spawn', 'abort', 'syscall', 'printf', 'open', 'putc', 'print', 'readline', 'puts', 'p', 'readlines', 'rand', 'gets', 'srand', 'proc', 'lambda', 'gem', 'initialize_copy', 'initialize_clone', 'initialize_dup', 'trap', 'require', 'require_relative', 'autoload', 'autoload?', 'binding', 'local_variables', 'warn', 'raise', 'fail', 'global_variables', '__method__', '__callee__', '__dir__', 'eval', 'iterator?', 'method_missing', 'singleton_method_added', 'singleton_method_removed', 'singleton_method_undefined', 'initialize']

String.prototype.last = function() {
  return this[this.length - 1]
}
Array.prototype.includes = function(item) {
  return this.indexOf(item) !== -1
}

export function lexRuby(code) {
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
        tokenizeLexedValue()
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

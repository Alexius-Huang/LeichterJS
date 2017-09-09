const expect = require('expect.js')
let lexPython = require('../../lib/ignition/lexer/lex_python').lexPython
let tokenizePython = require('../../lib/ignition/tokenizer/tokenize_python').tokenizePython

const T = {
  space: (value = ' ') => ({ type: 'space',             value: value }),
  newline: ()          => ({ type: 'newline',           value: '\n' }),
  default: (value)     => ({ type: 'default',           value: value }),
  keyword: (value)     => ({ type: 'keyword',           value: value }),
  operator: (value)    => ({ type: 'operator',          value: value }),
  colon: ()            => ({ type: 'colon',             value: ':' }),
  func: (value)        => ({ type: 'function',          value: value }),
  leftParentheses: ()  => ({ type: 'left-parentheses',  value: '(' }),
  rightParentheses: () => ({ type: 'right-parentheses', value: ')' }),
  string: (value)      => ({ type: 'string',            value: value }),
  comment: (value)     => ({ type: 'comment',           value: value }),
  number: (value)      => ({ type: 'number',            value: value }),
  argument: (value)    => ({ type: 'argument',          value: value }),
  funcName: (value)    => ({ type: 'function-name',     value: value }),
  className: (value)   => ({ type: 'class-name',        value: value })
}

describe('Python Tokenizer', function() {
  /* Implement Tokenizer Tests Here */
})

export const T = {
  space: (value = ' ') => ({ type: 'space',             value: value }),
  default: (value)     => ({ type: 'default',           value: value }),
  keyword: (value)     => ({ type: 'keyword',           value: value }),
  logical: (value)     => ({ type: 'logical',           value: value }),
  nullity: (value)     => ({ type: 'nullity',           value: value }),
  boolean: (value)     => ({ type: 'boolean',           value: value }),
  operator: (value)    => ({ type: 'operator',          value: value }),
  func: (value)        => ({ type: 'function',          value: value }),
  string: (value)      => ({ type: 'string',            value: value }),
  comment: (value)     => ({ type: 'comment',           value: value }),
  number: (value)      => ({ type: 'number',            value: value }),
  argument: (value)    => ({ type: 'argument',          value: value }),
  funcName: (value)    => ({ type: 'function-name',     value: value }),
  className: (value)   => ({ type: 'class-name',        value: value }),
  newline: ()          => ({ type: 'newline',           value: '\n' }),
  colon: ()            => ({ type: 'colon',             value: ':' }),
  comma: ()            => ({ type: 'comma',             value: ',' }),
  leftParentheses: ()  => ({ type: 'left-parentheses',  value: '(' }),
  rightParentheses: () => ({ type: 'right-parentheses', value: ')' }),
  leftBracket: ()      => ({ type: 'left-bracket',      value: '[' }),
  rightBracket: ()     => ({ type: 'right-bracket',     value: ']' }),
}

export const $charMap = new Map([
  /* Implemented a readSpace function in python lexing */
  [' ', 'READ_SPACE_FUNC'],

  /* Implemented a readString function in python lexing */
  ['"', 'READ_STRING_FUNC'],
  ['\'', 'READ_STRING_FUNC'],

  ['=', 'operator'],
  ['+', 'operator'],
  ['-', 'operator'],
  ['*', 'operator'],
  ['/', 'operator'],
  ['%', 'operator'],
  ['>', 'operator'],
  ['<', 'operator'],
  ['|', 'operator'],
  ['&', 'operator'],
  [':', 'colon'],
  ['[', 'left-bracket'],
  [']', 'right-bracket'],
  ['(', 'left-parentheses'],
  [')', 'right-parentheses'],
  ['{', 'left-brace'],
  ['}', 'right-brace'],
  [',', 'comma'],
  [';', 'semicolon'],
  ['\n', 'newline'],

  /* Implement a readComment function in python lexing */
  ['#', 'READ_COMMENT_FUNC'],
])
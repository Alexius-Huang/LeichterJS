export const $charMap = new Map([
  /* Implemented a readSpace function in HTML lexing */
  [' ', 'READ_SPACE_FUNC'],

  /* Implementad a raedTag function in HTML lexing */
  ['<', 'READ_TAG_FUNC'],

  ['\n', 'newline'],
])

export const $tagCharMap = new Map([
  /* Implemented a readSpace function in HTML lexing */
  [' ', 'READ_SPACE_FUNC'],

  /* Implementad a raedString function in HTML lexing */
  ['"', 'READ_STRING_FUNC'],
  ['\'', 'READ_STRING_FUNC'],

  ['=', 'assignment-operator'],
  ['/', 'slash'],
  ['\n', 'newline'],
])

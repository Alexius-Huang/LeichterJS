const expect = require('expect.js')
let lexPython = require('../../lib/ignition/lexer/lex_python').lexPython

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
  comment: (value)     => ({ type: 'comment',           value: value })
}

describe('Python Lexer', function() {
  let importStatement = 'import os.path as path'
  let ifElseStatement = [
    'age = 16',
    'if age <= 18:',
    '    print("Young")',
    'elif age <= 60:',
    '    print("Adult")',
    'else:',
    '    print("Old")',
    '# => "Young"'
  ].join('\n')
  let forLoopStatement = [
    's = 0',
    'for i in range(10):',
    '    s += i',
    '# s = 45'
  ].join('\n')
  let whileLoopStatement = [
    'i = 0',
    'while i < 10:',
    '    i += 1',
    '# i = 10'
  ].join('\n')
  let defineMethodStatement = [
    'def hello(name):',
    '    print("Hello! " + name + " !")',
    '',
    'hello("Maxwell") # => "Hello! Maxwell!"'
  ].join('\n')
  let singleLineComment = [
    '2 ** 10        # => 1024',
    'print("Hello") # => "Hello"',
    '# => "Comment"'
  ].join('\n')
  /* TODO: Support Escaped Character */
  let singleLineString = [
    '"Hello World!"',
    'print("Maxwell " + " Alexius")',
    '\'Single quoted string\''
  ].join('\n')
  let multiLineString = [
    '"""Test Multi-line string',
    '[ i * 2 for i in range(10) ]',
    'hello world print("Maxwell")',
    '"""',
    'print("Test Multi-line string:" + """',
    '  LeichterJS created by',
    '     Maxwell Alexius  """',
    '',
    '" Hello Again! " + """ Maxwell',
    '',
    'Alexius',
    '"""'
  ].join('\n')

  describe('Lex Python Statements', function() {
    it('parses the import statement', function() {
      let actualResults = lexPython(importStatement)
      let expectedResults = [
        T.keyword('import'), T.space(), T.default('os.path'), T.space(), T.keyword('as'), T.space(), T.default('path')
      ]
      checkLexedResult(expectedResults, actualResults)
    })

    describe('Conditional Statements', function() {
      it('parses the if...else... statement', function() {
        let actualResults = lexPython(ifElseStatement)
        let expectedResults = [
          T.default('age'), T.space(), T.operator('='), T.space(), T.default('16'), T.newline(),
          T.keyword('if'), T.space(), T.default('age'), T.space(), T.operator('<'), T.operator('='), T.space(), T.default('18'), T.colon(), T.newline(),
          T.space('    '), T.func('print'), T.leftParentheses(), T.string('"Young"'), T.rightParentheses(), T.newline(),
          T.keyword('elif'), T.space(), T.default('age'), T.space(), T.operator('<'), T.operator('='), T.space(), T.default('60'), T.colon(), T.newline(),
          T.space('    '), T.func('print'), T.leftParentheses(), T.string('"Adult"'), T.rightParentheses(), T.newline(),
          T.keyword('else'), T.colon(), T.newline(),
          T.space('    '), T.func('print'), T.leftParentheses(), T.string('"Old"'), T.rightParentheses(), T.newline(),
          T.comment('# => "Young"')
        ]

        checkLexedResult(expectedResults, actualResults)
      })
    })

    describe('Looping Statements', function() {
      it('parses the for...in... loop statement', function() {
        let actualResults = lexPython(forLoopStatement)
        let expectedResults = [
          T.default('s'), T.space(), T.operator('='), T.space(), T.default('0'), T.newline(),
          T.keyword('for'), T.space(), T.default('i'), T.space(), T.keyword('in'), T.space(), T.func('range'), T.leftParentheses(), T.default('10'), T.rightParentheses(), T.colon(), T.newline(),
          T.space('    '), T.default('s'), T.space(), T.operator('+'), T.operator('='), T.space(), T.default('i'), T.newline(),
          T.comment('# s = 45')
        ]

        checkLexedResult(expectedResults, actualResults)
      })

      it('parses the while loop statement', function() {
        let actualResults = lexPython(whileLoopStatement)
        let expectedResults = [
          T.default('i'), T.space(), T.operator('='), T.space(), T.default('0'), T.newline(),
          T.keyword('while'), T.space(), T.default('i'), T.space(), T.operator('<'), T.space(), T.default('10'), T.colon(), T.newline(),
          T.space('    '), T.default('i'), T.space(), T.operator('+'), T.operator('='), T.space(), T.default('1'), T.newline(),
          T.comment('# i = 10')
        ]

        checkLexedResult(expectedResults, actualResults)
      })
    })

    describe('Define method statement', function() {
      it('parses the define method statement', function() {
        let actualResults = lexPython(defineMethodStatement)
        let expectedResults = [
          T.keyword('def'), T.space(), T.default('hello'), T.leftParentheses(), T.default('name'), T.rightParentheses(), T.colon(), T.newline(),
          T.space('    '), T.func('print'), T.leftParentheses(), T.string('"Hello! "'), T.space(), T.operator('+'), T.space(), T.default('name'), T.space(), T.operator('+'), T.space(), T.string('" !"'), T.rightParentheses(), T.newline(),
          T.newline(),
          T.default('hello'), T.leftParentheses(), T.string('"Maxwell"'), T.rightParentheses(), T.space(), T.comment('# => "Hello! Maxwell!"')
        ]

        checkLexedResult(expectedResults, actualResults)
      })
    })
  })

  describe('Comment', function() {
    it('parses the single line comment', function() {
      let actualResults = lexPython(singleLineComment)
      let expectedResults = [
        T.default('2'), T.space(), T.operator('*'), T.operator('*'), T.space(), T.default('10'), T.space('        '), T.comment('# => 1024'), T.newline(),
        T.func('print'), T.leftParentheses(), T.string('"Hello"'), T.rightParentheses(), T.space(), T.comment('# => "Hello"'), T.newline(),
        T.comment('# => "Comment"')
      ]

      checkLexedResult(expectedResults, actualResults)
    })
  })

  describe('String', function() {
    it('parses the single line string', function() {
      let actualResults = lexPython(singleLineString)
      let expectedResults = [
        T.string('"Hello World!"'), T.newline(),
        T.func('print'), T.leftParentheses(), T.string('"Maxwell "'), T.space(), T.operator('+'), T.space(), T.string('" Alexius"'), T.rightParentheses(), T.newline(),
        T.string('\'Single quoted string\'')
      ]

      checkLexedResult(expectedResults, actualResults)
    })
    
    it('parses the multi-line string', function() {
      let actualResults = lexPython(multiLineString)
      let expectedResults = [
        T.string('"""Test Multi-line string\n[ i * 2 for i in range(10) ]\nhello world print("Maxwell")\n"""'), T.newline(),
        T.func('print'), T.leftParentheses(), T.string('"Test Multi-line string:"'), T.space(), T.operator('+'), T.space(), T.string('"""\n  LeichterJS created by\n     Maxwell Alexius  """'), T.newline(),
        T.newline(),
        T.string('" Hello Again! "'), T.space(), T.operator('+'), T.space(), T.string('""" Maxwell\n\nAlexius\n"""')
      ]

      checkLexedResult(expectedResults, actualResults)
    })
  })

  // TODO: Expressions
  // describe('Lex Python Experssion', function() {
  //   it('parses the import statement', function() {
  //   })
  // })
})


function checkLexedResult(expectedResults, actualResults) {
  let index = 0
  let tokenCount = 1
  let lineCount = 1

  for (let token of expectedResults) {
    /* Debug Log */
    if (token.type !== actualResults[index].type || token.value !== actualResults[index].value) {
      console.log(`Mismatched token - line: ${lineCount}, number: ${tokenCount}`)
    }

    /* Check Tokens */
    expect(token.type).to.be(actualResults[index].type)
    expect(token.value).to.be(actualResults[index].value)

    if (token.type === 'newline') { lineCount++; tokenCount = 1; } else tokenCount++
    index++
  }
}
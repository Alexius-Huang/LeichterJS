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
  string: (value)      => ({ type: 'string',            value: `"${value}"` }),
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
          T.space('    '), T.func('print'), T.leftParentheses(), T.string('Young'), T.rightParentheses(), T.newline(),
          T.keyword('elif'), T.space(), T.default('age'), T.space(), T.operator('<'), T.operator('='), T.space(), T.default('60'), T.colon(), T.newline(),
          T.space('    '), T.func('print'), T.leftParentheses(), T.string('Adult'), T.rightParentheses(), T.newline(),
          T.keyword('else'), T.colon(), T.newline(),
          T.space('    '), T.func('print'), T.leftParentheses(), T.string('Old'), T.rightParentheses(), T.newline(),
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

    describe('define method statement', function() {
      it('parses the define method statement', function() {
        let actualResults = lexPython(defineMethodStatement)
        let expectedResults = [
          T.keyword('def'), T.space(), T.default('hello'), T.leftParentheses(), T.default('name'), T.rightParentheses(), T.colon(), T.newline(),
          T.space('    '), T.func('print'), T.leftParentheses(), T.string('Hello! '), T.space(), T.operator('+'), T.space(), T.default('name'), T.space(), T.operator('+'), T.space(), T.string(' !'), T.rightParentheses(), T.newline(),
          T.newline(),
          T.default('hello'), T.leftParentheses(), T.string('Maxwell'), T.rightParentheses(), T.space(), T.comment('# => "Hello! Maxwell!"')
        ]

        checkLexedResult(expectedResults, actualResults)
      })
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

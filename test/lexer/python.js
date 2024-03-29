const checkTokenResult = require('../helpers/check_token_result').checkTokenResult
const T = require('../helpers/python_tokens').T
const Python = require('../samples/python.js').Python
let lexPython = require('../../lib/ignition/lexer/lex_python').lexPython

describe('Python Lexer', function() {
  describe('Lex Python Fundamental Tokens', function() {
    it('lexes the boolean, nullity and logical tokens in Python lexer', function() {
      let actualResults = lexPython('True and False or not None\n1 in range(10)')
      let expectedResults = [
        T.boolean('True'), T.space(), T.logical('and'), T.space(), T.boolean('False'), T.space(), T.logical('or'), T.space(), T.logical('not'), T.space(), T.nullity('None'), T.newline(),
        T.default('1'), T.space(), T.logical('in'), T.space(), T.func('range'), T.leftParentheses(), T.default('10'), T.rightParentheses()
      ]

      checkTokenResult(expectedResults, actualResults)
    })
  })

  describe('Lex Python Statements', function() {
    it('lexes the import statement', function() {
      let actualResults = lexPython(Python.importStatement)
      let expectedResults = [
        T.keyword('import'), T.space(), T.default('os.path'), T.space(), T.keyword('as'), T.space(), T.default('path')
      ]
      checkTokenResult(expectedResults, actualResults)
    })

    describe('Conditional Statements', function() {
      it('lexes the if...else... statement', function() {
        let actualResults = lexPython(Python.ifElseStatement)
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

        checkTokenResult(expectedResults, actualResults)
      })
    })

    describe('Looping Statements', function() {
      it('lexes the for...in... loop statement', function() {
        let actualResults = lexPython(Python.forLoopStatement)
        let expectedResults = [
          T.default('s'), T.space(), T.operator('='), T.space(), T.default('0'), T.newline(),
          T.keyword('for'), T.space(), T.default('i'), T.space(), T.logical('in'), T.space(), T.func('range'), T.leftParentheses(), T.default('10'), T.rightParentheses(), T.colon(), T.newline(),
          T.space('    '), T.default('s'), T.space(), T.operator('+'), T.operator('='), T.space(), T.default('i'), T.newline(),
          T.comment('# s = 45')
        ]

        checkTokenResult(expectedResults, actualResults)
      })

      it('lexes the while loop statement', function() {
        let actualResults = lexPython(Python.whileLoopStatement)
        let expectedResults = [
          T.default('i'), T.space(), T.operator('='), T.space(), T.default('0'), T.newline(),
          T.keyword('while'), T.space(), T.default('i'), T.space(), T.operator('<'), T.space(), T.default('10'), T.colon(), T.newline(),
          T.space('    '), T.default('i'), T.space(), T.operator('+'), T.operator('='), T.space(), T.default('1'), T.newline(),
          T.comment('# i = 10')
        ]

        checkTokenResult(expectedResults, actualResults)
      })
    })

    describe('Define method statement', function() {
      it('lexes the define method statement', function() {
        let actualResults = lexPython(Python.defineMethodStatement)
        let expectedResults = [
          T.keyword('def'), T.space(), T.default('hello'), T.leftParentheses(), T.default('name'), T.rightParentheses(), T.colon(), T.newline(),
          T.space('    '), T.func('print'), T.leftParentheses(), T.string('"Hello! "'), T.space(), T.operator('+'), T.space(), T.default('name'), T.space(), T.operator('+'), T.space(), T.string('" !"'), T.rightParentheses(), T.newline(),
          T.newline(),
          T.default('hello'), T.leftParentheses(), T.string('"Maxwell"'), T.rightParentheses(), T.space(), T.comment('# => "Hello! Maxwell!"')
        ]

        checkTokenResult(expectedResults, actualResults)
      })

      it('lexes the define method statement with argument', function() {
        let actualResults = lexPython(Python.defineMethodStatementWithDefaultValue)
        let expectedResults = [
          T.default('n'), T.space(), T.operator('='), T.space(), T.string('"Maxwell"'), T.newline(),
          T.keyword('def'), T.space(), T.leftParentheses(), T.default('name'), T.space(), T.operator('='), T.space(), T.default('n'), T.rightParentheses(), T.colon(), T.newline(),
          T.space('    '), T.func('print'), T.leftParentheses(), T.string('"Hello! "'), T.space(), T.operator('+'), T.space(), T.default('name'), T.rightParentheses(), T.newline(),
          T.default('hello'), T.leftParentheses(), T.rightParentheses(), T.space(), T.comment('# => "Hello! Maxwell"')
        ]
      })
      
      it('parse the argument tokens in define method statement with complex default values', function() {
        const actualResults = lexPython(Python.defineMethodStatementWithComplexDefaultValue)
        const expectedResults = [
          T.keyword('def'), T.space(), T.default('hello'), T.leftParentheses(), T.default('arg1'), T.space(), T.operator('='), T.space(), T.string('"Hello"'),
          T.comma(), T.space(), T.default('arg2'), T.space(), T.operator('='), T.space(), T.default('123'),
          T.comma(), T.space(), T.default('arg3'), T.space(), T.operator('='), T.space(), T.boolean('True'),
          T.comma(), T.space(), T.default('arg4'), T.space(), T.operator('='), T.space(), T.leftBracket(), T.default('456'), T.comma(), T.space(), T.boolean('False'), T.comma(), T.space(), T.default('name'), T.rightBracket(), T.rightParentheses(), T.colon()
        ]
  
        checkTokenResult(expectedResults, actualResults)
      })
    })
  })

  describe('Comment', function() {
    it('lexes the single line comment', function() {
      let actualResults = lexPython(Python.singleLineComment)
      let expectedResults = [
        T.default('2'), T.space(), T.operator('*'), T.operator('*'), T.space(), T.default('10'), T.space('        '), T.comment('# => 1024'), T.newline(),
        T.func('print'), T.leftParentheses(), T.string('"Hello"'), T.rightParentheses(), T.space(), T.comment('# => "Hello"'), T.newline(),
        T.comment('# => "Comment"')
      ]

      checkTokenResult(expectedResults, actualResults)
    })
  })

  describe('String', function() {
    it('lexes the single line string', function() {
      let actualResults = lexPython(Python.singleLineString)
      let expectedResults = [
        T.string('"Hello World!"'), T.newline(),
        T.func('print'), T.leftParentheses(), T.string('"Maxwell "'), T.space(), T.operator('+'), T.space(), T.string('" Alexius"'), T.rightParentheses(), T.newline(),
        T.string('\'Single quoted string\'')
      ]

      checkTokenResult(expectedResults, actualResults)
    })
    
    it('lexes the multi-line string', function() {
      let actualResults = lexPython(Python.multiLineString)
      let expectedResults = [
        T.string('"""Test Multi-line string\n[ i * 2 for i in range(10) ]\nhello world print("Maxwell")\n"""'), T.newline(),
        T.func('print'), T.leftParentheses(), T.string('"Test Multi-line string:"'), T.space(), T.operator('+'), T.space(), T.string('"""\n  LeichterJS created by\n     Maxwell Alexius  """'), T.newline(),
        T.newline(),
        T.string('" Hello Again! "'), T.space(), T.operator('+'), T.space(), T.string('""" Maxwell\n\nAlexius\n"""')
      ]

      checkTokenResult(expectedResults, actualResults)
    })
  })

  describe('Lex Python Experssion', function() {
    it('lexes the arithmetic expressions', function() {
      let actualResults = lexPython(Python.arithmeticExpression)
      let expectedResults = [
        T.default('1'), T.space(), T.operator('+'), T.space(), T.default('2'), T.space(), T.operator('*'), T.space(), T.default('3'), T.space(), T.operator('-'), T.space(), T.leftParentheses(), T.default('4'), T.space(), T.operator('/'), T.space(), T.default('5'), T.rightParentheses(), T.space(), T.operator('%'), T.space(), T.default('6')
      ]

      checkTokenResult(expectedResults, actualResults)
    })

    it('lexes the logical expressions', function() {
      let actualResults = lexPython(Python.logicalExpression)
      let expectedResults = [
        T.boolean('True'), T.space(), T.logical('or'), T.space(), T.boolean('False'), T.space(), T.logical('and'), T.space(), T.logical('not'), T.space(), T.boolean('False')
      ]

      checkTokenResult(expectedResults, actualResults)
    })
  })
})

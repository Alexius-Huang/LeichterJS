const checkTokenResult = require('../helpers/check_token_result').checkTokenResult
const T = require('../helpers/python_tokens').T
const Python = require('../samples/python.js').Python
let lexPython = require('../../lib/ignition/lexer/lex_python').lexPython
let parsePython = require('../../lib/ignition/parser/parse_python').parsePython

describe('Python Tokenizer', function() {
  /* TODO: Parsing Number Token */
  describe('Parsing Number Token', function() {
    it('parses the number token from the arithmetic expression', function() {
      let actualResults = parsePython(lexPython(Python.arithmeticExpression))
      let expectedResults = [
        T.number('1'), T.space(), T.operator('+'), T.space(), T.number('2'), T.space(), T.operator('*'), T.space(), T.number('3'), T.space(), T.operator('-'), T.space(), T.leftParentheses(), T.number('4'), T.space(), T.operator('/'), T.space(), T.number('5'), T.rightParentheses(), T.space(), T.operator('%'), T.space(), T.number('6')
      ]

      checkTokenResult(expectedResults, actualResults)
    })
  })

  /* TODO: Parsing Function & Class Name Token */
  describe('Parsing Argument Token', function() {
    it('parses the argument tokens in define method statement', function() {
      const actualResults = parsePython(lexPython(Python.defineMethodStatement))
      const expectedResults = [
        T.keyword('def'), T.space(), T.funcName('hello'), T.leftParentheses(), T.argument('name'), T.rightParentheses(), T.colon(), T.newline(),
        T.space('    '), T.func('print'), T.leftParentheses(), T.string('"Hello! "'), T.space(), T.operator('+'), T.space(), T.default('name'), T.space(), T.operator('+'), T.space(), T.string('" !"'), T.rightParentheses(), T.newline(),
        T.newline(),
        T.default('hello'), T.leftParentheses(), T.string('"Maxwell"'), T.rightParentheses(), T.space(), T.comment('# => "Hello! Maxwell!"')
      ]

      checkTokenResult(expectedResults, actualResults)
    })

    it('parses the argument tokens in define method statement with default values', function() {
      const actualResults = parsePython(lexPython(Python.defineMethodStatementWithDefaultValue))
      const expectedResults = [
        T.default('n'), T.space(), T.operator('='), T.space(), T.string('"Maxwell"'), T.newline(),
        T.keyword('def'), T.space(), T.funcName('hello'), T.leftParentheses(), T.argument('name'), T.space(), T.operator('='), T.space(), T.default('n'), T.rightParentheses(), T.colon(), T.newline(),
        T.space('    '), T.func('print'), T.leftParentheses(), T.string('"Hello! "'), T.space(), T.operator('+'), T.space(), T.default('name'), T.rightParentheses(), T.newline(),
        T.default('hello'), T.leftParentheses(), T.rightParentheses(), T.space(), T.comment('# => "Hello! Maxwell"')
      ]

      checkTokenResult(expectedResults, actualResults)
    })

    it('parses the argument tokens in define method statement with complex default values', function() {
      const actualResults = parsePython(lexPython(Python.defineMethodStatementWithComplexDefaultValue))
      const expectedResults = [
        T.keyword('def'), T.space(), T.funcName('hello'), T.leftParentheses(), T.argument('arg1'), T.space(), T.operator('='), T.space(), T.string('"Hello"'),
        T.comma(), T.space(), T.argument('arg2'), T.space(), T.operator('='), T.space(), T.number('123'),
        T.comma(), T.space(), T.argument('arg3'), T.space(), T.operator('='), T.space(), T.boolean('True'),
        T.comma(), T.space(), T.argument('arg4'), T.space(), T.operator('='), T.space(), T.leftBracket(), T.number('456'), T.comma(), T.space(), T.boolean('False'), T.comma(), T.space(), T.default('name'), T.rightBracket(), T.rightParentheses(), T.colon()
      ]

      checkTokenResult(expectedResults, actualResults)
    })
  })
})

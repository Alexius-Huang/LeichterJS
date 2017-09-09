const checkTokenResult = require('../helpers/check_token_result').checkTokenResult
const T = require('../helpers/python_tokens').T
const Python = require('../samples/python.js').Python
let lexPython = require('../../lib/ignition/lexer/lex_python').lexPython
let tokenizePython = require('../../lib/ignition/tokenizer/tokenize_python').tokenizePython

describe('Python Tokenizer', function() {
  /* TODO: Tokenizing Number Token */
  /* TODO: Tokenizing Function & Class Name Token */
  describe('Tokenizing Argument Token', function() {
    it('parses the argument tokens in define method statement', function() {
      const actualResults = tokenizePython(lexPython(Python.defineMethodStatement))
      const expectedResults = [
        T.keyword('def'), T.space(), T.funcName('hello'), T.leftParentheses(), T.argument('name'), T.rightParentheses(), T.colon(), T.newline(),
        T.space('    '), T.func('print'), T.leftParentheses(), T.string('"Hello! "'), T.space(), T.operator('+'), T.space(), T.default('name'), T.space(), T.operator('+'), T.space(), T.string('" !"'), T.rightParentheses(), T.newline(),
        T.newline(),
        T.default('hello'), T.leftParentheses(), T.string('"Maxwell"'), T.rightParentheses(), T.space(), T.comment('# => "Hello! Maxwell!"')
      ]

      checkTokenResult(expectedResults, actualResults)
    })

    it('parses the argument tokens in define method statement with default values', function() {
      const actualResults = tokenizePython(lexPython(Python.defineMethodStatementWithDefaultValue))
      const expectedResults = [
        T.default('n'), T.space(), T.operator('='), T.space(), T.string('"Maxwell"'), T.newline(),
        T.keyword('def'), T.space(), T.funcName('hello'), T.leftParentheses(), T.argument('name'), T.space(), T.operator('='), T.space(), T.default('n'), T.rightParentheses(), T.colon(), T.newline(),
        T.space('    '), T.func('print'), T.leftParentheses(), T.string('"Hello! "'), T.space(), T.operator('+'), T.space(), T.default('name'), T.rightParentheses(), T.newline(),
        T.default('hello'), T.leftParentheses(), T.rightParentheses(), T.space(), T.comment('# => "Hello! Maxwell"')
      ]

      checkTokenResult(expectedResults, actualResults)
    })

    it('parses the argument tokens in define method statement with complex default values', function() {
      const actualResults = tokenizePython(lexPython(Python.defineMethodStatementWithComplexDefaultValue))
      const expectedResults = [
        T.keyword('def'), T.space(), T.funcName('hello'), T.leftParentheses(), T.argument('arg1'), T.space(), T.operator('='), T.space(), T.string('"Hello"'),
        T.comma(), T.space(), T.argument('arg2'), T.space(), T.operator('='), T.space(), T.number('123'),
        T.comma(), T.space(), T.argument('arg3'), T.space(), T.operator('='), T.space(), T.keyword('True'),
        T.comma(), T.space(), T.argument('arg4'), T.space(), T.operator('='), T.space(), T.leftBracket(), T.number('456'), T.comma(), T.space(), T.keyword('False'), T.comma(), T.space(), T.default('name'), T.rightBracket(), T.rightParentheses(), T.colon()
      ]

      checkTokenResult(expectedResults, actualResults)
    })
  })
})

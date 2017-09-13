const checkTokenResult = require('../helpers/check_token_result').checkTokenResult
const T = require('../helpers/ruby_tokens').T
const Ruby = require('../samples/ruby.js').Ruby
let lexRuby = require('../../lib/ignition/lexer/lex_ruby').lexRuby

describe('Ruby Lexer', function() {
  describe('Lex Global Variable Token', function() {
    it('lexed the global variable as a default token', function() {
      const actualResults = lexRuby(Ruby.globalVariable)
      const expectedResults = [
        T.default('$ENV'), T.space(), T.operator('='), T.space(), T.string('"development"'), T.newline(),
        T.default('$Maxwell')
      ]

      checkTokenResult(expectedResults, actualResults)      
    })
  })
})

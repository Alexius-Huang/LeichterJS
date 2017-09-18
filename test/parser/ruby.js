const checkTokenResult = require('../helpers/check_token_result').checkTokenResult
const T = require('../helpers/ruby_tokens').T
const Ruby = require('../samples/ruby.js').Ruby
let lexRuby = require('../../lib/ignition/lexer/lex_ruby').lexRuby
let parseRuby = require('../../lib/ignition/parser/parse_ruby').parseRuby

describe('Ruby Parser', function() {
  describe('Parsing Global Variable Token', function() {
    it('parses the global variable token', function() {
      const actualResults = parseRuby(lexRuby(Ruby.globalVariable))
      const expectedResults = [
        T.globalVariable('$ENV'), T.space(), T.operator('='), T.space(), T.string('"development"'), T.newline(),
        T.globalVariable('$Maxwell')
      ]

      checkTokenResult(expectedResults, actualResults)      
    })
  })
})

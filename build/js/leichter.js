var Leichter =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ignite_python_code = __webpack_require__(2);

var _ignite_python_code2 = _interopRequireDefault(_ignite_python_code);

var _ignite_ruby_code = __webpack_require__(7);

var _ignite_ruby_code2 = _interopRequireDefault(_ignite_ruby_code);

var _ignite_html_code = __webpack_require__(10);

var _ignite_html_code2 = _interopRequireDefault(_ignite_html_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var appendNode = __webpack_require__(1).appendNode;

module.exports = function () {
  function Leichter() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Leichter);

    var lang = options.lang,
        element = options.element,
        enableEscapedCharacter = options.enableEscapedCharacter;

    this.lang = lang;
    this.enableEscapedCharacter = enableEscapedCharacter;
    this.element = document.getElementById(element);
  }

  /* Using instance object to ignite the syntax highlighting */


  _createClass(Leichter, [{
    key: 'ignite',
    value: function ignite() {
      var codeString = this.element.innerText;

      switch (this.lang) {
        case 'python':
          (0, _ignite_python_code2.default)(this.element, this.enableEscapedCharacter);
          break;

        case 'ruby':
          (0, _ignite_ruby_code2.default)(this.element);break;
        case 'html':
          (0, _ignite_html_code2.default)(this.element);break;
        default:
          console.warn(this.lang + ' lang currently is unsupported!');
      }
    }

    /* Alias method if ignite which is the verb 'ignite' in German */

  }, {
    key: 'entz\xFCnden',
    value: function entzNden() {
      this.ignite();
    }

    /* Directly ignite the syntax highlighting using class method */

  }], [{
    key: 'ignite',
    value: function ignite() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    }
  }]);

  return Leichter;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendNode = appendNode;
function appendNode(element, params) {
  /* Create child element */
  var child = document.createElement(params.name);
  child.className = params.classList.join(' ');
  child.id = params.id;

  if (params.attributes) {
    for (var key in params.attributes) {
      child.setAttribute(key, params.attributes[key]);
    }
  }

  element.appendChild(child);

  /* Append to grand child element */
  if (params.children) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = params.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var grandChildInfo = _step.value;

        appendNode(child, grandChildInfo);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ignitePythonCode;
var lexPython = __webpack_require__(3).lexPython;
var parsePython = __webpack_require__(6).parsePython;
var className = 'lt';

function ignitePythonCode(element) {
  var enableEscapedCharacter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var codeString = element.innerText;

  /* Parse the code for the first time into fundamental tokens */
  var lexedTokens = lexPython(codeString);

  /* Secondary parse for complex combination syntax feature */
  var tokens = parsePython(lexedTokens);

  /* Parsing Python code highlighting */
  element.innerText = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var token = _step.value;

      var codeSegment = document.createElement('span');
      codeSegment.className = className + ' ' + className + '-' + token.type;
      codeSegment.innerText = token.value;
      element.appendChild(codeSegment);
    }

    /* Dynamically Parse Escaped Character Style */
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (enableEscapedCharacter) {
    var stringElements = element.getElementsByClassName('lt-string');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = stringElements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var e = _step2.value;

        var string = e.innerText,
            result = '',
            value = '',
            char = void 0;
        for (var i = 0, l = string.length; i < l; i++) {
          var _char = string[i];
          if (_char === '\\') {
            if (value) {
              result += value;
              value = '';
            }
            result += '<span class="lt lt-escaped-character">' + (_char + string[++i]) + '</span>';
          } else value += _char;
        }
        if (value) result += value;
        e.innerHTML = result;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lexPython = lexPython;

var _python = __webpack_require__(5);

var K = __webpack_require__(4);


String.prototype.last = function () {
  return this[this.length - 1];
};
Array.prototype.includes = function (item) {
  return this.indexOf(item) !== -1;
};

function lexPython(code) {
  var currentChar = code[0];
  var peekChar = code[1];
  var charPosition = 0;
  var lexedValue = '';
  var tokens = [];

  function readChar() {
    charPosition++;
    currentChar = code[charPosition];
    peekChar = code[charPosition + 1];
  }

  function readString() {
    var lexedString = currentChar;
    readChar();

    if (currentChar === lexedString[0] && peekChar === lexedString) {
      /* Multi-line String Case */
      lexedString += currentChar;
      readChar();
      lexedString += currentChar;
      readChar();

      var stringClosing = [lexedString[0], lexedString[0], lexedString[0]].join('');

      while (currentChar && currentChar + peekChar + code[charPosition + 2] != stringClosing) {

        /* Escaped Character Case */
        if (currentChar === '\\') {
          lexedString += currentChar;
          readChar();
        }

        lexedString += currentChar;
        readChar();
      }

      for (var i = 0; i < 3; i++) {
        if (currentChar) {
          lexedString += currentChar;
        } else break;
        readChar();
      }
    } else {
      /* Single Line String Case */
      while (currentChar != lexedString[0] && currentChar !== '\n') {

        /* Escaped Character Case */
        if (currentChar === '\\') {
          lexedString += currentChar;
          readChar();
        }

        lexedString += currentChar;
        readChar();
      }

      if (currentChar !== '\n') {
        /* Current charcacter is the closing string */
        lexedString += currentChar;
        readChar();
      }
    }

    /* Push String Token */
    tokens.push({ type: 'string', value: lexedString });
  }

  function readSpace() {
    var spaces = currentChar;
    readChar();

    while (currentChar == ' ') {
      spaces += ' ';
      readChar();
    }

    tokens.push({ type: 'space', value: spaces });
  }

  function readComment() {
    var commentString = currentChar;
    readChar();

    while (currentChar !== undefined && currentChar != '\n') {
      commentString += currentChar;
      readChar();
    }

    tokens.push({ type: 'comment', value: commentString });
  }

  function tokenizeLexedValue() {
    if (lexedValue) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(K)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var type = _step.value;

          if (K[type].includes(lexedValue)) {
            tokens.push({ type: type.slice(1), value: lexedValue });
            lexedValue = '';
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (lexedValue) {
        tokens.push({ type: 'default', value: lexedValue });
        lexedValue = '';
      }
    }
  }

  /* Setting function as values in character mapping */
  _python.$charMap.set(' ', readSpace);
  _python.$charMap.set('"', readString);
  _python.$charMap.set('\'', readString);
  _python.$charMap.set('#', readComment);

  /* Start Lexing */
  while (currentChar !== undefined) {

    /* Maps to special character and convert into tokens */
    if (_python.$charMap.has(currentChar)) {
      tokenizeLexedValue();

      var value = _python.$charMap.get(currentChar);
      if (typeof value === 'string') {
        tokens.push({ type: value, value: currentChar });
        readChar();
      } else if (typeof value === 'function') {
        /* Call function for specific lexing method */
        value();
      } else {
        console.log('Error');
      }
    }
    /* Parse default identifier */
    else {
        lexedValue += currentChar;
        readChar();
      }
  }

  if (lexedValue) tokenizeLexedValue();

  return tokens;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var $keyword = exports.$keyword = ['as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'lambda', 'nonlocal', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'];
var $function = exports.$function = ['abs', 'dict', 'help', 'min', 'setattr', 'all', 'dir', 'hex', 'next', 'slice', 'any', 'divmod', 'id', 'object', 'sorted', 'ascii', 'enumerate', 'input', 'oct', 'staticmethod', 'bin', 'eval', 'int', 'open', 'str', 'bool', 'exec', 'isinstance', 'ord', 'sum', 'bytearray', 'filter', 'issubclass', 'pow', 'super', 'bytes', 'float', 'iter', 'print', 'tuple', 'callable', 'format', 'len', 'property', 'type', 'chr', 'frozenset', 'list', 'range', 'vars', 'classmethod', 'getattr', 'locals', 'repr', 'zip', 'compile', 'globals', 'map', 'reversed', '_import_', 'complex', 'hasattr', 'max', 'round', 'delattr', 'hash', 'memoryview', 'set'];
var $logical = exports.$logical = ['and', 'or', 'not', 'in', 'is'];
var $boolean = exports.$boolean = ['False', 'True'];
var $nullity = exports.$nullity = ['None'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var $charMap = exports.$charMap = new Map([
/* Implemented a readSpace function in python lexing */
[' ', 'READ_SPACE_FUNC'],

/* Implemented a readString function in python lexing */
['"', 'READ_STRING_FUNC'], ['\'', 'READ_STRING_FUNC'], ['=', 'operator'], ['+', 'operator'], ['-', 'operator'], ['*', 'operator'], ['/', 'operator'], ['%', 'operator'], ['>', 'operator'], ['<', 'operator'], ['|', 'operator'], ['&', 'operator'], [':', 'colon'], ['[', 'left-bracket'], [']', 'right-bracket'], ['(', 'left-parentheses'], [')', 'right-parentheses'], ['{', 'left-brace'], ['}', 'right-brace'], [',', 'comma'], [';', 'semicolon'], ['\n', 'newline'],

/* Implement a readComment function in python lexing */
['#', 'READ_COMMENT_FUNC']]);

exports.default = $charMap;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePython = parsePython;
/*
 * Python Parser
 * 
 * Basically parser is for the parsing complex token combinations or types
 */

function parsePython(tokens) {
  var tokenPosition = 0;
  var currentToken = tokens[0];
  var peekToken = tokens[1];

  function nextToken() {
    tokenPosition++;
    currentToken = tokens[tokenPosition];
    peekToken = tokens[tokenPosition + 1];
  }

  function parseArray() {
    while (currentToken && currentToken.type != 'right-bracket') {
      if (currentToken.type === 'default' && !isNaN(currentToken.value)) {
        currentToken.type = 'number';
      }
      nextToken();
    }
  }

  function parseArgumentTokens() {
    while (currentToken && !(currentToken.type === 'right-parentheses' && peekToken.type === 'colon')) {
      if (currentToken.type === 'default') {
        currentToken.type = 'argument';
      } else if (currentToken.type === 'operator' && currentToken.value === '=') {
        /* Argument with Default Value */
        while (currentToken && currentToken.type !== 'comma') {
          if (currentToken.type === 'default' && !isNaN(currentToken.value)) {
            currentToken.type = 'number';
          } else if (currentToken.type === 'left-bracket') {
            parseArray();
          }
          nextToken();
        }
      }
      nextToken();
    }
  }

  while (currentToken) {
    switch (currentToken.type) {
      case 'keyword':
        if (currentToken.value === 'def' && peekToken && peekToken.type === 'space') {
          nextToken();
          if (peekToken && peekToken.type === 'default') {
            peekToken.type = 'function-name';
          }
        } else if (currentToken.value === 'class' && peekToken && peekToken.type === 'space') {
          nextToken();
          if (peekToken && peekToken.type === 'default') {
            peekToken.type = 'class-name';
          }
        }
        nextToken();
        break;

      case 'function-name':
      case 'class-name':
        if (peekToken && peekToken.type === 'left-parentheses') {
          parseArgumentTokens();
        }
        break;

      case 'default':
        if (!isNaN(currentToken.value)) {
          currentToken.type = 'number';
        }
        nextToken();
        break;

      default:
        nextToken();
    }
  }

  return tokens;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = igniteRubyCode;
var lexRuby = __webpack_require__(8).lexRuby;
var parseRuby = __webpack_require__(9).parseRuby;
var className = 'lt';

function igniteRubyCode(element) {
  var codeString = element.innerText;

  /* Parse the code for the first time into fundamental tokens */
  var lexedTokens = lexRuby(codeString);

  /* Secondary parse for complex combination syntax feature */
  var tokens = parseRuby(lexedTokens);

  /* Parsing Ruby code highlighting */
  element.innerText = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var token = _step.value;

      var codeSegment = document.createElement('span');
      codeSegment.className = className + ' ' + className + '-' + token.type;
      codeSegment.innerText = token.value;
      element.appendChild(codeSegment);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lexRuby = lexRuby;
var $keywords = ['alias ', 'and', 'BEGIN', 'begin', 'break', 'case', 'class', 'def', 'defined?', 'do', 'else', 'elsif', 'END', 'end', 'ensure', 'false', 'for', 'if', 'in', 'module', 'next', 'nil', 'not', 'or', 'redo', 'rescue', 'retry', 'return', 'self', 'super', 'then', 'true', 'undef', 'unless', 'until', 'when', 'while', 'yield'];
var $functions = ['include', 'using', 'public', 'private', 'define_method', 'irb_exit_org', 'default_src_encoding', 'irb_binding', 'sprintf', 'format', 'catch', 'throw', 'loop', 'block_given?', 'trace_var', 'untrace_var', 'at_exit', 'set_trace_func', 'caller', 'caller_locations', 'select', 'test', 'fork', '`', 'sleep', 'gem_original_require', 'respond_to_missing?', 'load', 'exec', 'exit!', 'system', 'spawn', 'abort', 'syscall', 'printf', 'open', 'putc', 'print', 'readline', 'puts', 'p', 'readlines', 'rand', 'gets', 'srand', 'proc', 'lambda', 'gem', 'initialize_copy', 'initialize_clone', 'initialize_dup', 'trap', 'require', 'require_relative', 'autoload', 'autoload?', 'binding', 'local_variables', 'warn', 'raise', 'fail', 'global_variables', '__method__', '__callee__', '__dir__', 'eval', 'iterator?', 'method_missing', 'singleton_method_added', 'singleton_method_removed', 'singleton_method_undefined', 'initialize'];

String.prototype.last = function () {
  return this[this.length - 1];
};
Array.prototype.includes = function (item) {
  return this.indexOf(item) !== -1;
};

function lexRuby(code) {
  var currentChar = code[0];
  var peekChar = code[1];
  var charPosition = 0;
  var lexedValue = '';
  var tokens = [];

  function readChar() {
    charPosition++;
    currentChar = code[charPosition];
    peekChar = code[charPosition + 1];
  }

  function readString() {
    var lexedString = currentChar;
    readChar();

    /* Single Line String Case */
    while (currentChar != lexedString[0] && currentChar !== '\n') {
      lexedString += currentChar;
      readChar();
    }

    if (currentChar !== '\n') {
      /* Current charcacter is the closing string */
      lexedString += currentChar;
      readChar();
    }

    /* Push String Token */
    tokens.push({ type: 'string', value: lexedString });
  }

  function readSpace() {
    var spaces = currentChar;
    readChar();

    while (currentChar == ' ') {
      spaces += ' ';
      readChar();
    }

    tokens.push({ type: 'space', value: spaces });
  }

  function readComment() {
    var commentString = currentChar;
    readChar();

    while (currentChar !== undefined && currentChar != '\n') {
      commentString += currentChar;
      readChar();
    }

    tokens.push({ type: 'comment', value: commentString });
  }

  function tokenizeLexedValue() {
    if (lexedValue) {
      if ($keywords.includes(lexedValue)) {
        tokens.push({ type: 'keyword', value: lexedValue });
      } else if ($functions.includes(lexedValue)) {
        tokens.push({ type: 'function', value: lexedValue });
      } else {
        tokens.push({ type: 'default', value: lexedValue });
      }
      lexedValue = '';
    }
  }

  while (currentChar !== undefined) {
    switch (currentChar) {
      case ' ':
        tokenizeLexedValue();
        readSpace();
        break;

      case '"':
      case '\'':
        tokenizeLexedValue();
        readString();
        break;

      case '=':
      case '+':
      case '-':
      case '*':
      case '/':
      case '>':
      case '<':
      case '|':
      case '&':
        tokenizeLexedValue();
        tokens.push({ type: 'operator', value: currentChar });
        readChar();
        break;

      case ':':
        tokenizeLexedValue();
        tokens.push({ type: 'colon', value: ':' });
        readChar();
        break;

      case '[':
        tokenizeLexedValue();
        tokens.push({ type: 'left-bracket', value: '[' });
        readChar();
        break;

      case ']':
        tokenizeLexedValue();
        tokens.push({ type: 'right-bracket', value: ']' });
        readChar();
        break;

      case '(':
        tokenizeLexedValue();
        tokens.push({ type: 'left-parentheses', value: '(' });
        readChar();
        break;

      case ')':
        tokenizeLexedValue();
        tokens.push({ type: 'right-parentheses', value: ')' });
        readChar();
        break;

      case '{':
        tokenizeLexedValue();
        tokens.push({ type: 'left-brace', value: '{' });
        readChar();
        break;

      case '}':
        tokenizeLexedValue();
        tokens.push({ type: 'right-brace', value: '}' });
        readChar();
        break;

      case ',':
        tokenizeLexedValue();
        tokens.push({ type: 'comma', value: ',' });
        readChar();
        break;

      case ';':
        tokenizeLexedValue();
        tokens.push({ type: 'semicolon', value: ':' });
        readChar();
        break;

      case '\n':
        tokenizeLexedValue();
        tokens.push({ type: 'newline', value: '\n' });
        readChar();
        break;

      case '#':
        tokenizeLexedValue();
        readComment();
        break;

      default:
        lexedValue += currentChar;
        readChar();
    }
  }

  if (lexedValue) tokenizeLexedValue();

  return tokens;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseRuby = parseRuby;
/*
 * Ruby Parser
 * 
 * Basically parser is for the parsing complex token combinations or types
 */

function parseRuby(tokens) {
  var tokenPosition = 0;
  var currentToken = tokens[0];
  var peekToken = tokens[1];

  function nextToken() {
    tokenPosition++;
    currentToken = tokens[tokenPosition];
    peekToken = tokens[tokenPosition + 1];
    return currentToken;
  }

  function peekTokenIs(type) {
    return peekToken && peekToken.type === type;
  }

  function tokenizeArguments() {
    while (currentToken && ['right-parentheses', 'newline', 'semicolon'].indexOf(currentToken.type) === -1) {
      if (currentToken.type === 'default') {
        currentToken.type = 'argument';
      }
      nextToken();
    }
  }

  function tokenizeClassScope() {
    nextToken(); /* Current token type is space */
    if (peekTokenIs('default')) {
      peekToken.type = 'class-name';

      /* Match the Inheritance Pattern */
      if (nextToken() && peekTokenIs('space') && nextToken() && peekTokenIs('operator') && peekToken.value === '<' && nextToken() && peekTokenIs('space') && nextToken() && peekTokenIs('default')) {
        peekToken.type = 'inherited-class';
      }
    }
  }

  function isGlobalVariable() {
    return currentToken.value[0] === '$';
  }

  while (currentToken) {
    switch (currentToken.type) {
      case 'keyword':
        if (currentToken.value === 'def' && peekTokenIs('space')) {
          if (nextToken() && peekTokenIs('default')) {
            peekToken.type = 'function-name';
          }
        } else if (currentToken.value === 'class' && peekTokenIs('space')) {
          tokenizeClassScope();
        }
        nextToken();
        break;

      case 'function-name':
        tokenizeArguments();
        break;

      case 'default':
        if (!isNaN(currentToken.value)) {
          currentToken.type = 'number';
        } else if (isGlobalVariable(currentToken)) {
          currentToken.type = 'global-variable';
        }
        nextToken();
        break;

      default:
        nextToken();
    }
  }

  return tokens;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = igniteHTMLCode;

var _lex_html = __webpack_require__(11);

var _lex_html2 = _interopRequireDefault(_lex_html);

var _parse_html = __webpack_require__(14);

var _parse_html2 = _interopRequireDefault(_parse_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var className = 'lt';

function igniteHTMLCode(element) {
  var enableEscapedCharacter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var codeString = element.innerText;

  /* Parse the code for the first time into fundamental tokens */
  var lexedTokens = (0, _lex_html2.default)(codeString);

  /* Secondary parse for complex combination syntax feature */
  var tokens = (0, _parse_html2.default)(lexedTokens);

  /* Parsing HTML code highlighting */
  element.innerText = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var token = _step.value;

      var codeSegment = document.createElement('span');
      if (token instanceof Array) {
        /* Current token is a HTML tag */
        codeSegment.className = className + ' ' + className + '-html-tag';
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = token[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var innerToken = _step2.value;

            var innerCodeSegment = document.createElement('span');
            innerCodeSegment.className = className + ' ' + className + '-' + innerToken.type;
            innerCodeSegment.innerText = innerToken.value;
            codeSegment.appendChild(innerCodeSegment);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      } else {
        codeSegment.className = className + ' ' + className + '-' + token.type;
        codeSegment.innerText = token.value;
      }
      element.appendChild(codeSegment);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lexHTML;
String.prototype.last = function () {
  return this[this.length - 1];
};
Array.prototype.includes = function (item) {
  return this.indexOf(item) !== -1;
};

function lexHTML(code) {
  var currentChar = code[0];
  var peekChar = code[1];
  var charPosition = 0;
  var lexedValue = '';
  var tokens = [];

  function readChar() {
    charPosition++;
    currentChar = code[charPosition];
    peekChar = code[charPosition + 1];
  }

  function readString() {
    var targetTokenStack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : tokens;

    var lexedString = currentChar;
    readChar();

    /* Single Line String Case */
    while (currentChar != lexedString[0] && currentChar !== '\n') {
      lexedString += currentChar;
      readChar();
    }

    if (currentChar !== '\n') {
      /* Current charcacter is the closing string */
      lexedString += currentChar;
      readChar();
    }

    /* Push String Token */
    targetTokenStack.push({ type: 'string', value: lexedString });
  }

  function readSpace() {
    var targetTokenStack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : tokens;

    var spaces = currentChar;
    readChar();

    while (currentChar == ' ') {
      spaces += ' ';
      readChar();
    }

    targetTokenStack.push({ type: 'space', value: spaces });
  }

  function readTag() {
    var tagTokens = [{ type: 'left-angle-bracket', value: '<' }];
    readChar();
    while (currentChar !== undefined) {
      /* End tag if current character is the closing bracket */
      if (currentChar === '>') {
        tokenizeLexedValue(tagTokens);
        tagTokens.push({ type: 'right-angle-bracket', value: '>' });
        readChar();
        break;
      }

      switch (currentChar) {
        case ' ':
          tokenizeLexedValue(tagTokens);
          readSpace(tagTokens);
          break;

        case '"':
        case '\'':
          tokenizeLexedValue(tagTokens);
          readString(tagTokens);
          break;

        case '=':
          tokenizeLexedValue(tagTokens);
          tagTokens.push({ type: 'assignment-operator', value: '=' });
          readChar();
          break;

        case '/':
          tokenizeLexedValue(tagTokens);
          tagTokens.push({ type: 'slash', value: '/' });
          readChar();
          break;

        case '\n':
          tokenizeLexedValue(tagTokens);
          tagTokens.push({ type: 'newline', value: '\n' });
          readChar();
          break;

        default:
          lexedValue += currentChar;
          readChar();
      }
    }

    /* Push back to the main tokens stack */
    tokens.push(tagTokens);
  }

  function tokenizeLexedValue() {
    var targetTokenStack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : tokens;

    if (lexedValue) {
      targetTokenStack.push({ type: 'default', value: lexedValue });
      lexedValue = '';
    }
  }

  while (currentChar !== undefined) {
    switch (currentChar) {
      case ' ':
        tokenizeLexedValue();
        readSpace();
        break;

      case '<':
        tokenizeLexedValue();
        readTag();
        break;

      case '\n':
        tokenizeLexedValue();
        tokens.push({ type: 'newline', value: '\n' });
        readChar();
        break;

      default:
        lexedValue += currentChar;
        readChar();
    }
  }

  if (lexedValue) tokenizeLexedValue();

  return tokens;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var $tags = exports.$tags = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseHTML;

var _html = __webpack_require__(12);

Array.prototype.includes = function (item) {
  return this.indexOf(item) !== -1;
}; /*
    * HTML Parser
    * 
    * Basically parser is for the parsing complex token combinations or types
    */

function parseHTML(tokens) {
  var tokenPosition = 0;
  var currentToken = tokens[0];
  var peekToken = tokens[1];

  function nextToken() {
    tokenPosition++;
    currentToken = tokens[tokenPosition];
    peekToken = tokens[tokenPosition + 1];
  }

  while (currentToken) {
    /* Tag Level Parsing */
    if (currentToken instanceof Array) {
      for (var i = 0; i < currentToken.length; i++) {
        var innerToken = currentToken[i];
        var peekInnerToken = currentToken[i + 1];

        switch (innerToken.type) {
          case 'default':
            if (_html.$tags.includes(innerToken.value)) {
              innerToken.type = 'tag-name';
            } else if (peekInnerToken && peekInnerToken.type === 'assignment-operator') {
              innerToken.type = 'attribute';
            }
            break;
        }
      }
    }

    nextToken();
  }

  return tokens;
}

/***/ })
/******/ ]);
//# sourceMappingURL=leichter.js.map
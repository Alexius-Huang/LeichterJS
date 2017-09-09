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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var appendNode = __webpack_require__(1).appendNode;
var ignitePythonCode = __webpack_require__(2).ignitePythonCode;

module.exports = function () {
  function Leichter() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Leichter);

    var lang = options.lang,
        element = options.element;

    this.lang = lang;
    this.element = document.getElementById(element);
  }

  /* Using instance object to ignite the syntax highlighting */


  _createClass(Leichter, [{
    key: 'ignite',
    value: function ignite() {
      var codeString = this.element.innerText;

      switch (this.lang) {
        case 'python':
          ignitePythonCode(this.element);break;
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
exports.ignitePythonCode = ignitePythonCode;
var lexPython = __webpack_require__(3).lexPython;
var tokenizePython = __webpack_require__(4).tokenizePython;
var className = 'lt';

function ignitePythonCode(element) {
  var codeString = element.innerText;

  /* Parse the code for the first time into fundamental tokens */
  var lexedTokens = lexPython(codeString);

  /* Secondary parse for complex combination syntax feature */
  var tokens = tokenizePython(lexedTokens);

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lexPython = lexPython;
var $keywords = ['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'];
var $functions = ['abs', 'dict', 'help', 'min', 'setattr', 'all', 'dir', 'hex', 'next', 'slice', 'any', 'divmod', 'id', 'object', 'sorted', 'ascii', 'enumerate', 'input', 'oct', 'staticmethod', 'bin', 'eval', 'int', 'open', 'str', 'bool', 'exec', 'isinstance', 'ord', 'sum', 'bytearray', 'filter', 'issubclass', 'pow', 'super', 'bytes', 'float', 'iter', 'print', 'tuple', 'callable', 'format', 'len', 'property', 'type', 'chr', 'frozenset', 'list', 'range', 'vars', 'classmethod', 'getattr', 'locals', 'repr', 'zip', 'compile', 'globals', 'map', 'reversed', '_import_', 'complex', 'hasattr', 'max', 'round', 'delattr', 'hash', 'memoryview', 'set'];

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
        // && false) {
        // console.log('Current: ' + currentChar)
        // console.log('Peeked: ' + peekChar)
        // console.log('lexed: ' + lexedString)
        // debugger
        // console.clear()
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenizePython = tokenizePython;
/*
 * Python Tokenizer
 * 
 * Basically tokenizer is for the secondary parse of the tokens
 * in order to parse complex token combinations or types
 *
 */

function tokenizePython(tokens) {
  var tokenPosition = 0;
  var currentToken = tokens[0];
  var peekToken = tokens[1];

  function nextToken() {
    tokenPosition++;
    currentToken = tokens[tokenPosition];
    peekToken = tokens[tokenPosition + 1];
  }

  function parseArgumentTokens() {
    while (currentToken && currentToken.type !== 'right-parentheses') {
      if (currentToken.type === 'default') {
        currentToken.type = 'argument';
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

/***/ })
/******/ ]);
//# sourceMappingURL=leichter.js.map
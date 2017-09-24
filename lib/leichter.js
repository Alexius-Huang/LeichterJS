const appendNode = require('./helpers/append_node.js').appendNode
const ignitePythonCode = require('./ignition/ignite_python_code.js').ignitePythonCode
const igniteRubyCode = require('./ignition/ignite_ruby_code.js').igniteRubyCode

module.exports = class Leichter {
  constructor(options = {}) {
    const { lang, element, enableEscapedCharacter } = options
    this.lang = lang
    this.enableEscapedCharacter = enableEscapedCharacter
    this.element = document.getElementById(element)
  }

  /* Using instance object to ignite the syntax highlighting */
  ignite() {
    const codeString = this.element.innerText

    switch(this.lang) {
      case 'python': ignitePythonCode(
          this.element,
          this.enableEscapedCharacter
        );
        break;

      case 'ruby':   igniteRubyCode(this.element);   break;
      default: console.warn(`${this.lang} lang currently is unsupported!`)
    }
  }

  /* Alias method if ignite which is the verb 'ignite' in German */
  entzünden() { this.ignite() }

  /* Directly ignite the syntax highlighting using class method */
  static ignite(options = {}) {
  }
}

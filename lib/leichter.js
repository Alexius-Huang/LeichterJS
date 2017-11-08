const appendNode = require('./helpers/append_node.js').appendNode

import ignitePythonCode from './ignition/ignite_python_code'
import igniteRubyCode   from './ignition/ignite_ruby_code'
import igniteHTMLCode   from './ignition/ignite_html_code'

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

      case 'ruby':   igniteRubyCode(this.element); break;
      case 'html':   igniteHTMLCode(this.element); break;
      default: console.warn(`${this.lang} lang currently is unsupported!`)
    }
  }

  /* Alias method if ignite which is the verb 'ignite' in German */
  entzünden() { this.ignite() }

  /* Directly ignite the syntax highlighting using class method */
  static ignite(options = {}) {
  }
}

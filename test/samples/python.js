export const Python = {
  importStatement: 'import os.path as path',

  /* Conditional Statement */
  ifElseStatement: [
    'age = 16',
    'if age <= 18:',
    '    print("Young")',
    'elif age <= 60:',
    '    print("Adult")',
    'else:',
    '    print("Old")',
    '# => "Young"'
  ].join('\n'),
  
  /* Looping Statement */
  forLoopStatement: [
    's = 0',
    'for i in range(10):',
    '    s += i',
    '# s = 45'
  ].join('\n'),
  whileLoopStatement: [
    'i = 0',
    'while i < 10:',
    '    i += 1',
    '# i = 10'
  ].join('\n'),

  /* Define Method Statement */
  defineMethodStatement: [
    'def hello(name):',
    '    print("Hello! " + name + " !")',
    '',
    'hello("Maxwell") # => "Hello! Maxwell!"'
  ].join('\n'),
  defineMethodStatementWithDefaultValue: [
    'n = "Maxwell"',
    'def hello(name = n):',
    '    print("Hello! " + name)',
    'hello() # => "Hello! Maxwell"'
  ].join('\n'),
  defineMethodStatementWithComplexDefaultValue: [
    'def hello(arg1 = "Hello", arg2 = 123, arg3 = True, arg4 = [456, False, name]):'
  ].join('\n'),

  /* Comment */
  singleLineComment: [
    '2 ** 10        # => 1024',
    'print("Hello") # => "Hello"',
    '# => "Comment"'
  ].join('\n'),

  /* String */
  /* TODO: Support Escaped Character */
  singleLineString: [
    '"Hello World!"',
    'print("Maxwell " + " Alexius")',
    '\'Single quoted string\''
  ].join('\n'),
  multiLineString: [
    '"""Test Multi-line string',
    '[ i * 2 for i in range(10) ]',
    'hello world print("Maxwell")',
    '"""',
    'print("Test Multi-line string:" + """',
    '  LeichterJS created by',
    '     Maxwell Alexius  """',
    '',
    '" Hello Again! " + """ Maxwell',
    '',
    'Alexius',
    '"""'
  ].join('\n'),

  /* Expressions */
  /* TODO: Support for backslash statement
    Example: a = 1 + \
                 2 * \
                 3 / 4
  */
  arithmeticExpression: [
    '1 + 2 * 3 - (4 / 5) % 6'
  ].join('\n'),
  logicalExpression: [
    'True or False and not False'
  ].join('\n')
}
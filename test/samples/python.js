export const Python = {
  importStatement: 'import os.path as path',
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
  defineMethodStatement: [
    'def hello(name):',
    '    print("Hello! " + name + " !")',
    '',
    'hello("Maxwell") # => "Hello! Maxwell!"'
  ].join('\n'),
  singleLineComment: [
    '2 ** 10        # => 1024',
    'print("Hello") # => "Hello"',
    '# => "Comment"'
  ].join('\n'),
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
}
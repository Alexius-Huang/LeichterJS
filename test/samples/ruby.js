export const Ruby = {
  /* Require Statement */
  requireStatement: [
    'require "json"',
    'require_relative "./lib/custom_file.rb"'
  ].join('\n'),

  /* Global Variable */
  globalVariable: [
    '$ENV = "development"',
    '$Maxwell'
  ].join('\n'),

  /* Conditional Statement */
  ifElseStatement: [
    'age = 16',
    'if age <= 18',
    '  print("Young")',
    'elsif age <= 60',
    '  print("Adult")',
    'else',
    '  print("Old")',
    'end',
    '# => "Young"'
  ].join('\n'),
  caseWhenThenStatement: [
    'age = 16',
    'status = case',
    '         when age <= 18 then "Young"',
    '         when age <= 60 then "Adult"',
    '         else',
    '           "Old"',
    '         end',
    'puts status # => "Young"'
  ].join('\n'),
  
  /* Looping Statement */
  eachLoopStatement: [
    'arr = [1, 2, 3, 4, 5]',
    'arr.each do |el|',
    '  puts el',
    'end'
  ].join('\n'),
  forLoopStatement: [
    'arr = ["Leichter", 123, true]',
    'for element in arr do',
    '  puts element',
    'end'
  ].join('\n'),
  whileLoopStatement: [
    'i = 0',
    'while i < 10 do',
    '  i += 1',
    'end',
    '# i = 10'
  ].join('\n'),

  /* Comment */
  singleLineComment: [
    '2 * 10                 # => 20',
    'puts "Maxwell Alexius" # => "Maxwell Alexius"',
    '# => "Comment"'
  ].join('\n'),
  multiLineComment: [
    '=begin',
    '  A Multi-line Comment',
    'puts "Hello"',
    '  # => "Hello"',
    '=end'    
  ].join('\n'),
  failedMultilineComment: [
    ' =begin',
    ' puts "Hello"',
    ' This Multi-line Comment Should be Failed',
    'because =begin is not in the front of the line',
    '=end'
  ].join('\n'),

  /* String */
  singleLineString: [
    '"Hello! World!"',
    'puts "Hello! " + "Maxwell Alexius!"',
    '\'Single Quoted String\'',
  ].join('\n'),
  heredocString: [
    'puts <<-HEREDOC',
    '  LeichterJS for syntax highlighting!',
    '  Created by Maxwell Alexius!',
    '  # => "Maxwell Alexius"',
    'HEREDOC',
    'puts "Hello"'
  ].join('\n'),
}
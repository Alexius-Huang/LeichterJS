
String.prototype.last = function() {
  return this[this.length - 1]
}
Array.prototype.includes = function(item) {
  return this.indexOf(item) !== -1
}

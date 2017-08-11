function bindme (self) {
  Array.prototype.slice.call(arguments, 1).forEach(function (func) {
    self[func] = self[func].bind(self)
  })
}
module.exports = bindme

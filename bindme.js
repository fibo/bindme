function bindme (self) {
  Array.prototype.slice.call(arguments, 1).forEach(function (func) {
    if (self[func]) self[func] = self[func].bind(self)
    else console.error('Method ' + func + ' is not defined')
  })
}

module.exports = bindme

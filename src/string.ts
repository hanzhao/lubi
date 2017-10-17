interface String {
  toFloat(): number
  toInt(radix?: number): number
}

String.prototype.toFloat = function(): number {
  return Number.parseFloat(this)
}

String.prototype.toInt = function(radix: number = 10): number {
  return Number.parseInt(this, radix)
}

interface Number {
  downto(limit: number): number[]
  forEach(callback: (value: number, index: number) => void): void
  map<T>(callback: (value: number, index: number) => T): T[]
  to(limit: number): number[]
  toInt(): number
}

Number.prototype.downto = function(limit: number): number[] {
  const res: number[] = []
  for (let i = this.valueOf(); i >= limit; --i) {
    res.push(i)
  }
  return res
}

Number.prototype.forEach = function(callback: (value: number, index: number) => void): void {
  for (let i = 0; i < this; ++i) {
    callback(i, i)
  }
}

Number.prototype.map = function <T>(callback: (value: number, index: number) => T): T[] {
  const res: T[] = []
  for (let i = 0; i < this; ++i) {
    res.push(callback(i, i))
  }
  return res
}

Number.prototype.to = function(limit: number): number[] {
  const res: number[] = []
  for (let i = this.valueOf(); i <= limit; ++i) {
    res.push(i)
  }
  return res
}

Number.prototype.toInt = function(): number {
  return Math.trunc(this)
}

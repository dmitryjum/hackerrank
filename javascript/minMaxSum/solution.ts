function miniMaxSum(arr: number[]): void {
  const total = arr.reduce((acc, val) => acc + val, 0)
  let max = 0
  let min = Number.POSITIVE_INFINITY
  arr.forEach(val => {
    max = Math.max(max, total - val)
    min = Math.min(min, total - val)
  })
  return [min, max]
}

console.log(miniMaxSum([1,2,3,4,5]))
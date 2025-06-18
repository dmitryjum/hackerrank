function miniMaxSum(arr: number[]): void {
  const total = arr.reduce((acc, val) => acc + val, 0)
  arr.sort()
  const max = total - arr[0]
  const min = total - arr[arr.length - 1]
  console.log([min, max])
}

function miniMaxSum2(arr: number[]): void { // more performant, because sort is O(n log n) and a single pass is O(n)
  const total = arr.reduce((acc, val) => acc + val, 0)
  let max = 0
  let min = Number.POSITIVE_INFINITY
  arr.forEach(val => {
    max = Math.max(max, total - val)
    min = Math.min(min, total - val)
  })
  console.log([min, max])
}  
miniMaxSum([1,2,3,4,5])
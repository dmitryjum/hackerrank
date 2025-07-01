function diagonalDifference(arr: number[][]): number {
  let left: number = 0;
  let right: number = 0
  for (let i = 0; i < arr.length; i++ ) {
    left = left + arr[i][i]
    const oppositeI: number = arr.length - 1 - i
    right = right + arr[i][oppositeI] 
  }
  return Math.abs(left - right);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
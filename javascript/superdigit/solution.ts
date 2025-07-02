function superDigit(n: string, k: number): number {
  let digit: number = 0
  for (const char of n) {
    digit += Number(char)
  }

  if ((digit * k) <= 9) {
      return digit
  } else {
      return superDigit(`${digit * k}`, 1)    
  }
}

// console.log(superDigit('9875', 4))
console.log(superDigit('148', 3))
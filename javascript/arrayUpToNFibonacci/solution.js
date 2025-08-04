function fibSequence(num) {
  if (num == 0) return []
  if (num == 1) return [0]
  let result = [0,1]
  for (let i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2])
  }
  return result;
}

console.log(fibSequence(5)) // [0,1,1,2,3]
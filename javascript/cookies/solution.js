function sortNumbers(a,b) {
  return a - b
}

function cookies(k, A) {
  let operations = 0
  let sorted = A.sort(sortNumbers)
  while (sorted[0] < k && sorted.length > 1) {
    const firstTwo = sorted.splice(0,2)
    sorted.push(firstTwo[0] + (2 * firstTwo[1]))
    sorted = sorted.sort(sortNumbers)
    operations++
  }
  return sorted.reverse()[0] >= k ? operations : -1
}

cookies(7, [ 1, 2, 3, 9, 10, 12 ])
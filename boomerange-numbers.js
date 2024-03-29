const main = arr => {
  let result = []

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] == arr[i+2] && arr[i] != arr[i+1]) {
      const array = [arr[i], arr[i + 1], arr[i + 2]]
      if (!result.includes(array)) result.push(array)
    }
  }
  result.push(result.length)
  return result
}


console.log(main([1,2,1,3,1,1,1,2,3,2,3,1,3,3,3,4,5,4,5,4,3,2,3,4,3]))

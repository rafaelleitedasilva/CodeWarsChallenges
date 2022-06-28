function makeValley(arr) {
    var leftWing = []
    var rightWing = []
    arr.sort((a, b) => b - a)
      .forEach((el, i) => i % 2 == 0 ? leftWing.push(el) : rightWing.unshift(el))
    
    return [...leftWing, ...rightWing]
}
  console.log(makeValley([10,11,20,30,40,56,54,23,12]))
function reverseWords(str) {
    let arr = str.split();
    arr.reverse()
    return arr.join()
}

console.log(reverseWords("Abacaxi banana uva"))
/* My resolution */
function friend(friends){
    let a = []; let shouldBe = []; let arr = [];
   friends.forEach((item) => {
    //Take an element from the array and separate it into another array
     arr = item.split('')
     if(arr.length == 4){
      a.push(item)
     } else{
      shouldBe.push(item)
     }
   })
    return a;
}

  /* Better resolution */

  function friend(friends){
    //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    return friends.filter(n => n.length === 4)
  }

  console.log(friend(['Your','Mark','Ranson']))
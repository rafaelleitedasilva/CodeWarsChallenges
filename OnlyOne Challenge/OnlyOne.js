function check(a, x) {
    let ch = true;
     for(let y = 0; y < a.length; y++){
      if(a[y] == x){
      return true
      }else{
        ch = false
      }
     }
    return ch
}
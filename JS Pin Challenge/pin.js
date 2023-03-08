//The solution of others programmers
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}


function validatePIN (pin) {

  var pinlen = pin.length;
  var isCorrectLength = (pinlen == 4 || pinlen == 6);
  //*(* start a capture group
  //*\d* a shorthand character class, which matches all numbers; it is the same as [0-9]+ one or more of the expression
  //*)* end a capture group
  //*/* a literal forward slash
  var hasOnlyNumbers = pin.match(/^\d+$/);
    
  if(isCorrectLength && hasOnlyNumbers){
    return true;
  }
  
  return false;

}

function validatePIN (pin) {
  //return true or false
  var n = pin.length;
  if( n != 4 && n != 6)
      return false;
  for (var i in pin)
      if (pin[i] > '9' || pin[i] < '0')
          return false;
  return true;
}
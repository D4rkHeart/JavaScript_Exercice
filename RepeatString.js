function repeatStringNumTimes(str, num) {
var repeatedStr = "";
  while (num > 0) {
    repeatedStr += str;
    num--;
  }
  return repeatedStr;
}

console.log(repeatStringNumTimes("Action Conquers Fear, ", 3))
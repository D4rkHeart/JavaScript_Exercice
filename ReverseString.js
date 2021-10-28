function reverseString(str) {
    for (var reverseStr = "" , i = str.length -1 ; i >= 0 ; i--){
       reverseStr += str[i]
    }

    return reverseStr
}
    
console.log(reverseString("For the Horde"));
function findLongestWordLength(str) {
    var splitedStr = str.split(" ")
    var longestWord = 0
    
    for(let i = 0 ; i < splitedStr.length ; i++){
        if(splitedStr[i].length > longestWord){
          longestWord = splitedStr[i].length
        }
    }
    return longestWord
}

console.log(findLongestWordLength("Random words in front of other random words create a random sentence."));
//inputs 
inputs1 = "baba"
inputs2 = "abba"

//Create a dictionary
let countLetter = (input) => {
  return input.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
}, {})};

//Call the function && set the var here for utility purposes 
total1 = countLetter(inputs1)
total2 = countLetter(inputs2)

//Check the dictionary
verifyHash = (total1,total2) =>{ 
    if(Object.keys(total1).length === Object.keys(total2).length){
        for (const caracter in total1){
            if(total1[caracter] !== total2[caracter]){
                return false
            }
        }
    }else{
        return false
    }
console.log(`${inputs1} is an anagram of ${inputs2}`)
}

//call the function
verifyHash(total1, total2)


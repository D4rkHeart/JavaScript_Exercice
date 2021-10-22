const REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  //Ask input form user
  readline.question(`Write your password : `, userInput => {
    console.log(`Hi ${userInput}!`)
    readline.close()

    //Check password
    console.log(REGEX.test(userInput));
    switch (REGEX.test(userInput)) {
      case true:
        console.log("Congratulation you know how to create a strong password")
        break;
    
      case false :
        console.log("Error : your password need to include one capital letter, one number,and one number or symbol and be at least 8 caracter long")
        break;
    }
  })

/*FastSolution : 
Var readlineSync = require('readline-sync');
FastSolution
password = readlineSync.questionNewPassword();
console.log('-- Password is ' + password);                      
console.log('Login ...');
*/                                     

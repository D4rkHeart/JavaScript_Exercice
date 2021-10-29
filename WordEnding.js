// SOLUTION 1
function confirmEnding1(str, target) {
    return str.endsWith(target)
}

// SOLUTION 2
function confirmEnding2(str, target) {
    return str.slice(str.length - target.length) === target;
}

// SOLUTION 3
function confirmEnding3(str, target) {
    let re = new RegExp(target + "$", "i");
  
    return re.test(str);
}


console.log(confirmEnding1("Abstraction", "action"));
console.log(confirmEnding2("Abstraction", "action"));
console.log(confirmEnding3("Abstraction", "action"));
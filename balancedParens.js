// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
 
const balancedPar = (string) => {
let splitstring = string.split('');

let stringR = []
let stringL = []
// assign variables before loop when you need to store data into 
for( let i = 0; i < splitstring.length; i++){  // for loosp will iterate through each letter of the string because of .split method 
    if(splitstring[i] === '('){                 // if any index of the string matches '(' it will be pushed to empty array 'stringL'
        stringL.push(splitstring[i])
    };
    if (splitstring[i] === ')'){                // same as above just for different side
        stringR.push(splitstring[i])
    }
} 
return stringR.length === stringL.length ? 'true' : 'false'    // balanced : unbalanced
// ter operator, can use when only expecting two output
// it compares length of both strings 
}

console.log(balancedPar(sample1))
console.log(balancedPar(sample2))
console.log(balancedPar(sample3))
console.log(balancedPar(sample4))
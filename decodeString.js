// Write your code below this line 
// Challenge 11/1 
let decoder = (string) =>{
    let decipher = Number(string[0])
    let result = ''
    for(let i = 1; i < string.length; i++){
        let stringCon = string[i].charCodeAt() + decipher
        result += String.fromCharCode(stringCon)
        //if(isNaN(decipher[i])){
           // i += decipher[i]
        //} else {
         //   result += decipher[i]
        } return result
    } 

let word = decoder('2fcjjm')
console.log(word)

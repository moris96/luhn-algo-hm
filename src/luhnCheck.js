//method 1: good old fashioned algo
function checkLuhn(num){
    const list = (num + "").split('').reverse('').map(x => parseInt(x))
    const lastDigit = list.shift()
    let sum = list.reduce(
        (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val)), 0
    );
    sum += lastDigit
    return sum % 10 === 0
}
console.log(checkLuhn(4222222222222))
console.log(checkLuhn(1234567890123456))


// //method 2: npm import luhn. I prefer this. waaaaaaaaay easier and saves time lol, but unfortunately Arthur said no to this method :( 
// const luhn = require("luhn")
// let validCreditNumber = luhn.validate(12345678901234561)
// console.log(validCreditNumber)



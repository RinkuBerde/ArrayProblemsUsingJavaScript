/*ArrayProblem5----> Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
etc and store them in an array
*/
let repeatingArray = new Array()

for(let i = 10; i < 100; i++){
    let temp = parseInt(i)
    let remainder = (temp % 10)
    remaining = parseInt(i / 10)
    if(remaining == remainder){
        repeatingArray.push(i)
    }
}
console.log(repeatingArray)
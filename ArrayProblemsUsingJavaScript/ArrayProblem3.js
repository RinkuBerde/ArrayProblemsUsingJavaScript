/* ArrayProblem3----> Extend the Prime Factorization Program to store all the Prime Factors of a
number n into an array and finally display the output.
*/
io= require('console-read-write');

let primeFactorsArray= new Array();
main()
async function main()
{
    let checkForFactors= false;
    console.log("Enter a number to get prime factors");
    let n= await io.read();
    primeFactors(n)
}

function primeFactors(n)
{
    while (n % 2 == 0)
    {
        primeFactorsArray.push(2)
        n = Math.floor(n / 2);
    }
    for(let i = 3;i <= Math.floor(Math.sqrt(n));i = i + 2)
    {
        while (n % i == 0)
        {
            primeFactorsArray.push(i)
            n = Math.floor(n / i);
        }
    }
    if (n > 2){
        primeFactorsArray.push(n)
    }
    console.log(primeFactorsArray)
}
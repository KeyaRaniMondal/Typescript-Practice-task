// Problem 1
const filterEvenNumbers=(nums:number[]):number[]=>{
    return nums.filter(num=>num%2==0)
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 2
const reverseString=(str:string):string=>{
    let reversed=''
    for(let i=str.length-1;i>=0;--i)
    {
        reversed+=str[i]
    }
    return reversed
}
console.log(reverseString("typescript"));

// Problem 3:
const checkType=(type:string|number):string|number=>{
    if(typeof type==='string')
        return type
    else
        return type
}
console.log(checkType("Hello"));
console.log(checkType(42));

// Problem 4:

const getProperty()
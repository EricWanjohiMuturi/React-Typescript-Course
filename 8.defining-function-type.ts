function add(a:number ,b:number){
    const result = a + b;
    return result;
}

function calculate(
    a:number , 
    b:number, 
    calcFn: (a:number , b:number) => number // <= This is the syntax for providing types for a function. 
){ // <=if you are working with a function as a value, you must define the type of the function.
    calcFn(a,b);
}

calculate(2, 5, add);



function add(a:number ,b:number){
    const result = a + b;
    return result;
}

type AddFn = (a:number , b:number) => number // use the type keyword to store the parameter type list || creating custom types using type keyword

function calculate(
    a:number , 
    b:number, 
    calcFn: AddFn // <= This is the syntax for providing types for a function. 
){ // <=if you are working with a function as a value, you must define the type of the function.
    calcFn(a,b);
}

calculate(2, 5, add);

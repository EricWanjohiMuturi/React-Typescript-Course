function add(a: number, b: number): void { // <= you can also use undefined for functions that do not have a return statement
    const result = a + b;
    console.log(result);
}

function addd(a: number, b: number){ // <= This has a return statement | avoid declaring a type. You can still use a number type in this case
    const result = a + b;
    return result;
}

function adddd(a: number, b: number): number{ // <= This has a return statement | the type is number
    const result = a + b;
    return result;
}
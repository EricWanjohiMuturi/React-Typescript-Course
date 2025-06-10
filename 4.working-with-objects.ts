let user; // <= here we declare any type but does not have type safety

user = {
    name: 'Max',
    age: 34,
    isAdmin: true,
    id: 123,
};

let student: object; // <= here we declare the type to be an object, which is a built in type of typescript.

student = {
    name: 'Eric',
    age: 34,
    isAdmin: true,
    id: 123,
};

//student = 'Max';  <= here we get an error since student has already been declared to be of type object

/* A better way of declaring objects types */
let instructor: {
    name: string; // <= string type specified to the key and the expected value.
    age: number; // <= number type specified to the key and the expected value.
    isAdmin: boolean; // <= boolean type specified to the key and the expected value.
    id: number | string; // <= union type specified to the key and the expected value.
};  // <= in Type definition we seperate with a semi-colon and not a comma. 

// By doing this we avoid storing the object as empty - remember, Type safety!!

//instructor = {};  <= here you will get an error since you are submitting an empty object ensuring type safety. 
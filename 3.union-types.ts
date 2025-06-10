let userID : string | number = 'abc1'; /* <= here you can create a union by using the pipe symbol. We are telling Typescript that we can store a number 
or a string in the variable */
userID = 123;
userID = 'abc';

/* userID = true;   <= we cannot store a boolean here since it is neither a number nor a string*/

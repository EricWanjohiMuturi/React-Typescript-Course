//WORKING WITH TYPE INFERENCE & TYPE EXPLICIT TYPE NOTATION

let userName = 'Max'; /* in here we see JS code being written in a typescript file */
/* userName = 34;  <= in here we can not use another data type since the variable has been declared to only hold strings and not integer. The initial value is declared to a string.*/ 

let userNamee; /* <= in here, the variable has been declared to accept any type and does not have an initial value. Therefore can hold a string type of an integer type of data*/
userNamee = 34; 
userNamee = 'Max'; /* <= See here now there are no errors */  /* Now in this situation it defaults to Javascript */

/* Lets assign the type the Typescript way */
let useerName: string; /* <= This is Typescript specific syntax || string is one of the built in types that Typescript supports */
/* useerName = 34; <= in here Typescript strictly checks the type and errors out the integer since the initial value was declared as a string type */
useerName = 'Max';
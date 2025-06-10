/* One way to do it */
let adults: Array<string>; // <= you need to add the type as an argument of the Array to accept a specific type.

adults = [ 'Erico', 'Kevin' , 'Agatha' ]


/* Better approach */
let children: string[]; // <= you can also have number[], boolean[], {name:string, age:number, id: string | number}[]

children = ['Eric', 'Wanjohi', 'Muturi']
//children = [ 1,2,3]  <= now the array does not accept number types
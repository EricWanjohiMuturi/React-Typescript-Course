type Role = 'admin' | 'user' | 'editor' | 'abc';

let role: Role;

role = 'admin';
role = 'user';
role = 'editor';
role = 'abc';

function performAction(action:string, role: Role) {
    if ( role === 'admin' ){
      // ...  
    }
}

let roles: Array<Role>;

roles = ['admin', 'editor']

//GENERIC TYPES

type DataStorage<T> = {
    storage: T[];
    add: (data:T) => void; 
};

const textStorage: DataStorage<string> = {
    storage: [],
    add(data){
        this.storage.push(data);
    }
}


type User = {
    id: number;
    name: string;
};

const userStorage: DataStorage<User> = {
    storage: [],
    add(user){
        this.storage.push(user);
    }
}
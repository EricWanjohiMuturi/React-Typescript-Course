type Role = 'admin' | 'user' | 'editor' | 'abc';

let role: Role;

role = 'admin';
role = 'user';
role = 'editor';
role = 'abc';

function performAction(action:string, role: Role) {
    if ( role === 'admin' ){
        
    }
}
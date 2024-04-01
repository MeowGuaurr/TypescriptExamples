let username = "Danielle";
// let malename: string = "David";
// let number: number = 2;
let userAge: 24;
let isAdmin = true;

let userID: string | number;
userID = "abcd"

//Define an object user
let user: { 
    // define types within the user object
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
} 

user = {
    name: "Danielle",
    age: 24,
    isAdmin: true,
    id: 'abcd'
}

// let hobbies: Array<string>
let hobbies : string [];
hobbies = ['play video games', 'reading', 'watching movies']

// functios and return values
function add(a: number, b: number){
    const result = a + b;
    return result;
}

// function calculate(a: number, b: number, calcFn: (a: number, b: number) => number){
//     calcFn(a,b);
// }

//custom types
type AddFn = (a: number, b: number) => number

function calculate(a: number, b: number, calcFn: AddFn){
    calcFn(a,b);
}

calculate(2,5, add);

//creating interfaces limited to object types, easily extendable
interface Credentials {
     password: string;
     email: string;
}

let creds: Credentials;

creds = {
    password: 'password',
    email: 'email@example.com',
}

class AuthCredentials implements Credentials {
    password: string;
    email: string;
    userName: string;
}

function login(Credentials: Credentials) {

}

login(new AuthCredentials())

type Admin = {
    permissions: string[]
}

type appUser = {
    userName: string
}

//Merging types
type AppAdmin = Admin & appUser;

let admin: AppAdmin;

admin = {
    permissions: ['login'],
    userName: 'admin'
}

//specific literals 
type Role = 'admin' | 'user' | 'editor'
let role: Role;

//Type guards
function performaction(action: string | number, role: Role){
    if (role === 'admin' && action === 'string'){
        //...
    }
}

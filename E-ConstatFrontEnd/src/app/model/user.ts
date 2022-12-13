import { Role } from "./role";


export class User{
    id:number;
    email:string;
    firstname:string;
    lastname:string;
    password:string;
    reset_password_token:string;
    username:string;
    role:Role;
}
import { RepoUser, User } from "../../app/Schemas"
//* definimos un puerto que define las limitaciones de un adapter 
export interface ForManagingUser{
    getUser(email:string):Promise<RepoUser>
    createUser(user:User,password:string):Promise<RepoUser>

}
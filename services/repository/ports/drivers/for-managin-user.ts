import { RepoUser, User } from "../../app/Schemas"

export interface ForManagingUser{
    getUser(email:string):Promise<RepoUser>
    createUser(user:User,password:string):Promise<RepoUser>

}
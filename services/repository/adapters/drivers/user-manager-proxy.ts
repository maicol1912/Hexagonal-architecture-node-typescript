import { RepoUser, User } from "../../app/Schemas";
import { Repository } from "../../app/repository";
import { ForManagingUser } from "../../ports/drivers";

export class UserManagerProxy implements ForManagingUser{
    constructor(private readonly repository:Repository){}

    getUser(email: string): Promise<RepoUser> {
        return this.repository.getUser(email)
    }
    createUser(user: User, password: string): Promise<RepoUser> {
        return this.repository.createUser(user,password)
    }
    
}
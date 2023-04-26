import { User as RepoUser } from "../../../repository/app/Schemas"
import {User} from "../drivers"
export interface ForRepoQuerying{
    getUser(email: string): Promise<RepoUser>
    createUser(user: User, password: string): Promise<RepoUser>
}
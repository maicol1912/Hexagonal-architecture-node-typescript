import { User } from "../../../repository/app/Schemas";
import { ForRepoQuerying } from "../../ports/driven/for-repo-querying";

const userMock:User = {
    id: '1212',
    name:'maicol',
    email:'Arcila'
}
export class RepoQueryStub implements ForRepoQuerying{
    getUser(_email: string): Promise<User> {
        return Promise.resolve(userMock)
    }
    createUser(_user: User, _password: string): Promise<User> {
        return Promise.resolve(userMock)
    }
    
}
//* los adapters son los proxys que implementan un úerto, el cual el puerto es el que limita el adapter
//* los drivens son los proxys que se encargan de llamar a los drivers de otro hexagono, los drivens de un hexagono
//* se convierten en los drivers de otro hexagono, ya que el driven hace que el driver se ejecute
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
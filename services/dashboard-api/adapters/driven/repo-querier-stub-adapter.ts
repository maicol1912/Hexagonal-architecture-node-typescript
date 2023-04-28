//* los driven como nomenclatura, al principio colcoan el exagono que llaman en este caso al repository
//* los adapters son los proxys que implementan un úerto, el cual el puerto es el que limita el adapter
//* los drivens son los proxys que se encargan de llamar a los drivers de otro hexagono, los drivens de un hexagono
//* se convierten en los drivers de otro hexagono, ya que el driven hace que el driver se ejecute
import { RepoUser } from "../../../repository/app/Schemas";
import { User } from "../../app/Schemas";
import { ForRepoQuerying } from "../../ports/driven/for-repo-querying";

const userMock: RepoUser = {
    id: '1',
    name:'John Doe',
    email:'john@gmail.com'
}
//* un adapter stub es debido a que los datos son simulados y mockeados
export class RepoQueryStub implements ForRepoQuerying{
    //* este getUser ejecuta los getUser mock
    getUser(_email: string): Promise<RepoUser> {
        return Promise.resolve(userMock)
    }
    //* el create user llama un usuario y lo devuelve
    createUser(_user: User, _password: string): Promise<RepoUser> {
        return Promise.resolve(userMock)
    }
    
}
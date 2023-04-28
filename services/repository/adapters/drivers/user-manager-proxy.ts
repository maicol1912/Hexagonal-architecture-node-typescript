import { ExternalUser, RepoUser, User } from "../../app/Schemas";
import { Repository } from "../../app/repository";
import { ForManagingUser } from "../../ports/drivers";

//* aca etamos implementando los metodos del puerto usando la instancia del App
export class UserManagerProxy implements ForManagingUser{
    //* por medio del constructor llamamos el app, para ejecutar sus funciones
    constructor(private readonly repository:Repository){}
    //* llamamos al getUser del repositorio, este metodo de adapter sera implementada por otros hexagonos
    getUser(email: string): Promise<ExternalUser> {
        return this.repository.getUser(email)
    }
    //* estamos llamando al servicio de app y este metodo se implementa desde otros hexagonos
    createUser(user: User): Promise<ExternalUser> {
        return this.repository.createUser(user)
    }
    
}
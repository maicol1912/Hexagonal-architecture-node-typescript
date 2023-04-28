import { ForControlAuthenticating, ForRepoQuerying } from "../ports/driven";
import { ForAuthenticating } from "../ports/drivers";
import { AuthenticatedUser, User } from "./Schemas";

//* en este caso la aplicacion implementa el adapter ya que el adapter contiene las funciones del hexagono
export class DashboardApi implements ForAuthenticating{
    //* siempre la app debe implemnetar los adapters driven de otros hexagonos, nunca directamente la app
    constructor(
        //* debemos implementar siempre los puertos que se comportaran, como sean definidos en los adapters
        //* pero se nombra como el que realiza la accion, ya que podemos acceder a los metodos implementados
        private readonly controlAuthenticator:ForControlAuthenticating,
        private readonly repoQuerier:ForRepoQuerying
    ){}
    //* el metodo login implementa los 2 drivens que consultan los servicios externos
    //* de otros hexagonos
    async login(email: string, password: string): Promise<AuthenticatedUser> {
        const authDetails = await this.controlAuthenticator.getAuthDetails(email,password);
        const permissions = await this.controlAuthenticator.getPermission(email,password);
        const user = await this.repoQuerier.getUser(email)

        //* este devuelve una copia de los atributos de los 2 objetos
        //* y el permiso tambien
        const result =  {
            ...user,
            ...authDetails,
            permissions
        }
        console.log('LOGIN', result)
        return result
    }

    //* aca tambien se usan los driven para ejecutar servicios externos y poder ser usados
    async register(user: User): Promise<AuthenticatedUser> {
        const newUser = await this.repoQuerier.createUser(user);
        const authDetails = await this.controlAuthenticator.getAuthDetails(
            user.email,
            user.password
        )
        const permissions = await this.controlAuthenticator.getPermission(
            user.email,
            user.password
        )
        //* este devuelve una copia de los atributos de los 2 objetos
        //* y el permiso tambien
        const result = {
            ...newUser,
            ...authDetails,
            permissions
        }
        console.log('REGISTER', result)
        return result
    }
}
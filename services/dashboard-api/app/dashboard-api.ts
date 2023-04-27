import { ForControlAuthenticating, ForRepoQuerying } from "../ports/driven";
import { ForAuthenticating } from "../ports/drivers";
import { AuthenticatedUser, User } from "./Schemas";

//* en este caso la aplicacion implementa el adapter ya que el adapter contiene las funciones del hexagono
export class DashboardApi implements ForAuthenticating{
    constructor(
        private readonly controlAuthenticator:ForControlAuthenticating,
        private readonly repoQuerier:ForRepoQuerying
    ){}
    async login(email: string, password: string): Promise<AuthenticatedUser> {
        const authDetails = await this.controlAuthenticator.getAuthDetails(email,password);
        const permissions = await this.controlAuthenticator.getPermission(email,password);
        const user = await this.repoQuerier.getUser(email)

        const result =  {
            ...user,
            ...authDetails,
            ...permissions
        }
        console.log('LOGIN', result)
        return result
    }
    async register(user: User, password: string): Promise<AuthenticatedUser> {
        const newUser = await this.repoQuerier.createUser(user,password);
        const authDetails = await this.controlAuthenticator.getAuthDetails(
            user.email,
            password
        )
        const permissions = await this.controlAuthenticator.getPermission(
            user.email,
            password
        )
        const result = {
            ...newUser,
            ...authDetails,
            ...permissions
        }
        console.log('REGISTER', result)
        return result
    }
}
import { AuthenticatedUser, User } from "../../app/Schemas";
import { DashboardApi } from "../../app/dashboard-api";
import { ForAuthenticating } from "../../ports/drivers";

//* un adapter para traer parametros externos, y utilizarlos dentro de nuestro dashboard api
//* sirve como un proxy, proxea un evento externo lo proxea y lo utiliza en dashboard Api
export class AuthenticatorProxyAdapter implements ForAuthenticating{
    constructor(private readonly dashboardApi:DashboardApi){}
    login(email: string, password: string): Promise<AuthenticatedUser> {
        return this.dashboardApi.login(email,password)
    }
    register(user: User, password: string): Promise<AuthenticatedUser> {
        return this.dashboardApi.register(user,password)
    }

}
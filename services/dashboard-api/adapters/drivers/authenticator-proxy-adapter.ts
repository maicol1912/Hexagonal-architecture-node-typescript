//* los adapters son los proxys que implementan un úerto, el cual el puerto es el que limita el adapter
//* los drivers son los proxys y los que implementan los puertos ---- el driver es lo que realiza el hexagono y a lo que van a llamar
//* los drivens de otro hexagono

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
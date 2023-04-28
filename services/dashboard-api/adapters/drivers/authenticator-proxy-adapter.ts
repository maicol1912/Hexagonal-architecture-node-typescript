//* los driven como nomenclatura, los adapters drivers-siempre van con el proxy ya que son intermediarios
//* los adapters son los proxys que implementan un úerto, el cual el puerto es el que limita el adapter
//* los drivers son los proxys y los que implementan los puertos ---- el driver es lo que realiza el hexagono y a lo que van a llamar
//* los drivens de otro hexagono

import { AuthenticatedUser, User } from "../../app/Schemas";
import { DashboardApi } from "../../app/dashboard-api";
import { ForAuthenticating } from "../../ports/drivers";

//* un adapter para traer parametros externos, y utilizarlos dentro de nuestro dashboard api
//* sirve como un proxy, proxea un evento externo lo proxea y lo utiliza en dashboard Api
export class AuthenticatorProxyAdapter implements ForAuthenticating{
    //* el driver llama la instancia de la app para realizar las acciones y metodos que este tiene incluidos
    constructor(private readonly dashboardApi:DashboardApi){}
    
    //* llamamos al login definido en nuestro port y ejecutamos el metodo respectivo de nuestro dashboard API
    login(email: string, password: string): Promise<AuthenticatedUser> {
        return this.dashboardApi.login(email,password)
    }

    //* llamamos al register definido en nuestro port y ejecutamos el metodo respectivo de nuestro dashboard API
    register(user: User, password: string): Promise<AuthenticatedUser> {
        return this.dashboardApi.register(user)
    }

}
//* los driven como nomenclatura, al principio colcoan el exagono que llaman en este caso al control-plane
//* los adapters son los proxys que implementan un úerto, el cual el puerto es el que limita el adapter
//* los drivens son los proxys que se encargan de llamar a los drivers de otro hexagono, los drivens de un hexagono
//* se convierten en los drivers de otro hexagono, ya que el driven hace que el driver se ejecute

import { AuthDetails, Permissions } from "../../app/Schemas";
import { ForControlAuthenticating } from "../../ports/driven";

const authDetailsMock:AuthDetails = {
    token:'token',
    refreshToken:'refreshToken'
}

const permisionsMock:Permissions = {
    admin:true,
    user:true
}
//* se denomina .stub debido a que es una simulacion de los datos, ya que estan mockeados
export class ControllAuthenticatorStub implements ForControlAuthenticating{
    //*ejecuta el getDetails el api, que es quien llama al servicio de control plane
    getAuthDetails(_email: string, _pasword: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailsMock)
    }

    //* llama al getPermision del api, que es quien llama al servicio de control plane
    getPermission(_email: string, _password: string): Promise<Permissions> {
        return Promise.resolve(permisionsMock)
    }
    
}
//* los adapters son los proxys que implementan un úerto, el cual el puerto es el que limita el adapter
//* los drivens son los proxys que se encargan de llamar a los drivers de otro hexagono, los drivens de un hexagono
//* se convierten en los drivers de otro hexagono, ya que el driven hace que el driver se ejecute

import { AuthDetails, Permissions } from "../../app/Schemas";
import { ForControlAuthenticating } from "../../ports/driven";

const authDetailsMock:AuthDetails = {
    token:'11212DADSA',
    refreshToken:'1|123311'
}

const permisionsMock:Permissions = {
    admin:true,
    user:true
}
export class ControllAuthenticatorStub implements ForControlAuthenticating{
    getAuthDetails(_email: string, _pasword: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailsMock)
    }
    getPermission(_email: string, _password: string): Promise<Permissions> {
        return Promise.resolve(permisionsMock)
    }
    
}
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
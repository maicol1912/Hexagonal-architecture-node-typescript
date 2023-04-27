import { AuthenticatedUser, User } from "../../app/Schemas";


//*los drivers son contratos, se usan las ineraces para demostrar reglas que se tienen que seguir en nuestra aplicacion
export interface ForAuthenticating{
    login(email:string,password:string):Promise<AuthenticatedUser>;
    register(user: User, password: string):Promise<AuthenticatedUser>;

}
import { AuthDetails, Permissions } from "../../app/Schemas";

export interface ForControlAuthenticating{
    getAuthDetails(email:string,pasword:string):Promise<AuthDetails>;
    getPermission(email: string, password: string): Promise<Permissions>;    
}
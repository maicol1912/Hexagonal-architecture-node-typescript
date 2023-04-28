//* los port drivens son quien van a limitar las funcionalidades del adapter driven 
//* como buena practica los adapters driven deben ir con el nombre de hacia que exagono o servicio llaman
import { AuthDetails, Permissions } from "../../app/Schemas";

//* aca limitamos los metodos que va a importar el driven de autenticacion // autehnticator
export interface ForControlAuthenticating{
    getAuthDetails(email:string,pasword:string):Promise<AuthDetails>;
    getPermission(email: string, password: string): Promise<Permissions>;    
}
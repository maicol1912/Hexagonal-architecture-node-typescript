//* los port drivens son quien van a limitar las funcionalidades del adapter driven 
//* como buena practica los adapters driven deben ir con el nombre de hacia que exagono o servicio llaman
//* en este caso el repo es porque se comunica con el hexagono de repository
import { User as RepoUser } from "../../../repository/app/Schemas"
import { User } from "../../app/Schemas" 
export interface ForRepoQuerying{
    getUser(email: string): Promise<RepoUser>
    createUser(user: User, password: string): Promise<RepoUser>
}
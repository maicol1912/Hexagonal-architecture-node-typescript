//* los port drivens son quien van a limitar las funcionalidades del adapter driven 
//* como buena practica los adapters driven deben ir con el nombre de hacia que exagono o servicio llaman
//* en este caso el repo es porque se comunica con el hexagono de repository
import { ExternalUser, RepoUser } from "../../../repository/app/Schemas"
import { User } from "../../app/Schemas" 

//* limita los metodos que puede tener el repoQuerier
export interface ForRepoQuerying{
    getUser(email: string): Promise<ExternalUser>
    createUser(user: User): Promise<ExternalUser>
}
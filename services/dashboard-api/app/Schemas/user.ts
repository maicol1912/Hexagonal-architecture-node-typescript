//* en el schemas iran todas las interfaces que necesitamos

import { Permissions } from "./auth";


export interface AuthenticatedUser {
    id: string;
    email: string;
    name: string;
    token: string
    refreshToken: string
    //* incluimos una interface dentro de otra interface
    permissions:Permissions
}
//* estamos creando un type que se basa de una interface, pero omitiendo los campos que le digamos
/*export type User = Omit<AthenticatedUser,'id'|'token'|'refreshToken'>*/

//* estamos creando un type que se basa de una interface, pero seleccionando solo lo que le especifiquemos
export interface User extends Pick<AuthenticatedUser, 'email' | 'name'>{
    password:string
}
//* aca van los eventos que van a entrar

export interface AuthenticatedUser{
    id:string;
    email:string;
    name:string;
    token:string
    refreshToken:string
}
//* estamos creando un type que se basa de una interface, pero omitiendo los campos que le digamos
/*export type User = Omit<AthenticatedUser,'id'|'token'|'refreshToken'>*/

//* estamos creando un type que se basa de una interface, pero seleccionando solo lo que le especifiquemos
export type User = Pick<AuthenticatedUser,'email'|'name'>

//*los drivers son contratos, se usan las ineraces para demostrar reglas que se tienen que seguir en nuestra aplicacion
export interface ForAuthenticating{
    login:(email:string,password:string)=>Promise<AuthenticatedUser>;
    register(user: User, password: string):Promise<AuthenticatedUser>;

}
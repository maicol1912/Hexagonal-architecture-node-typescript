//* en el schemas iran todas las interfaces que necesitamos
import {z} from "zod"
import {  PermissionsSchema } from "./auth";

export const AuthenticatedUserSchema  = z.object({
    id: z.string(),
    email: z.string().email('invalid email'),
    name: z.string(),
    token: z.string(),
    refreshToken: z.string(),
    //* este usa otro schema de zod
    permissions:PermissionsSchema
})
//* estamos creando un type como schema que se basara en el del autenticatedSchema
export type AuthenticatedUser = z.infer<typeof AuthenticatedUserSchema>

//* estamos creando un type que se basa de una interface, pero seleccionando solo lo que le especifiquemos
export interface User extends Pick<AuthenticatedUser, 'email' | 'name'>{
    password:string
}
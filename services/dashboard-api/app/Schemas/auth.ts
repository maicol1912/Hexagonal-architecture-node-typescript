import {z} from "zod"
//* en el schemas iran todas las interfaces que necesitamos
export const AuthDetailsSchema = z.object({
    //token: z.string().min(5).max(10).optional().email('invalid email'),
    token: z.string(),
    refreshToken: z.string()
})

export const PermissionsSchema = z.object({
    admin: z.boolean(),
    user: z.boolean()
})

export type AuthDetails = z.infer<typeof AuthDetailsSchema>;
export type Permissions = z.infer<typeof PermissionsSchema>;
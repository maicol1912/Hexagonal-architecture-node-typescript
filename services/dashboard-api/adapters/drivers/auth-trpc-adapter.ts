import { initTRPC } from "@trpc/server";
import { DashboardApi } from "../../app/dashboard-api";
import { AuthenticatedUserSchema, RegisterSchema } from "../../app/Schemas";

//* la idea es que con trpc debemos crear rutas
export function authTRPCAdapter(dashboardApi: DashboardApi, t: ReturnType<typeof initTRPC.create>) {
    return t.router({
        login: t.procedure
        //*que es lo que va a entrar
        .input(RegisterSchema.pick({ email: true, password: true }))
        //* es lo que va a devolver este metodo
        .output(AuthenticatedUserSchema)
        .mutation(({input})=> dashboardApi.login(input.email,input.password)),

        register: t.procedure
        //*que es lo que va a entrar
        .input(RegisterSchema)
        //* es lo que va a devolver este metodo
        .output(AuthenticatedUserSchema)
        .mutation(({ input }) => dashboardApi.register(input)),
    })
}
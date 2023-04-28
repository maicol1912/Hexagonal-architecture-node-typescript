//* una composicion es una instancia de nuestro exagono con todo lo que necesita para funciona y esta nos da 
//*la posibilidad de ser usada en forma de mock o implementacion real

import { ControllAuthenticatorStub, RepoQueryStub } from "../adapters/driven"
import { AuthenticatorProxyAdapter, authTRPCAdapter } from "../adapters/drivers";
import { DashboardApi } from "./dashboard-api"
import { initTRPC } from "@trpc/server";

//* el composition root es el que implementa el dashboard api
const compositionMock = ()=>{
    //DRIVENS 
    const controlAuthenticatorStub = new ControllAuthenticatorStub()
    const repoQuerierStub = new RepoQueryStub();

    //APP
    const dashBoardApiMoCk = new DashboardApi(controlAuthenticatorStub,repoQuerierStub)

    //DRIVERS
    //* lo que debe devolver es una instancia del adapter
    //* que ejecuta todo lo que esta definido en el driver port
    const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(
        dashBoardApiMoCk
    )
    return {
        authenticatorProxyAdapter
    }
}

export const { authenticatorProxyAdapter } =  compositionMock()
/*
//* creamos un mock para enviarlo en los metodos
const registerMock = {
    name:"maicol",
    email:"maicolarcila@gmail.com",
    password:"password"
}
//* debemos ejecutar siempre los adapters, nunca directamente la App
authenticatorProxyAdapter.login('Jhon@gmail.com','123455')
authenticatorProxyAdapter.register(registerMock, '123455')
*/

export const localTRPCCompose  = ()=>{
    //DRIVENS 
    const controlAuthenticatorStub = new ControllAuthenticatorStub()
    const repoQuerierStub = new RepoQueryStub();

    //APP
    const dashBoardApiMoCk = new DashboardApi(controlAuthenticatorStub, repoQuerierStub)

    //TRPC INSTANCE 
    const t = initTRPC.create()

    // TRPC DRIVER
    const authTRPCAdapterRouter = authTRPCAdapter(dashBoardApiMoCk,t)

    const appRouter = t.router({
        auth:authTRPCAdapterRouter
    })
    return {appRouter}
}
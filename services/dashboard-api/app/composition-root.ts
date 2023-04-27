//* una composicion es una instancia de nuestro exagono con todo lo que necesita para funciona y esta nos da 
//*la posibilidad de ser usada en forma de mock o implementacion real

import { ControllAuthenticatorStub, RepoQueryStub } from "../adapters/driven"
import { AuthenticatorProxyAdapter } from "../adapters/drivers";
import { DashboardApi } from "./dashboard-api"

//* el composition root es el que implementa el dashboard api
const compositionMock = ()=>{
    const controlAuthenticatorStub = new ControllAuthenticatorStub()
    const repoQuerierStub = new RepoQueryStub();
    const dashBoardApiMoCk = new DashboardApi(controlAuthenticatorStub,repoQuerierStub)

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

const registerMock = {
    name:"maicol",
    email:"maicolarcila@gmail.com"
}
authenticatorProxyAdapter.login('Jhon@gmail.com','123455')
authenticatorProxyAdapter.register(registerMock, '123455')

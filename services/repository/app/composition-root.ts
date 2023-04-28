import { LoggerStubAdapter } from "../adapters/drivens"
import { UserManagerProxy } from "../adapters/drivers/user-manager-proxy"
import { Repository } from "./repository"

//* aca realizamos un mock de los adapter y la app
//* lo definimos como un mock ya que es simulado
export const compositionMock = ()=>{
    //* inicializamos el driven
    const monitorStub = new LoggerStubAdapter()
    //* inicializamos la App enviandole el driven
    const repositoryMock =  new Repository(monitorStub)
    //* inicializamos el Adapter por medio de enviarle el app
    const userManagerProxy =  new UserManagerProxy(repositoryMock)

    //* debemos retornar el adapter
    return {
        userManagerProxy
    }
}
//* obtenemos el adapter que devuelve una funcion
export const {userManagerProxy} = compositionMock();

const registerMock = {
    name:"Samuelcito",
    email:"samu@gmail.com",
    password:"11223"
}
//* simulamos los servicios enviando el mock del usuario
userManagerProxy.getUser("jhon@gmail.com")
//userManagerProxy.createUser(registerMock,"jhon@gmail.com")
import { LoggerStubAdapter } from "../adapters/drivens"
import { UserManagerProxy } from "../adapters/drivers/user-manager-proxy"
import { Repository } from "./repository"

export const compositionMock = ()=>{
    const monitorStub = new LoggerStubAdapter()
    const repositoryMock =  new Repository(monitorStub)

    const userManagerProxy =  new UserManagerProxy(repositoryMock)

    return {
        userManagerProxy
    }
}

export const {userManagerProxy} = compositionMock();

const registerMock = {
    name:"Samuelcito",
    email:"samu@gmail.com",
    password:"11223"
}

userManagerProxy.getUser("jhon@gmail.com")
//userManagerProxy.createUser(registerMock,"jhon@gmail.com")
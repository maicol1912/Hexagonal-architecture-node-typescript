import { beforeEach, describe,expect,it } from "vitest";
import { LoggerStubAdapter } from "../adapters/drivens";
import { Repository } from "./repository";
import { UserManagerProxy } from "../adapters/drivers/user-manager-proxy";

//* lo que debemos testear es que el reposiotry ande bien, no mi adaptador
describe("Repository",()=>{
    //* como instanciamos los servicios en el describe los test comparten los mismos servicios
    const monitorStub = new LoggerStubAdapter()
    const repositoryMock = new Repository(monitorStub)

    //* asi se hace para que haya un servicio por cada test
    /*beforeEach(()=>{
        const repositoryMock = new Repository(monitorStub)
    })*/
    it.concurrent("should control that the user doesn't exists",async ()=>{
        const mockedEmail = "samuelcito@gmail.com"

        const expectedResult = {
            id:"1",
            name:"samuel",
            email:"samuelcito@gmail.com"
        }
        let result;
        try{
            result = await repositoryMock.getUser(mockedEmail)
        }catch(error){}
        //WHEN
        

        //THEN
        expect(result).not.toEqual(expectedResult)
    });

    it.concurrent("Should create a new user",async ()=>{
        const mockedUser = {
            name:"Samuel",
            email:"samuelcito@gmail.com",
            password:"password"
        }
        const expectedResult = {
            id: '1',
            name: mockedUser.name,
            email: mockedUser.email
        }
        //WHEN
        let result;
        try {
            result  = await repositoryMock.createUser(mockedUser)
        } catch (error) {}

        expect(result).toEqual(expectedResult)
    })


    it.concurrent("Should control that the user already exists  ", async () => {
        const mockedUser = {
            name: "Samuel",
            email: "samuelcito@gmail.com",
            password: "password"
        }
        const expectedResult = {
            id: '1',
            name: mockedUser.name,
            email:mockedUser.email
        }
        //WHEN
        let result;
        try {
            result = await repositoryMock.createUser(mockedUser)
        } catch (error) { }

        expect(result).not.toEqual(expectedResult)
    })

    it.concurrent("Should get a user", async () => {
        const mockedEmail = "samuelcito@gmail.com"

        const expectedResult = {
            id: '1',
            name: "Samuel",
            email: "samuelcito@gmail.com"
        }
        //WHEN
        let result;
        try {
            result = await repositoryMock.getUser(mockedEmail)
        } catch (error) { }

        expect(result).toEqual(expectedResult)
    })
})
import { describe, expect, it } from "vitest";
import { ControllAuthenticatorStub } from "../adapters/driven/control-authenticator-stub-adapter"; 
import { RepoQueryStub } from "../adapters/driven/repo-querier-stub-adapter"; 
import { DashboardApi } from "./dashboard-api";
import { AuthenticatedUser,User } from "./Schemas"; 

//* describimkos un test y este test puede contener subtest con el concurrent
describe("DashboardApi", () => {
    //* instanciamos las clases necesarias para poder ralizar los test
    const controlAuthenticatorStub = new ControllAuthenticatorStub();
    const repoQuerierStub = new RepoQueryStub();
    const dashboardApiMock = new DashboardApi(
        controlAuthenticatorStub,
        repoQuerierStub
    );
    //* describimos que deberia realizar el metodo osea deberia loguear
    it.concurrent("should login", async () => {
        //GIVEN
        const mockedParams = {
            email: "john@gmail.com",
            password: "12345678",
        };

        const expectedResult: AuthenticatedUser = {
            id: "1",
            name: "John Doe",
            email: "john@gmail.com",
            token: "token",
            refreshToken: "refreshToken",
            permissions: {
                admin: true,
                user: true,
            },
        };
        //* ejecutamos el login y enviamos los datos mockeados
        //* en este caso estan quemados debido a que el repository esta devolviendo unos mocks de un usuario
        //WHEN
        const result = await dashboardApiMock.login(
            mockedParams.email,
            mockedParams.password
        );

        //* aca dice que el resultado deberia ser igual al expceted result declarado
        //THEN
        expect(result).toEqual(expectedResult);
    });
    //* describimos que deberia realizar el metodo osea deberia registrar
    it.concurrent("should register", async () => {
        //GIVEN

        const mockedUser: User = {
            name: "John",
            email: "john@gmail.com",
            password:"password"
        };

        const expectedResult: AuthenticatedUser = {
            id: "1",
            name: "John Doe",
            email: "john@gmail.com",
            token: "token",
            refreshToken: "refreshToken",
            permissions: {
                admin: true,
                user: true,
            },
        };
        //* ejecutamos el register y enviamos los datos mockeados
        //* en este caso estan quemados debido a que el repository esta devolviendo unos mocks de un usuario
        //WHEN
        const result = await dashboardApiMock.register(mockedUser);
        //* aca dice que el resultado deberia ser igual al expceted result declarado
        //THEN
        expect(result).toEqual(expectedResult);
    });
});
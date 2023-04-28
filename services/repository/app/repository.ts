import { ForMonitoring } from "../ports/drivens";
import { ForManagingUser } from "../ports/drivers";
import { RepoUser, User } from "./Schemas";

export class Repository implements ForManagingUser{
    //* inicializamos una lista simulando una base de datos
    private userList: RepoUser[] = []
    //* el api debe implementar el driven para poder ejecutar servicios externos
    constructor(private readonly logger: ForMonitoring) { }

    //* aca implementamos el puerto del driver y le mostramos como se debe comportar este usando los servicios externos
    async getUser(email: string): Promise<RepoUser> {
        const user = this.userList.find((user) => user.email === email)

        if (!user) {
            this.logger.log("Get User", "User not found");
            throw new Error("User not found")
        }
        this.logger.log("Get user", "User listed")
        return user;
    }
    //* aca implementamos el puerto del driver y le mostramos como se debe comportar este usando los servicios externos
    async createUser(user: User, password: string): Promise<RepoUser> {
        const userExists = this.userList.find((user) => user.email === user.email)
        if (userExists) {
            this.logger.log("CreateUser", "User already exists");
            throw new Error("User already exists")
        }
        const newUser = {
            ...user,
            password,
            id: String(this.userList.length + 1)
        }
        this.userList.push(newUser)
        this.logger.log("Create User","User created")
        return newUser
    }
    
}
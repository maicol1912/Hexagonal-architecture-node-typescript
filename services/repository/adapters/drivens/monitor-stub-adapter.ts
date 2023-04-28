import { ForMonitoring } from "../../ports/drivens";

//* aca estamos creando una implementacion de un puerto e implementamos la funcion de log
export class LoggerStubAdapter implements ForMonitoring{
    log(event: string, message: string): void {
        console.log(event,message)
    }
    
}
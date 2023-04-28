//* definimos un puerto que define las limitaciones de un adapter 
export interface ForMonitoring{
    log(event:string,message:string):void
}
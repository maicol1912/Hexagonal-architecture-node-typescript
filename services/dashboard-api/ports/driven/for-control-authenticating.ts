export interface AuthDetails{
    token:string;
    refreshToken:string;
}

export interface Permissions {
    admin:boolean;
    user:boolean;
}

export interface ForControlAuthenticating{
    getAuthDetails(email:string,pasword:string):Promise<AuthDetails>;
    getPermission(email: string, password: string): Promise<Permissions>;    
}
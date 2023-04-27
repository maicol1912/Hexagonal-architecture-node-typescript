//* en el schemas iran todas las interfaces que necesitamos
export interface AuthDetails {
    token: string;
    refreshToken: string;
}

export interface Permissions {
    admin: boolean;
    user: boolean;
}

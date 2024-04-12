export class User {
    id: string;
    username: string;
    password: string;
    nomePenna: string | null;
    role: string;

    constructor (id: string, username: string, password: string, nomePenna: string, role: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.nomePenna = nomePenna;
        this.role = role;
    }
}
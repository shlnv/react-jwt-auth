class User {
    login: string
    password: string
    name: string
    role: string
    confirmed: boolean

    constructor(login: string, password: string, name: string, role: string, confirmed:boolean) {
        this.login = login;
        this.password = password;
        this.name = name;
        this.role = role;
        this.confirmed = confirmed;
    }
}

export default User;
import User from "../data/model/User";

export default interface SignUpRepository {
    signIn: (user: User) => Promise<any>;
    signUp: (user: User, confirm: string) => Promise<any>;
    recovery: (user: User) => Promise<any>;
    newPassword: (user: User) => Promise<any>;
    confirmRegistration: (user: User) => Promise<any>;
}
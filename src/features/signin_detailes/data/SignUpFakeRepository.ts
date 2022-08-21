import SignUpRepository from "../domain/SignUpRepository";
import User from "./model/User";
import request from "../domain/interceptors/request";

export default class SignUpFakeRepository implements SignUpRepository {
    static urlPrefix = 'http://localhost:3000';

    async signIn(user: User): Promise<any> {
        return await request(
            SignUpFakeRepository.urlPrefix + '/main/signin',
            user,
            {method: "POST"});
    };

    async signUp(user: User): Promise<any> {
        return await fetch(
            SignUpFakeRepository.urlPrefix + '/main/signup',
            {
                method: "POST",
                body: JSON.stringify(user)
            }
        );
    };

    async recovery(user: User): Promise<any> {
        return await fetch(
            SignUpFakeRepository.urlPrefix + '/main/recovery',
            {
                method: "POST",
                body: JSON.stringify({login: user.login})
            }
        );
    };

    async newPassword(user: User): Promise<any> {
        return await fetch(
            SignUpFakeRepository.urlPrefix + '/main/newpassword',
            {
                method: "POST",
                body: JSON.stringify(user)
            }
        )
    }

    async confirmRegistration(user: User): Promise<any> {
        return await fetch(
            SignUpFakeRepository.urlPrefix + '/main/confurmregistration',
            {
                method: "POST",
                body: JSON.stringify(user)
            }
        );
    }
};
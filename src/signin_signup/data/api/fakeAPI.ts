import {createServer, Response, Model} from "miragejs";
import {createJWT} from "./jwt";
import requestInterceptor from "./requestInterceptor";
import User from "../model/User";
import dataBaseUser from "./dataBaseUser";

createServer({
    models: {
        user: Model
    },

    routes() {
        this.urlPrefix = 'http://localhost:3000';

        this.post('/main/signin', (schema, request) => {
            request = requestInterceptor(request);
            const login: string = (JSON.parse(request.requestBody)).login;
            let user: any = userDataBase.find((el) => el.login === login);
            if (user) {
                if (user.password === JSON.parse(request.requestBody).password) {
                    return new Response(201, {
                        JWT: createJWT(
                            {alg: "HS256", typ: "JWT"},
                            {login: login, role: "user", exp: Date.now() + 60000},
                            "secret"
                        )
                    }, {});
                } else {
                    return new Response(401, {}, {error: "Wrong username or password"});
                }
            } else {
                return new Response(401, {}, {error: "Wrong username or password"});
            }
        });

        this.post('/main/signup', (schema, request) => {

            const name: string = (JSON.parse(request.requestBody)).name;
            const login: string = (JSON.parse(request.requestBody)).login;
            const password: string = (JSON.parse(request.requestBody)).password;
            let user: any = userDataBase.find((el) => el.login === login);
            if (!user) {
                userDataBase.push({name: name, login: login, password: password, role: 'user', confirmed: false});
                return new Response(201, {}, {
                    message: 'User created. Confirm registration via email'
                });
            } else {
                return new Response(401, {}, {error: "User with this email is already exists"});
            }
        });
        this.post('/main/recovery', (schema, request) => {
            const login = (JSON.parse(request.requestBody)).login;
            let user: any = userDataBase.find((el) => el.login === login);
            if (user)
                return new Response(202, {}, {message: 'New password link has sent to your email'})
            else
                return new Response(404, {}, {error: "There is now user with current email address"});
        });
        this.post('/main/newpassword', (schema, request) => {
            const login = (JSON.parse(request.requestBody)).login;
            const newPassword = (JSON.parse(request.requestBody)).password;
            let user: any = userDataBase.find((el) => el.login === login);
            if (user) {
                const i = userDataBase.findIndex(user);
                userDataBase[i].password = newPassword;
                return new Response(200, {}, {message: 'password has changed'});
            } else {
                return new Response(404, {}, {error: 'user not found'});
            }
        });
        this.post('/main/confirmregistration', (schema, request) => {
            const login = (JSON.parse(request.requestBody)).login;
            let user: any = userDataBase.find((el) => el.login === login);
            if (user) {
                const i = userDataBase.findIndex(user);
                userDataBase[i].confirmed = true;
                return new Response(200, {}, {message: 'registration confirmed'});
            } else {
                return new Response(404, {}, {error: 'email not found'});
            }
        })
    }
});

let userDataBase: Array<dataBaseUser> = [
    {login: "a@b.c", password: "MTIzNDU=", name: "Vano", role: "user", confirmed: true}, //password: "12345"
    {login: "1@2.3", password: "MTIz", name: "Dany", role: "anonymous", confirmed: true}, //password: "123"
    {login: "admin", password: "YWRtaW4=", name: "admin", role: "admin", confirmed: true} //password: "admin"
];
import Repository from "../../data/SignUpFakeRepository";
import User from "../../data/model/User";
import validatePassword from "../utils/validatePassword";
import encodePassword from "../utils/encodePassword";

export default async function signUp(
    login: string,
    password: string,
    name: string,
    confirm: string
):Promise<boolean>{
        if (password === confirm) {
            const res = await new Repository().signUp(new User(login, encodePassword(password), name));
            return Promise.resolve(res.status === 201);
        } else {
            return Promise.reject('confirmation password is not valid')
        }
}
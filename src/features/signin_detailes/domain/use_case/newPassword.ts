import Repository from "../../data/SignUpFakeRepository";
import User from "../../data/model/User";
import {base64encode} from "../encode-decode/base64EncodeDecode";

export default async function newPassword(
    login: string,
    password: string
) {
    password = base64encode(password);
    const res = await new Repository().newPassword(new User(login, password))
    return Promise.resolve(res.status >= 200 && res.status < 300)
}
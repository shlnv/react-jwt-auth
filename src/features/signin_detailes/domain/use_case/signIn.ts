import Repository from "../../data/SignUpFakeRepository";
import User from "../../data/model/User";
import responseInterceptor from "../interceptors/responseInterceptor";
import {base64encode} from "../encode-decode/base64EncodeDecode";

export default async function signIn(
    login: string,
    password: string,
): Promise<boolean> {
    password = base64encode(password);
    let status: number;
    const res: boolean = await new Repository().signIn(new User(login, password))
        .then((resp) => {
            status = resp.status
            return responseInterceptor(resp)
        })
        .then((r) => {
            if (status >= 400) {
                return new Promise((resolve, reject) => reject(new Error(r!.error)))
            } else {
                return status === 201
            }
        });
    return res;
}
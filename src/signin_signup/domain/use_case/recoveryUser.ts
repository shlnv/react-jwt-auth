import Repository from "../../data/SignUpFakeRepository";
import User from "../../data/model/User";

export default async function recoveryUser(login: string) {
    const res = await new Repository().recovery(new User(login))
    return Promise.resolve(res.status === 202);
}
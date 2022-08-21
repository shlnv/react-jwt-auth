import Repository from "../../data/SignUpFakeRepository";
import User from "../../data/model/User";

export default async function confirmRegistration(
    login: string,
) {
    const res = await new Repository().confirmRegistration(new User(login));
    return Promise.resolve(res.status >= 200 && res.status < 300);
}
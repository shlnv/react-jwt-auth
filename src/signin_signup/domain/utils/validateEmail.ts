export default function validateEmail(mail: string): boolean {
    if (mail.length <= 30)
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
    else
        return false
}
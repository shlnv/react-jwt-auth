export default function validatePassword(p: string | undefined): string {
    let errors: Array<string> = [];
    let errorMessage: string = '';
    if (p!.length < 8)
        errors.push("8 characters");
    if (p!.search(/[a-z]/i) < 0)
        errors.push("one letter");
    if (p!.search(/\d/) < 0)
        errors.push("one digit");
    if (p!.length > 50)
        alert('50 symbols is max password length!')
    if (errors.length > 0)
        errorMessage = 'your password must contain at least ' + errors.join(', ');
    return errorMessage;

}
const CryptoJS = require("crypto-js");

export default function encodePassword(password : string){
    const wordArray: Array<string> = CryptoJS.enc.Utf8.parse(password);
    const encoded: string = CryptoJS.enc.Base64.stringify(wordArray);
    return encoded;
}
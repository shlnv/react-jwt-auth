const CryptoJS = require("crypto-js");

function base64(source: string) {
    let encodedSource: string = CryptoJS.enc.Base64.stringify(source);
    return encodedSource;
}

export function createJWT(header: any, payload: any, secret: string): string {

    let stringifiedHeader: string = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    let encodedHeader: string = base64(stringifiedHeader);

    let stringifiedPayload: string = CryptoJS.enc.Utf8.parse(JSON.stringify(payload));
    let encodedPayload: string = base64(stringifiedPayload);

    let unsighedToken: string = encodedHeader + "." + encodedPayload;

    let signature: string = CryptoJS.HmacSHA256(unsighedToken, secret);
    signature = base64(signature);

    let signedToken: string = unsighedToken + "." + signature;
    return signedToken;
}

export function decodeJWT(JWT: string) {
    let [header, payload, secret] : Array<string> = JWT.split('.');
    let head: any = CryptoJS.enc.Base64.parse(header);
    let headerString: any = CryptoJS.enc.Utf8.stringify(head);
    let pay : any = CryptoJS.enc.Base64.parse(payload);
    let payloadString: any = CryptoJS.enc.Utf8.stringify(pay);
    let headerObject: any = JSON.parse(headerString);
    let payloadObject: any = JSON.parse(payloadString);
    return [headerObject, payloadObject];
}


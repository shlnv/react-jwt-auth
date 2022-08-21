const CryptoJS = require("crypto-js");

export const base64encode = (unencodedData: string | undefined): string => {
    const encodedArr = CryptoJS.enc.Utf8.parse(unencodedData);
    const encoded = CryptoJS.enc.Base64.stringify(encodedArr);
    return encoded;
}

export const base64decode = (encodedData: string): any => {
    let decoded = CryptoJS.enc.Base64.parse(encodedData);
    return CryptoJS.enc.Utf8.stringify(decoded);
}

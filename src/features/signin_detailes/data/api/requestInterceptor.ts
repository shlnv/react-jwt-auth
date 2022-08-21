import {decodeJWT} from "./jwt";

export default function requestInterceptor(request: any): any {
    if (request.requestHeaders.Authorization) {
        let [header, payload] = decodeJWT(request.requestHeaders.Authorization.slice(7));
        if (payload.exp) {
            if (Date.now() > payload.exp) {
                delete request.requestHeaders.Authorization;
            }
        }
    }
    return request;
}
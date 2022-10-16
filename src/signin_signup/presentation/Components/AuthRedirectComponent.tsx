import {useNavigate} from "react-router-dom";
import {base64decode} from "../../domain/encode-decode/base64EncodeDecode";
import confirmRegistration from "../../domain/use_case/confirmRegistration";
import React from "react";

const AuthRedirectComponent: React.FC = () => {
    const navigate = useNavigate();

    const getTokenFromUrl = () => {
        const href = window.location.href;
        const regex = new RegExp(`.+\/main\/authredirect\\?token=`)
        if (href.match(regex)) {
            const token = href.replace(regex, '')
            return token;
        }
        return null;
    }

    const token: string | null = getTokenFromUrl();

    if (token) {
        const decodedToken: string = base64decode(token);
        const login: string | null = JSON.parse(decodedToken).login
        if (login) {
            confirmRegistration(login)
                .then(() => navigate('/main/signin'))
        }
    }
    return (<></>)
}

export default AuthRedirectComponent;
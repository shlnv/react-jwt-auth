import {Route, Navigate, Routes, useNavigate} from "react-router-dom";
import {base64decode} from "../../domain/encode-decode/base64EncodeDecode";
import confirmRegistration from "../../domain/use_case/confirmRegistration";
import React from "react";

const AuthRedirectComponent: React.FC = () => {
    let navigate = useNavigate();
    let token: string | null;
    let decodedToken: string | null;
    let login: string | null;

    const getTokenFromUrl = () => {
        let href = window.location.href;
        let regex = new RegExp(`.+\/main\/authredirect\\?token=`)
        if (href.match(regex)) {
            const token = href.replace(regex, '')
            return token;
        }
        return null;
    }

    token = getTokenFromUrl();


    if (token) {
        decodedToken = base64decode(token);
        // @ts-ignore
        login = JSON.parse(decodedToken).login
        if (login) {
            confirmRegistration(login)
                .then(() => navigate('/main/signin'))
        }
    }
    return (<></>)
}

export default AuthRedirectComponent;
import React, {useEffect} from "react";
import {Form, Field} from 'react-final-form';
import validatePassword from "../../domain/utils/validatePassword";
import {base64decode} from "../../domain/encode-decode/base64EncodeDecode";
import newPassword from "../../domain/use_case/newPassword"
import {useNavigate} from "react-router-dom";
// @ts-ignore
import hidePasswordIcon from "../../../icons/hidepswd.png";

const NewPasswordComponent: React.FC = () => {
    const navigate = useNavigate();
    let token: string | null;
    let login: string | null;
    let decodedToken: string | null;
    let passInput: any;
    let confInput: any;

    useEffect(() => {
        passInput = document.getElementById('passInput');
        confInput = document.getElementById('confInput')
    })

    const onSubmit = async (e: any) => {
        // @ts-ignore
        const res = await newPassword(login, e.password)
            .catch(e => alert(e.message));
        if (res) {
            alert('New password created! Please log in with the new password');
            navigate('/main/signin');
        }
    };

    const validate = (e: any): any => {
        const errors: any = {};
        if (e.password && validatePassword(e.password) != '')
            errors.password = validatePassword(e.password);
        if (e.password && e.confirm && e.password != e.confirm)
            errors.confirm = 'confirmation is not correct';
        return errors;
    };

    const getTokenFromUrl = () => {
        const token = window.location.search;
        if (token || token !== '')
            return token;
        return null;
    }

    const showHidePassword = () => {
        if (passInput.type === 'password')
            passInput.type = 'text';
        else
            passInput.type = 'password'
    };

    const showHideConfirm = () => {
        if (confInput.type === 'password')
            confInput.type = 'text';
        else
            confInput.type = 'password'
    };

    token = getTokenFromUrl();
    if (token) {
        try {
            decodedToken = base64decode(token);
        } catch {
            window.location.search = '';
        }
        // @ts-ignore
        login = JSON.parse(decodedToken).login;

        return (<Form
                onSubmit={onSubmit}
                validate={validate}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className="box box-newp">
                            <div className="container-2">
                                <h2 className="h-2">Create a new password for {login}</h2>
                            </div>
                            <div className="container-1">
                                <Field name="password">
                                    {({input, meta}) => (
                                        <div>
                                            <input id="passInput" className="form-input" type="password" {...input}
                                                   placeholder="Password"/>
                                            <img width="16.67px" height="13.33px" src={hidePasswordIcon} alt="show"
                                                 className="eye" onClick={showHidePassword}/>
                                            {meta.touched && meta.error && <div>{meta.error}</div>}
                                        </div>
                                    )}
                                </Field>

                                <Field name="confirm">
                                    {({input, meta}) => (
                                        <div>
                                            <input id="confInput" className="form-input" type="password" {...input}
                                                   placeholder="Confirm password"/>
                                            <img width="16.67px" height="13.33px" src={hidePasswordIcon} alt="show"
                                                 className="eye" onClick={showHideConfirm}/>
                                            {meta.touched && meta.error && <div>{meta.error}</div>}
                                        </div>
                                    )}
                                </Field>
                                <br/>
                                <button className="btn-wide" type="submit">Change password</button>
                            </div>
                        </div>
                    </form>
                )}
            />
        )
    } else {
        return (<h1>No Access</h1>)
    }
};

export default NewPasswordComponent;
import React, {useRef, useEffect, RefObject} from "react";
import {Form, Field} from 'react-final-form';
import validatePassword from "../../domain/utils/validatePassword";
import {base64decode} from "../../domain/encode-decode/base64EncodeDecode";
import newPassword from "../../domain/use_case/newPassword"
import {useNavigate} from "react-router-dom";
// @ts-ignore
import hidePasswordIcon from "../../../icons/hidepswd.png";

const NewPasswordComponent: React.FC = () => {
    const navigate = useNavigate();
    const passInput: RefObject<any> = useRef();
    const confInput: RefObject<any> = useRef();
    let login: string;
    let decodedToken: string;

    const onSubmit = async (e: any) => {
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
        if (passInput.current.type === 'password') {
            passInput.current.type = 'text';
        } else {
            passInput.current.type = 'password'
        }
    };

    const showHideConfirm = () => {
        if (confInput.current.type === 'password')
            confInput.current.type = 'text';
        else
            confInput.current.type = 'password'
    };

    const token: string | null = getTokenFromUrl();

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
                                            <input ref={passInput} id="passInput" className="form-input"
                                                   type="password" {...input}
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
                                            <input ref={confInput} id="confInput" className="form-input"
                                                   type="password" {...input}
                                                   placeholder="Confirm password"/>
                                            <img src={hidePasswordIcon} alt="show"
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
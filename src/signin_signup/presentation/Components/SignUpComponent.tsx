import React, {useEffect, useState} from 'react';
import {Form, Field} from 'react-final-form';
import {Link, useNavigate} from "react-router-dom";
import validatePassword from "../../domain/utils/validatePassword";
import signUp from "../../domain/use_case/signUp";
import validateEmail from "../../domain/utils/validateEmail";
// @ts-ignore
import hidePasswordIcon from "../../../icons/hidepswd.png";

const SignUpComponent: React.FC = () => {

    const navigate = useNavigate()
    let passInput: any
    let confInput: any

    useEffect(() => {
        passInput = document.getElementById('passInput');
        confInput = document.getElementById('confInput')
    })

    const onSubmit = async (e: any) => {
        if (e.login && e.password && e.name && e.confirm) {
            const res = await signUp(e.login, e.password, e.name, e.confirm)
                .catch(error => alert(error.message));
            if (res) {
                alert('Account created. Please confirm via email and sign in');
                navigate('/main/signin');
            }
        }
    };

    const validate = (e: any): any => {
        const errors: any = {};
        if ((e.name && e.name.length < 2) || (e.name && e.name.length > 20))
            errors.name = 'name must contain at least 2 symbols (no more than 20)'
        if (e.login && !validateEmail(e.login))
            errors.login = 'email is not valid';
        if (e.password && validatePassword(e.password) !== '')
            errors.password = validatePassword(e.password);
        if (e.password && e.confirm && e.password !== e.confirm)
            errors.confirm = 'confirmation is not correct';
        return errors;
    };

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

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}

            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div className="box box-signup">
                        <div className="container-2">
                            <h2 className="h-2">Sign up</h2> <p className="align-right"><span
                            className="text-small-grey">Already have an account?&nbsp;</span> <Link
                            className="text-small-link" to="/main/signin">Sign in</Link></p>
                        </div>
                        <div className="container-1">
                            <Field name="name">
                                {({input, meta}) => (
                                    <div>
                                        <input className="form-input" type="text" {...input} placeholder="Name"/>
                                        {meta.touched && meta.error && <div>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>

                            <Field name="login">
                                {({input, meta}) => (
                                    <div>
                                        <input className="form-input" type="email" {...input} placeholder="Email"/>
                                        {meta.touched && meta.error && <div>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>

                            <Field name="password">
                                {({input, meta}) => (
                                    <div>
                                        <input className="form-input" id="passInput" type="password" {...input}
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
                                        <input className="form-input" id="confInput" type="password" {...input}
                                               placeholder="Confirm password"/>
                                        <img width="16.67px" height="13.33px" src={hidePasswordIcon} alt="show"
                                             className="eye" onClick={showHideConfirm}/>
                                        {meta.touched && meta.error && <div>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>

                            <button type="submit" className="btn-wide">Sign up</button>

                            <div>
                                <span
                                    className="text-small-black">By signing in to your account you agree with our <br/><Link
                                    className="black-bold-link" to="#">Privacy Policy</Link> and <Link
                                    className="black-bold-link" to="#">Terms of Use</Link>.</span>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        />
    )
};

export default SignUpComponent;
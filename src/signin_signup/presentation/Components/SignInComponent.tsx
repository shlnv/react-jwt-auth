import React, {useEffect} from 'react';
import {Form, Field} from 'react-final-form';
import '../../data/api/fakeAPI';
import {Link, useNavigate} from "react-router-dom";
import signIn from "../../domain/use_case/signIn";
// @ts-ignore
import hidePasswordIcon from "../../../icons/hidepswd.png";

const SignInComponent: React.FC = () => {

    const navigate = useNavigate();
    let passInput: any

    useEffect(() => {
        passInput = document.getElementById('passInput')
    })

    const onSubmit = async (e: any) => {
        if (e.login && e.password) {
            const res = await signIn(e.login, e.password)
                .catch(error => alert(error.message));
            if (res) {
                navigate('/');
            }
        }
    };

    const validate = (): any => {
        return;
    };

    const showHidePassword = () => {
        if (passInput.type === 'password')
            passInput.type = 'text';
        else
            passInput.type = 'password'
    };

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}

            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div className="box box-signin">
                        <div className="container-2">
                            <h2 className="h-2">Sign In</h2><p className="align-right"><span
                            className="text-small-grey">Don't have an account?&nbsp;</span>
                            <Link className="text-small-link" to="/main/signup">Sign
                                up</Link></p>
                        </div>
                        <div className="container-1">
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
                                        <input id="passInput" className="form-input" type="password" {...input}
                                               placeholder="Password"/>
                                        <img width="16.67px" height="13.33px" src={hidePasswordIcon} alt="show"
                                             className="eye" onClick={showHidePassword}/>
                                        {meta.touched && meta.error && <div>{meta.error}</div>}
                                    </div>
                                )}

                            </Field>

                            <button className="btn-wide" type="submit">Login</button>
                            <div>
                                <Link to="/main/recovery" className="text-small-link">Lost your password?</Link>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        />
    )
};

export default SignInComponent;
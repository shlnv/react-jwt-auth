import React, {useState} from 'react';
import {Form, Field} from 'react-final-form';
import {Link, useNavigate} from "react-router-dom";
import validatePassword from "../../domain/utils/validatePassword";
import signUp from "../../domain/use_case/signUp";
import validateEmail from "../../domain/utils/validateEmail";

const SignUpComponent: React.FC = () => {

    const navigate = useNavigate()

    const onSubmit = async (e: any) => {
        const res = await signUp(e.login, e.password, e.name, e.confirm)
            .catch(error => alert(error.message));
        if (res) {
            alert('Account created. Please confirm via email and sign in');
            navigate('/main/signin');
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

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}

            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <h2>Sign up</h2> <span>Already have an account?&nbsp;</span> <Link to="/main/signin">Sign in</Link>
                    <Field name="name">
                        {({input, meta}) => (
                            <div>
                                <input type="text" {...input} placeholder="Name"/>
                                {meta.touched && meta.error && <div>{meta.error}</div>}
                            </div>
                        )}
                    </Field>

                    <Field name="login">
                        {({input, meta}) => (
                            <div>
                                <input type="email" {...input} placeholder="Email"/>
                                {meta.touched && meta.error && <div>{meta.error}</div>}
                            </div>
                        )}
                    </Field>

                    <Field name="password">
                        {({input, meta}) => (
                            <div>
                                <input type="password" {...input} placeholder="Password"/>
                                {meta.touched && meta.error && <div>{meta.error}</div>}
                            </div>
                        )}
                    </Field>

                    <Field name="confirm">
                        {({input, meta}) => (
                            <div>
                                <input type="password" {...input} placeholder="Confirm password"/>
                                {meta.touched && meta.error && <div>{meta.error}</div>}
                            </div>
                        )}
                    </Field>

                    <button type="submit">Sign up</button>

                    <div>
                        <span>By signing in to your account you agree with our <b>Privacy Policy</b> and <b>Terms of Use</b>.</span>
                    </div>
                </form>
            )}
        />
    )
};

export default SignUpComponent;
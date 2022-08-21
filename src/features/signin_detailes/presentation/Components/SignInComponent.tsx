import React from 'react';
import {Form, Field} from 'react-final-form';
import '../../data/api/fakeAPI';
import {Link, useNavigate} from "react-router-dom";
import signIn from "../../domain/use_case/signIn";

const SignInComponent: React.FC = () => {

    const navigate = useNavigate();

    const onSubmit = async (e: any) => {
        const res = await signIn(e.login, e.password)
            .catch(error => alert(error.message));
        if(res){
            navigate('/');
        }
    };

    const validate = (): any => {
        return;
    };

    return(
    <Form
        onSubmit={onSubmit}
        validate={validate}

        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2> <span>Don't have an account?&nbsp;</span> <Link to="/main/signup">Sign up</Link>

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

                <button type="submit">Login</button>
                <div>
                    <Link to="/main/recovery">Lost your password?</Link>
                </div>
            </form>
        )}
    />
)};

export default SignInComponent;
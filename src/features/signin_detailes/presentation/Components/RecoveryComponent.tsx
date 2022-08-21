import React from 'react';
import {Form, Field} from 'react-final-form';
import {Link, useNavigate} from "react-router-dom";
import recoveryUser from "../../domain/use_case/recoveryUser";

const RecoveryComponent: React.FC = () => {

    const navigate = useNavigate();

    const onSubmit = async (e: any) => {
        const res = await recoveryUser(e.login)
            .catch(error => alert(error.message));
        if (res) {
            alert('Please check your email!');
            navigate('/main/signin');
        }
    };

    const validate = (): any => {
        return;
    };

    return (<Form
            onSubmit={onSubmit}
            validate={validate}

            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <h2>Restore password</h2> <Link to="/main/signin">Sign in</Link>
                    <Field name="login">
                        {({input, meta}) => (
                            <div>
                                <input type="email" {...input} placeholder="Your email"/>
                                {meta.touched && meta.error && <div>{meta.error}</div>}
                            </div>
                        )}
                    </Field>

                    <button type="submit">Send</button>
                </form>
            )}
        />
    )
};

export default RecoveryComponent;
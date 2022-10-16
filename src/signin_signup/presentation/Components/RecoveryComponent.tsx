import React from 'react';
import {Form, Field} from 'react-final-form';
import {Link, useNavigate} from "react-router-dom";
import recoveryUser from "../../domain/use_case/recoveryUser";

const RecoveryComponent: React.FC = () => {

    const navigate = useNavigate();

    const onSubmit = async (e: any) => {
        if (e.login) {
            const res = await recoveryUser(e.login)
                .catch(error => alert(error.message));
            if (res) {
                alert('Please check your email!');
                navigate('/main/signin');
            } else {
                alert('There is now user with current email address')
            }
        }
    };

    return (<Form
            onSubmit={onSubmit}

            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div className="box box-recovery">
                        <div className="container-2">
                            <h2 className="h-2">Restore password</h2><p className="align-right"><Link
                            className="text-small-link" to="/main/signin">Sign in</Link></p>
                        </div>
                        <div className="container-1">
                            <Field name="login">
                                {({input, meta}) => (
                                    <div>
                                        <input className="form-input" type="email" {...input} placeholder="Your email"/>
                                        {meta.touched && meta.error && <div>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>
                            <br/>
                            <button className="btn-wide" type="submit">Send</button>
                        </div>
                    </div>
                </form>
            )}
        />
    )
};

export default RecoveryComponent;
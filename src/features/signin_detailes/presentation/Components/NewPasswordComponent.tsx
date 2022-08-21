import React from "react";
import {Form, Field} from 'react-final-form';
import validatePassword from "../../domain/utils/validatePassword";
import {base64decode} from "../../domain/encode-decode/base64EncodeDecode";
import newPassword from "../../domain/use_case/newPassword"
import {useNavigate} from "react-router-dom";



const NewPasswordComponent: React.FC = () => {
    const navigate = useNavigate();
    let token: string | null;
    let decodedToken: string | null;
    let login: string | null;

    const onSubmit = async (e: any) => {
        // @ts-ignore
        const res = await newPassword(login, e.password)
            .catch(e => alert(e.message));
        if(res){
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
        let href = window.location.href;
        let regex = new RegExp(`.+\/main\/newpassword\\?token=`)
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
        login = JSON.parse(decodedToken).login;

        return (<Form
                onSubmit={onSubmit}
                validate={validate}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Create a new password for {login}</h2>
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

                        <button type="submit">Change password</button>

                    </form>
                )}
            />
        )
    } else {
        return (<h1>No Access</h1>)
    }
};

export default NewPasswordComponent;
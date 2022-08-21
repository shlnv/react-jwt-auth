import React from 'react';
import {useNavigate} from "react-router-dom";

const Main = () => {

    const navigate = useNavigate()

    const auth = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        switch (e.currentTarget.name) {
            case'signin':
                navigate('/main/signin');
                break;
            case 'signup':
                navigate('/main/signup');
                break;
            case 'restore':
                navigate('/main/recovery');
                break;
        }
    }
    return (
        <div>
            <h1>Main Page</h1>
            <button name="signin" onClick={auth}>SignIn</button>
            <button name="signup" onClick={auth}>SignUp</button>
            <button name="restore" onClick={auth}>Recovery</button>
        </div>
    );
};

export default Main;
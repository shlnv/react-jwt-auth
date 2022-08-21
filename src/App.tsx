import './App.css';
import SignInComponent from "./signin_signup/presentation/Components/SignInComponent";
import SignUpComponent from "./signin_signup/presentation/Components/SignUpComponent";
import RecoveryComponent from "./signin_signup/presentation/Components/RecoveryComponent";
import AuthRedirectComponent from "./signin_signup/presentation/Components/AuthRedirectComponent";
import NewPasswordComponent from "./signin_signup/presentation/Components/NewPasswordComponent";
import {Route, Routes} from "react-router-dom";
import Main from "./Main";
import React from 'react';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/main/signin" element={<SignInComponent/>}/>
                <Route path="/main/signup" element={<SignUpComponent/>}/>
                <Route path="/main/recovery" element={<RecoveryComponent/>}/>
                <Route path="/main/authredirect" element={<AuthRedirectComponent/>}/>
                <Route path="/main/newpassword" element={<NewPasswordComponent/>}/>
            </Routes>
        </div>
    );
}

export default App;

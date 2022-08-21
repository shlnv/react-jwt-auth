import React, {useEffect, useState} from "react";
import signIn from "./features/signin_detailes/domain/use_case/signIn";
import signUp from "./features/signin_detailes/domain/use_case/signUp";


const TestComponent: React.FC = () => {
    const [token, setToken] = useState<string>();

    const signInClick = () => {
        signIn("test", "password").then(
            (token: any) => {
                setToken(token);
            }, (error: Error) => {
                alert(error.message);
            }
        )
    }
    const signUpClick = () => {
        signUp("test", "password", "user", "password").then(
            (isSuccess: any) => {
                if (isSuccess) {
                    alert("Success");
                } else {
                    alert("Failed");
                }
            }, (error: Error) => {
                console.log(error.message);
            }
        )
    }
    return <>
        <h5>{token}</h5>
        <button onClick={() => {
            signInClick();
        }}>Sign in
        </button>
        <button onClick={() => {
            signUpClick();
        }}>Sign up
        </button>
    </>
}
export default TestComponent;
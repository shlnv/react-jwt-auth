import React, {useState} from 'react';
import userIcon from '../icons/userIcon.png'
import {Link, useNavigate} from "react-router-dom";

const Navbar = () => {
    const [UserSubMenuVisibility, setUserSubMenuVisibility] = useState('hidden');
    let userSubMenuStyles = {
        position: 'absolute',
        top: 80,
        right: 0,
        zIndex: '1000',
        background: 'whitesmoke',
        border: '1px solid black',
        visibility: UserSubMenuVisibility
    }
    const navigate = useNavigate();

    return (
        <nav
            style={{
                border: "1px solid black",
                height: "79px"
            }}
            onMouseLeave={() => {
                setUserSubMenuVisibility('hidden')
            }}>
            <Link to="/">NAVBAR</Link>
            <img
                src={userIcon}
                style={{
                    cursor: "pointer",
                    float: "right",
                    padding: "20px"
                }}
                onMouseOver={() => {
                    setUserSubMenuVisibility('visible')
                }}/>
            <div style={userSubMenuStyles}>
                <p>SUBMENU</p>
                <button onClick={() => {
                    navigate('/main/signin')
                }}>
                    Sign In
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { NavLink } from 'react-router-dom';
import app from '../../firebase.init';
import './Login.css'

const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    return (
        <div>
            <div>
                <h1>Login</h1>
                <div className="GoogleSinIn">
                    <NavLink to='/'>
                        <button onClick={() => signInWithGoogle()}>Sin In Google</button>
                    </NavLink>
                </div>
                <input type="email" placeholder="type your Email Address" /><br />
                <input type="password" placeholder="type your password" /><br />
                <input type="submit" value="Log In" />

            </div>
        </div>
    );
};

export default Login;
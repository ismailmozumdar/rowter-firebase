import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {SinInGoogle} = useFirebase()
    return (
        <div>
            <div>
                <h1>Login</h1>
                <div className="GoogleSinIn">
                    <button onClick={SinInGoogle}>Sin In Google</button>
                    </div>
                <input type="email" placeholder="type your Email Address" /><br/>
                <input type="password" placeholder="type your password" /><br/>
                <input type="submit" value="Log In"/>

            </div>
        </div>
    );
};

export default Login;
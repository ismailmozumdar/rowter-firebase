import { getAuth} from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css'
const auth = getAuth(app)
const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className="Header">
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/ordere'>Ordere</NavLink>
                <NavLink to='/reviews'>Reviews</NavLink>
                {
                    user?.uid
                        ?
                        <>
                            <NavLink to='/profile'>Profile</NavLink>
                        </>

                        :
                        <>

                            <NavLink to='/rigester'>Rigester</NavLink>
                            <NavLink to='/login'>Log In</NavLink>
                        </>
                }
            </nav>
        </div>
    );
};

export default Header;
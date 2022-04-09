import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handelSinOut } = useFirebase();
    return (
        <div className="Header">
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Products'>Products</NavLink>
                <NavLink to='/Orderes'>Orderes</NavLink>
                <NavLink to='/Reviews'>Reviews</NavLink>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid
                        ?
                        <button onClick={handelSinOut}>sin Out</button>
                        :
                <>
                            
                            <NavLink to='/Rigester'>Rigester</NavLink>
                            <NavLink to='/Login'>Log In</NavLink>
                </>
                }
            </nav>
        </div>
    );
};

export default Header;
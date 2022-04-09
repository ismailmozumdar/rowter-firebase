import { getAuth, signOut} from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import app from '../../firebase.init';
const auth = getAuth(app)
const Profile = (a) => {
    const [user]  = useAuthState(auth)
    return (
        <div>
            <h4>{user ? user.displayName : 'Plece Sinin or Login'}</h4>

            <NavLink to='/Login'><button onClick={() => signOut(auth)}>Sign Out</button></NavLink>
            




        </div>
    );
};

export default Profile;
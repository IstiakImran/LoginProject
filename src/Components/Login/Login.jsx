/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    console.log(app)
    const GoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const LoggedUser = result.user;
                setUser(LoggedUser);
                console.log(LoggedUser);
            })
            .catch(error => {
                console.log('error:', error.message)
            })
    };
    const GoogleSignOut = () => {
        signOut(auth, provider)
            .then(resut => {
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            {user ?
                <button onClick={GoogleSignOut}>Sign Out</button> :
                <button onClick={GoogleSignIn}>Sign In</button>}
            {user &&
                <div>
                    <h1>
                        {user.displayName}
                    </h1>
                </div>}

        </div>
    );
};

export default Login;
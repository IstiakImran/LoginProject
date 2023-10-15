/* eslint-disable no-unused-vars */
import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../../Firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    console.log(app)
    const GoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('error:', error.message)
            })

    }
    return (
        <div>
            <button onClick={GoogleSignIn}>Sign In</button>
        </div>
    );
};

export default Login;
/* eslint-disable no-unused-vars */
import React from 'react';
import {getAuth,  GoogleAuthProvider } from 'firebase/auth'
import app from '../../Firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const GoogleSignIn = () =>{
        console.log('button is working')
    }
    return (
        <div>
            <button onClick={GoogleSignIn}>Sign In</button>
        </div>
    );
};

export default Login;
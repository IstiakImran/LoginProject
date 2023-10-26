import React from 'react';

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
    }
    return (
        <div>
            <h1>Welcome to Sign Up Page</h1>
            <h2>Please Sign Up</h2>
            <form onSubmit={handleSubmit} action="">
                <input type="email" name="email" id="email" placeholder='Please Enter Your Email' />
                <br />
                <input type="password" name="password" id="password" placeholder='Please Enter Your Password' />
                <br />
                <br />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default Register;
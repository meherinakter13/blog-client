import React, { useState } from 'react';
// import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';
// import google from '../../images/google.jpg';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

//handleBlur
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
//handleSubmit
    const handleSubmit = (e) => {
// login for existing user
        if (user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="col-md-12">
                <div className="card bg-info shadow text-white mx-auto mt-5" style={{ width: '25rem', height: '30rem' }}>
                    <form className="p-3" onSubmit={handleSubmit}>
                        <h2 className="border-bottom" >Login</h2>
                        <label className="p-2"> Email</label>
                        <input type="text" className="form-control" name="email" placeholder="Your Email" onBlur={handleBlur} required />
                        <label className="p-2">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="password" onBlur={handleBlur} />
                        <input className="btn btn-danger mt-3 w-100" type="submit" value="Login"/>
                    </form>
                </div>
                {/* <div>
                    <p style={{ color: 'red', textAlign:'center' }}>{user.error}</p>
                    {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'logged In'}Successfully.</p>}
                </div> */}
            </div>
        </div>
    );
};

export default Login;
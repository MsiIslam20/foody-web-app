import React, { useContext, useState } from 'react';
import './Signup.css';
import logo from '../../images/logo.png'
import { createUserWithEmailPassword, initializeLogInFramework, logInUserWithEmailPassword } from './signUpManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const SignUp = () => {
    const [signedInUser, setSignedInUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        error: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    initializeLogInFramework();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value); 
        }
        if(e.target.name === 'password' || e.target.name === 'confirmPassword'){
          const isValidPassword = e.target.value.length > 6;
          const isNumber = /\d{1}/.test(e.target.value);
          isFieldValid = isValidPassword && isNumber;
        }
        if(isFieldValid) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if(signedInUser && user.email && user.password){
            if(user.password === user.confirmPassword){
                createUserWithEmailPassword(user.displayName, user.email, user.password)
                .then((res) =>{
                    const newUserInfo = {...user};
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
            }
            else{
                const newUserInfo = {...user};
                newUserInfo.error = "password not match";
                setUser(newUserInfo);
            }
        }
        if(!signedInUser && user.email && user.password) {
            logInUserWithEmailPassword(user.email, user.password)
            .then((res) => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
            })
            .catch(error => {
                const newUserInfo = {};
                newUserInfo.error = error.message;
                setUser(newUserInfo);   
            })
          }
        e.preventDefault();
    }

    return (
        <div className="sign-up-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <div className="sign-up-form">
                            <div className="row">
                                <div className="col-md-5 mx-auto">
                                    <div className="logo">
                                        <img src={logo} alt="" className="img-fluid"/>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        {
                                            signedInUser && <input onBlur={handleBlur} className="form-control" type="text" name="name" placeholder="Name" required/>
                                        }
                                        <input onBlur={handleBlur} className="form-control" type="email" name="email" placeholder="Email address" required/>
                                        <input onBlur={handleBlur} className="form-control" type="password" name="password" placeholder="Password" required/>
                                        {
                                            signedInUser && <input onBlur={handleBlur} className="form-control" type="password" name="confirmPassword" placeholder="Confirm Password"/>
                                        }
                                        <input type="submit" className="w-100 submit-btn btn btn-danger" value={signedInUser ? "Sign Up" : "Log In"}/>
                                    </form>
                                    <p className="text-center mt-2 mb-0">{signedInUser ? 'Already have an account?' : "Don't have an account?"} <span className="text-danger pointer mt"  onClick={() => setSignedInUser(!signedInUser)}>{signedInUser ? 'Log In' : 'Sign Up'}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
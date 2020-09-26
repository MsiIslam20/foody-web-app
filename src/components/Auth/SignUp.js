import React, { useState } from 'react';
import './Signup.css';
import logo from '../../images/logo.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const SignUp = () => {
    const [signedInUser, setSignedInUser] = useState(false);

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
                                    <form>
                                        {
                                            signedInUser && <input className="form-control" type="text" name="name" id="" placeholder="Name" required/>
                                        }
                                        <input className="form-control" type="email" name="email" id="" placeholder="Email address" required/>
                                        <input className="form-control" type="password" name="password" id="" placeholder="Password" required/>
                                        {
                                            signedInUser && <input className="form-control" type="password" name="confirmPassword" id="" placeholder="Confirm Password"/>
                                        }
                                        <input type="submit" className="w-100 submit-btn btn btn-danger" value={signedInUser ? "Sign Up" : "Log In"}/>
                                    </form>
                                    <p className="text-center mt-2 mb-0">{signedInUser ? 'Already have an account?' : "Don't have an account?"} <span className="text-danger pointer mt"  onClick={() => setSignedInUser(!signedInUser)}>{signedInUser ? 'Log in' : 'Sign Up'}</span></p>
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
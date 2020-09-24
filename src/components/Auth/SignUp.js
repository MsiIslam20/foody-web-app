import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const SignUp = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>This is Sign up page!!</h1>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
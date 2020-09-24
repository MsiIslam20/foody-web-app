import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const SignUp = () => {
    return (
        <div>
            <h1>This is Sign up page!!</h1>
        </div>
    );
};

export default SignUp;
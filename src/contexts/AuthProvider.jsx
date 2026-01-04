import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    // useStates
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // important variables
    const provider = new GoogleAuthProvider(); 



    // create with email
    const createUserWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }


    // create with google

    const userWithGoogle = () => {
        signInWithPopup(auth, provider)
    }



    // log in with email
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // reset user password
    const resetPass = (email) => {
        return sendPasswordResetEmail(auth, email)
    }







    // log out
    const userLogOut = () => {
        setLoading(true)
        
        return signOut(auth)
    }




    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    setUser(currentUser)
    setLoading(false);
    
    // ...
  } else {
    // User is signed out
    // ...
    setUser(null)
    setLoading(false)
  }
});
    return () => unsubscribe();
    },[])

    const authInfo = {
        createUserWithEmail,
        user,
        loading,
        userWithGoogle,
        loginWithEmail,
        resetPass,
        userLogOut
    }
    return (
        <AuthContext value={authInfo} >
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('current user state change', currentUser);
        setUser(currentUser);
        setLoading(false);
      })
    
      return () => unSubscribe()
    }, [])
    
    const authInfo = {user,createUser,userSignIn, userSignOut, loading}; 
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const AuthContextElements = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const auth = getAuth(app);

    const userLogin = (email, password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    const userRegister = ( email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updatesUserInfo = (name) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{ displayName: name })
    }

    const userSignOUt = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[user])





    const authInfo= {user,userLogin,userRegister,userSignOUt,loading,setLoading,updatesUserInfo}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthContextElements;
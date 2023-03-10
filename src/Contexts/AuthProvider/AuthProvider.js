import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from './../../firebase/firebase.config';
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const githubProviderLogin = provider =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const UserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }    

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {  
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        providerLogin,
        githubProviderLogin,
        logOut, 
        signIn, 
        createUser, 
        loading, 
        UserProfile, 
        setLoading
    }

    return(

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider;
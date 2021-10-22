import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAthentication from "../pages/Login/firebase/firebase.init";


initializeAthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    

    const auth = getAuth();

    const signInwithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }

    const newRegistration = (email, password,) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const loginUsingEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const setUserDisplayName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {})
            .catch(error => {
                setError(error.message)
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }
    return {
        user,
        error,
        isLoading,
        setError,
        setIsLoading,
        setUser,
        signInwithGoogle,
        newRegistration,
        setUserDisplayName,
        loginUsingEmailAndPassword,
        logOut
    }
}

export default useFirebase;
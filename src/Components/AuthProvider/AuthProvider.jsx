import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

// Create context
export const authContext = createContext();

const AuthProvider = ({ routes }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // Register
    const handleRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login
    const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout
    const handleLogOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Google login
    const handleLoginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // Context data
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        handleRegister,
        handleLogin,
        handleLogOut,
        handleLoginWithGoogle
    };

    // Track auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe(); // Cleanup
    }, []);

    return (
        <authContext.Provider value={authInfo}>
            {routes}
        </authContext.Provider>
    );
};

export default AuthProvider;

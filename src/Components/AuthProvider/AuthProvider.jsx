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

    // Register
    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout
    const handleLogOut = () => {
        return signOut(auth);
    };

    // Google login
    const handleLoginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // Context data
    const authInfo = {
        user,
        handleRegister,
        handleLogin,
        handleLogOut,
        handleLoginWithGoogle
    };

    // Track auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
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

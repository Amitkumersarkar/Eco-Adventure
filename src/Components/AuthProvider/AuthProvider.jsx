import { createContext } from "react";

export const authContext = createContext();

const AuthProvider = ({ routes }) => {
    // console.log(routes);
    return (
        <div>
            <authContext.Provider value={abc}>
                {
                    routes
                }
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;
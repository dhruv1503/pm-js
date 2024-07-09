import { createContext, useEffect, useState } from "react";
import propType from "prop-types"

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [token, setToken] = useState("");

    const loginUser = (token) => {
    setToken(token);
    setIsAuthenticated(true)
    }

    const logoutUser = () => {
        setToken("");
        setIsAuthenticated(false);
    }

    
 return (
    <AuthContext.Provider value={{isAuthenticated, token, loginUser, logoutUser}}>
        {children}
    </AuthContext.Provider>
)
} 

AuthContextProvider.propTypes = {
    children : propType.any
}
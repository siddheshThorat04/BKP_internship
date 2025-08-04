import { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext=createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext=()=>{
    return  useContext(AuthContext)
}
export const AuthContextProvider=({children})=>{
    const [authUser, setauthUser] = useState(JSON.parse(localStorage.getItem("bkpAuth"))||null );
    return <AuthContext.Provider value={{authUser,setauthUser}}>
        {children}
        </AuthContext.Provider>
        
}

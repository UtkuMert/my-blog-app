import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null );
     
      const token = currentUser?.message
      const userId = currentUser?.userId
    const login = async(inputs) => {
       const res = await axios.post("/auth/login", inputs);
       console.log(res);
       setCurrentUser(res.data);
    }
    const logout = async(inputs) => {
        //await axios.post("/auth/logout", inputs);
      
        setCurrentUser(null);
     }

     useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
     },[currentUser])

     return (
        <AuthContext.Provider value={{currentUser,login,logout,token,userId}}>{children}</AuthContext.Provider>
     )
}
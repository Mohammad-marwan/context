import { createContext } from "react";
import { useState } from "react";
export const UserContext = createContext();

const UserContextProvider = ({children})=>{
const [isLogin,setIsLogin] = useState(false);
return <UserContext.Provider value={{isLogin,setIsLogin}}>{children}</UserContext.Provider>
};

export default UserContextProvider;
import React, { createContext, useContext, useEffect, useState } from "react";
import  axiosInstance  from "../api/axiosConfig";


interface AuthContextData {
  authentified: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authentified, setAuthentified] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      const tokenDecoded = JSON.parse(token);
      axiosInstance.defaults.headers.common.Authorization = `${tokenDecoded}`;
      setAuthentified(true)
    }else{
      setAuthentified(false)
    }
  },[])
 
  return (
    <AuthContext.Provider value={{ authentified }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;

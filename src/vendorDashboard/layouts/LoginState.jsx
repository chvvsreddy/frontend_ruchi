import React,{ createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext(null);

const LoginState = ({children}) => {
    const [loginState, setLoginState] = useState(false); 

    useEffect(()=>{
         const loginToken = localStorage.getItem('loginToken')
          if(loginToken){
          setLoginState(true);
          }
     },[]) 

  return (
    <GlobalContext.Provider value={{loginState, setLoginState}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default LoginState
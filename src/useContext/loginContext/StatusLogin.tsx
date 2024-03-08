import React, { useState } from "react";
import { loginContext } from "./LoginContext";

interface LoginState {
  name: string;
  lastName: string;
  isLogin: boolean;
}

interface StateLoginProps {
  children: React.ReactNode;
}

const StateLogin: React.FC<StateLoginProps> = ({ children }) => {
    console.log(children)
  const [login, setLogin] = useState<LoginState>({
    name: "Marcela",
    lastName: "Carmona",
    isLogin: false,
  });

  const loginUser = () => {
    setLogin({
      ...login,
      isLogin: !login.isLogin,
    });
  };

  console.log(login);

  return (
    <loginContext.Provider
      value={{
        login,
        loginUser,
      }}
    >
      {children}
    </loginContext.Provider>
  );
};

export default StateLogin;

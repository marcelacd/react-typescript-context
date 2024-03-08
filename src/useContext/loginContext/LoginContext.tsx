import { createContext, useContext } from "react";

interface LoginState {
  name: string;
  lastName: string;
  isLogin: boolean;
}

interface LoginContextType {
  login: LoginState;
  loginUser: () => void;
}

// export const loginContext = createContext<LoginContextType>({});

const initialLoginState: LoginState = {
  name: "",
  lastName: "",
  isLogin: false,
};

export const loginContext = createContext<LoginContextType>({
  login: initialLoginState,
  loginUser: () => {},
});


export const useLoginContext = () => useContext(loginContext);


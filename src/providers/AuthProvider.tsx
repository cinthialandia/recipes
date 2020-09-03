import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, User, AuthError } from "../firebase";

interface Context {
  value?: User;
  loading: boolean;
  error?: AuthError;
}

const AuthContext = React.createContext<Context>({ loading: true });

export const AuthProvider: React.FC = ({ children }) => {
  const [value, loading, error] = useAuthState(auth);

  return (
    <AuthContext.Provider value={{ value, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

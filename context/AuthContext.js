import { createContext, useState, useContext } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const loginUser = async (email) => {
    setUser({ email });
    router.push("/");
  };

  const logoutUser = async () => {
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Magic } from "magic-sdk";
import { MAGIC_PUBLIC_KEY } from "../utils/urls";

const AuthContext = createContext();

let magic;

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const loginUser = async (email) => {
    try {
      await magic.auth.loginWithMagicLink({ email })
      setUser({ email })
      router.push("/");
    } catch (err) {
      setUser(null);
      console.log(err);
    }
  };

  const logoutUser = async () => {
    try {
      await magic.user.logout()
      setUser(null);
      router.push("/");
    } catch(err) {
      console.log(err);
    }
  };

  const checkUserLoggedIn = async() => {
    try {
      const isLoggedIn = await magic.user.isLoggedIn()
      if(isLoggedIn) {
        const { email } = await magic.user.getMetadata();
        setUser({ email })
        // TODO: for testing
        const token = await getToken();
        console.log("checkUserLoggedIn token", token)
      }
    } catch(err) {
      console.log(err);
    }
  }

  const getToken = async () => {
    // retrieves Magic issued bearer token to allow user to make authenticated requests
    try {
      const token = await magic.user.getIdToken()
      return token
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    magic = new Magic(MAGIC_PUBLIC_KEY);
    checkUserLoggedIn()
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, getToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import Cookies from "js-cookie";
import axiosInstance from "@/api";
import { User } from "@/types";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticating: boolean;
  isAuth: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const setToken = (token: string) => {
  Cookies.set("token", token, {
    expires: 7,
    secure: true,
    sameSite: "strict",
  });
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearToken = () => {
  Cookies.remove("token");
  delete axiosInstance.defaults.headers.common["Authorization"];
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const fetchUser = useCallback(async () => {
    setIsAuthenticating(true);
    try {
      const { data } = await axiosInstance.get("/user/profile");
      setUser(data.data.user);
      setIsAuth(true);
    } catch (error) {
      console.error("Error fetching user data, logging out.", error);
    } finally {
      setIsAuthenticating(false);
    }
  }, []);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setToken(token);
      fetchUser();
    }
  }, [fetchUser]);

  const login = async (email: string, password: string) => {
    setIsAuthenticating(true);
    try {
      const { data } = await axiosInstance.post("/user/login", {
        email,
        password,
      });

      setToken(data.data.token);
      setUser(data.data.user);
      setIsAuth(true);
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Login failed. Please check your credentials.");
    } finally {
      setIsAuthenticating(false);
    }
  };

  const logout = () => {
    clearToken();
    setUser(null);
    setIsAuth(false);
    setIsAuthenticating(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuth, isAuthenticating }}
    >
      {children}
    </AuthContext.Provider>
  );
};

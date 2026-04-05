import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/user/info", {
          method: "GET",
          credentials: "include", // envia cookie HttpOnly
        });

        if (res.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return createElement(
    AuthContext.Provider,
    { value: { isAuthenticated, loading } },
    children,
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

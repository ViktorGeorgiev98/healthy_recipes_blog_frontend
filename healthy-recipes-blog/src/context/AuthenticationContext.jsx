import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("userEmail");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUserEmail(storedUser);
      setIsAuthenticated(true);
    } else {
      setToken(null);
      setUserEmail(null);
      setIsAuthenticated(false);
    }
  }, []);

  const login = (data) => {
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("userEmail", data.email);
    setToken(data.access_token);
    setUserEmail(data.email);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setToken(null);
    setUserEmail(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ token, userEmail, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };

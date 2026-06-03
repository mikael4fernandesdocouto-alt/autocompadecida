import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { loginUser, registerUser, seedAdminUser, type User } from "../lib/db";

type AuthContextType = {
  user: User | null;
  isAdmin: boolean;
  login: (username: string, password: string) => Promise<string | null>;
  register: (username: string, password: string) => Promise<string | null>;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    seedAdminUser().then(() => {
      const stored = sessionStorage.getItem("auth-user");
      if (stored) {
        try {
          setUser(JSON.parse(stored));
        } catch {}
      }
      setLoading(false);
    });
  }, []);

  const login = async (username: string, password: string): Promise<string | null> => {
    const found = await loginUser(username, password);
    if (!found) return "Usuário ou senha inválidos.";
    setUser(found);
    sessionStorage.setItem("auth-user", JSON.stringify(found));
    return null;
  };

  const register = async (username: string, password: string): Promise<string | null> => {
    if (username.length < 3) return "Usuário deve ter pelo menos 3 caracteres.";
    if (password.length < 3) return "Senha deve ter pelo menos 3 caracteres.";
    if (username === "admin000") return "Este usuário já existe.";
    const ok = await registerUser(username, password);
    if (!ok) return "Usuário já existe.";
    return null;
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("auth-user");
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin: user?.isAdmin ?? false, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

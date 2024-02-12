import { IUser } from '@/@types/user';
import { createContext, useEffect, useState } from 'react';

type AuthContextType = {
  user: IUser | null;
  loading: boolean;
  login: (
    credentials: { username: string; password: string },
    callback: (res: Record<string, unknown>) => void
  ) => void;
  logout: (callback: (res: Record<string, unknown>) => void) => void;
};

export const AuthContext = createContext({} as AuthContextType);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const login = (
    credentials: { username: string; password: string },
    callback: (res: Awaited<ReturnType<any>>) => void
  ) => {
    console.log(credentials);
  };

  const logout = (callback: (res: Awaited<ReturnType<any>>) => void) => {
    console.log('logOut');
  };

  // get last session
  useEffect(() => {
    console.log('app loaded, get user last session');
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

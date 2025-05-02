import usersData from '@/datas/users.json';
import React, { createContext, ReactNode, useContext, useState } from 'react';

type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  profile_image_url: string;
  username: string;
  experience: string;
  biography: string;
  favorite_music: string;
  birth_date: string;
  verified: boolean;
  rating: number;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (
    userData: Omit<
      User,
      'id' | 'verified' | 'rating' | 'created_at' | 'updated_at'
    >,
  ) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    const foundUser = usersData.find(
      (u) => u.email === email && u.password === password,
    );
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (
    userData: Omit<
      User,
      'id' | 'verified' | 'rating' | 'created_at' | 'updated_at'
    >,
  ): Promise<boolean> => {
    const newUser = {
      ...userData,
      id: usersData.length + 1,
      verified: false,
      rating: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    setUser(newUser);
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

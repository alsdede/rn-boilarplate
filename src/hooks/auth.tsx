import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import getRealmApp from '../service/realm';

interface User {
  id: string;
  name: string;
  password: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  name: string;
  password: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [teste, setTeste] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log('TESTE', teste);

  useEffect(() => {
    async function loadStoredData(): Promise<void> {}
  }, []);

  const signIn = useCallback(async ({ name, password }) => {
    console.log('name', name);
    console.log('pass', password);
    const realm = await getRealmApp();
    const data = await realm
      .objects('User')
      .filtered('name == $0 && password== $1', name, password);
    if (Object.keys(data).length === 1) {
    }
    console.log('SIGN DATA ===========>', data);
    setTeste(data);
  }, []);

  const signOut = useCallback(async () => {
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, loading, teste }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };

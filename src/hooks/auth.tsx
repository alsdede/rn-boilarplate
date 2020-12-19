import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { ObjectType } from 'realm';
import getRealmApp from '../service/realm';

interface User {
  id: string;
  name: string;
  password: string;
}

interface AuthState {
  token: boolean;
  user: ObjectType;
}

interface SignInCredentials {
  id: string;
  name: string;
  password: string;
}

interface AuthContextData {
  token: boolean;
  user: ObjectType;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [teste, setTeste] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoredData(): Promise<void> {}
  }, []);

  const signIn = useCallback(async ({ name, password }) => {
    const realm = await getRealmApp();
    const data = realm
      .objects('User')
      .filtered('name == $0 && password== $1', name, password);
    if (Object.keys(data).length === 1) {
      const token = false;
      const user = data;
      setData({ token, user });
    }
    console.log('SIGN DATA ===========>', data);
  }, []);

  const signOut = useCallback(async () => {
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, loading, token: data.token }}
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

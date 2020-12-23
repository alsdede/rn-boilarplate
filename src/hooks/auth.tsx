import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { Results } from 'realm';
import getRealmApp from '../service/realm';

type User = {
  id: string;
  name: string;
  password: string;
};

interface AuthState {
  token: boolean;
  user: User;
}

interface SignInCredentials {
  id?: string;
  name: string;
  password: string;
}

interface AuthContextData {
  token: boolean;
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  error: string | null;
  allUsers;
  getAllUsers();
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const signIn = useCallback(async ({ name, password }) => {
    const realm = await getRealmApp();
    const data = realm
      .objects<User>('User')
      .filtered('name == $0 && password== $1', name, password);

    if (Object.keys(data).length === 1) {
      const token = true;
      const user = data[0];
      setData({ token, user });
    } else {
      setError('Usuário inváido');
    }
    console.log('SIGN DATA ===========>', data);
  }, []);

  const signOut = useCallback(async () => {
    setData({} as AuthState);
  }, []);

  const getUsers = useCallback(async () => {
    const realm = await getRealmApp();
    const data = realm.objects<User>('User');
    setAllUsers(data);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        loading,
        token: data.token,
        error,
        allUsers,
        getUsers,
      }}
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

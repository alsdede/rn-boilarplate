import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { showMessage, hideMessage } from 'react-native-flash-message';
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
  setError(msg: string): void;
  allUsers;
  getAllUsers(): void;
  createUser(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, []);
  const signIn = useCallback(async ({ name, password }) => {
    setError('');
    const realm = await getRealmApp();
    const data = realm
      .objects<User>('User')
      .filtered('name == $0 && password== $1', name, password);

    if (Object.keys(data).length === 1) {
      const token = true;
      const user = data[0];
      setData({ token, user });
      setError('');
    } else {
      setError('Usuário inválido');
    }
    console.log('SIGN DATA ===========>', data[0]);
  }, []);

  const signOut = useCallback(async () => {
    setData({} as AuthState);
  }, []);

  const getUsers = useCallback(async () => {
    const realm = await getRealmApp();
    const data = realm.objects<User>('User');
    setAllUsers(data);
  }, []);

  const createUser = useCallback(async ({ name, password }) => {
    setError('');

    if (name === '' || null) {
      setError('Preencha o nome de usuário');
      return;
    }
    if (password === '' || null) {
      setError('Preencha a senha');
      return;
    }
    const realm = await getRealmApp();
    const data = realm.objects<User>('User').filtered('name == $0', name);

    if (Object.keys(data).length > 0) {
      setError('Usuário já cadastrado');
    } else {
      const data = {
        id: uuidv4(),
        name,
        password,
      };
      realm.write(() => {
        realm.create('User', data);
      });
      showMessage({
        message: 'Usuário cadastrado com sucesso',
        description: `[User:${name}] [Password:${password}]`,
        type: 'success',
      });
    }
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
        setError,
        allUsers,
        getUsers,
        createUser,
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

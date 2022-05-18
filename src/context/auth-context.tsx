import React, { memo, useState } from 'react';
import { UserResponse } from '../network/login/loginType';
import { login } from '../network/login/index';
import { register } from '../network/register/index';
import { remove } from '../request/storage';

interface AuthForm {
    username: string;
    password: string;
}

interface Props {
    children: React.ReactNode;
}

export const AuthContext = React.createContext<
    | {
          user: UserResponse['user'] | null;
          loginProvider: (form: AuthForm) => Promise<void>;
          registerProvider: (form: AuthForm) => Promise<void>;
          loginOut: () => void;
      }
    | undefined
>(undefined);
AuthContext.displayName = 'AuthContext';

export const AuthProvider: React.FC<Props> = memo(({ children }: Props) => {
    const [user, setUser] = useState<UserResponse['user'] | null>(null);

    // 登录
    const loginProvider = (form: AuthForm) => {
        return login(form).then((res) => {
            setUser(res.data.user);
        });
    };
    // 注册
    const registerProvider = (form: AuthForm) => {
        return register(form).then((res) => {
            setUser(res.data);
        });
    };
    // 注销登录
    const loginOut = () => {
        remove();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loginProvider, registerProvider, loginOut }}>
            {children}
        </AuthContext.Provider>
    );
});

export interface UserProps {
    username: string;
    password: string;
}

export interface UserResponse {
    user: {
        name: string;
        id: number;
        email?: string;
        title?: string;
        token: string;
    };
}

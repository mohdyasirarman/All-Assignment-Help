'use client';

import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { apiClient } from '@/lib/api-client';
import { toast } from 'react-toastify';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<any>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Check for stored auth state on mount
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
        
        if (storedUser && storedToken) {
            try {
                const user = JSON.parse(storedUser);
                setUser(user);
                setToken(storedToken);
                setIsAuthenticated(true);
                apiClient.setToken(storedToken);

                // If on login page, redirect to home
                if (pathname === '/login') {
                    router.replace('/');
                }
            } catch (error) {
                console.error('Error restoring auth state:', error);
                localStorage.removeItem('user');
                localStorage.removeItem('token');
            }
        }
        setIsLoading(false);
    }, [router, pathname]);

    const login = useCallback(async (email: string, password: string) => {
        try {
            const response = await apiClient.login({ email, password });
            const { user, token } = response;
            
            if (!user || !token) {
                throw new Error('Invalid response data from server');
            }

            // Store auth state
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            document.cookie = `token=${token}; path=/`;
            
            // Update context state
            setUser(user);
            setToken(token);
            setIsAuthenticated(true);
            
            // Set token in API client
            apiClient.setToken(token);
            
            toast.success('Login successful!');

            // Redirect to home page after login
            router.replace('/');

            return response;
        } catch (error) {
            console.error('Login failed:', error);
            
            if (error instanceof Error) {
                if (error.message.includes('Invalid credentials')) {
                    toast.error('Invalid email or password');
                } else {
                    toast.error(error.message);
                }
            } else {
                toast.error('An unexpected error occurred');
            }
            
            throw error;
        }
    }, [router]);

    const logout = useCallback(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
        setUser(null);
        setToken(null);
        setIsAuthenticated(false);
        apiClient.clearToken();
        router.replace('/login');
    }, [router]);

    return (
        <AuthContext.Provider 
            value={{
                user,
                token,
                isAuthenticated,
                isLoading,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

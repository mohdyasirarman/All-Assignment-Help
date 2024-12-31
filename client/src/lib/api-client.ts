import { validateEnv } from './env';

// Response types
interface ApiResponse<T = any> {
  success?: boolean;
  data?: T;
  error?: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface Order {
  orderId: number;
  title: string;
  desc: string;
  subject: string;
  type: string;
  deadline: string;
  status?: string;
  teacherId?: number;
  value?: number;
  files?: OrderFile[];
}

export interface OrderFile {
  fileId: number;
  filename: string;
  originalFilename: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface RegisterResponse {
  token: string;
  user: User;
}

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions {
  method?: RequestMethod;
  body?: any;
  headers?: Record<string, string>;
  isFormData?: boolean;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class NetworkError extends Error {
  constructor(message: string, public originalError: Error) {
    super(message);
    this.name = 'NetworkError';
  }
}

export class ApiClient {
  private baseUrl: string;
  private token: string | null;

  constructor() {
    const env = validateEnv();
    this.baseUrl = env.NEXT_PUBLIC_API_URL;
    this.token = null;
  }

  setToken(token: string) {
    this.token = token;
  }

  clearToken() {
    this.token = null;
  }

  private async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const {
      method = 'GET',
      body,
      headers = {},
      isFormData = false
    } = options;

    const requestHeaders: Record<string, string> = {
      ...headers,
    };

    if (!isFormData) {
      requestHeaders['Content-Type'] = 'application/json';
    }

    if (this.token) {
      requestHeaders['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method,
        headers: requestHeaders,
        body: isFormData ? body : body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new ApiError(
          errorData?.message || 'An error occurred',
          response.status,
          errorData
        );
      }

      const data = await response.json();
      console.log('API Response:', data); // Debug log
      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new NetworkError(
        'Network request failed',
        error instanceof Error ? error : new Error(String(error))
      );
    }
  }

  // Auth endpoints
  async register(data: { name: string; email: string; password: string; confirmPassword: string }): Promise<RegisterResponse> {
    const { confirmPassword, ...userData } = data;
    return this.request<RegisterResponse>('/user/add', {
      method: 'POST',
      body: userData,
    });
  }

  async updateContact(userId: string, contact: string): Promise<{ userid: string }> {
    return this.request<{ userid: string }>('/user/update-contact', {
      method: 'POST',
      body: { userid: userId, contact },
    });
  }

  async updatePassword(userId: string, password: string): Promise<{ userid: string }> {
    return this.request<{ userid: string }>('/user/update-password', {
      method: 'POST',
      body: { userid: userId, password },
    });
  }

  async login(credentials: { email: string; password: string }): Promise<LoginResponse> {
    try {
      const response = await this.request<LoginResponse>('/user/login', {
        method: 'POST',
        body: credentials,
      });
      return response;
    } catch (error) {
      console.error('Login request failed:', error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    await this.request<void>('/auth/logout', {
      method: 'POST',
    });
    this.clearToken();
  }

  async getCurrentUser(): Promise<User> {
    return this.request<User>('/auth/me');
  }

  async updateProfile(data: Partial<User>): Promise<User> {
    return this.request<User>('/auth/profile', {
      method: 'PUT',
      body: data,
    });
  }

  // Order endpoints
  async createOrder(orderData: Omit<Order, 'orderId'>): Promise<{ orderId: number }> {
    return this.request<{ orderId: number }>('/order', {
      method: 'POST',
      body: orderData,
    });
  }

  async uploadOrderFiles(orderId: number, files: File[]): Promise<{ files: OrderFile[] }> {
    const formData = new FormData();
    formData.append('orderId', orderId.toString());
    files.forEach(file => formData.append('files', file));

    return this.request<{ files: OrderFile[] }>('/order/upload', {
      method: 'POST',
      body: formData,
      isFormData: true,
    });
  }

  // User endpoints
  async getUserOrders(): Promise<Order[]> {
    return this.request<Order[]>('/user/orders');
  }

  async getOrderDetails(orderId: number): Promise<Order> {
    return this.request<Order>(`/user/orders/${orderId}`);
  }

  // Admin endpoints
  async getAllOrders(): Promise<Order[]> {
    return this.request<Order[]>('/admin/orders');
  }

  async updateOrderStatus(orderId: number, status: string): Promise<void> {
    return this.request<void>(`/admin/orders/${orderId}/status`, {
      method: 'PUT',
      body: { status },
    });
  }

  async assignTeacher(orderId: number, teacherId: number): Promise<void> {
    return this.request<void>(`/admin/orders/${orderId}/teacher`, {
      method: 'PUT',
      body: { teacherId },
    });
  }

  async updateOrderValue(orderId: number, value: number): Promise<void> {
    return this.request<void>(`/admin/orders/${orderId}/value`, {
      method: 'PUT',
      body: { value },
    });
  }
}

// Create a singleton instance
export const apiClient = new ApiClient();

// Export types
export type {
  ApiResponse,
  RequestMethod,
  RequestOptions,
};

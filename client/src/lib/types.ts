export interface User {
  id: string;
  email: string;
  hashedPassword: string;
  name?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

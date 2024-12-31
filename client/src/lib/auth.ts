import jwt from 'jsonwebtoken';
import { User } from './types';

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not set');
}

const JWT_SECRET = process.env.JWT_SECRET;

export interface JWTPayload {
  id: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

export async function verifyToken(token: string): Promise<JWTPayload> {
  try {
    const payload = jwt.verify(token, JWT_SECRET) as JWTPayload;
    if (!payload.id || !payload.email || !payload.role) {
      throw new Error('Invalid token payload');
    }
    return payload;
  } catch (error) {
    throw new Error('Invalid token');
  }
}

export function validateToken(token: string): JWTPayload | null {
  try {
    const payload = jwt.verify(token, JWT_SECRET) as JWTPayload;
    if (!payload.id || !payload.email) {
      return null;
    }
    return payload;
  } catch (error) {
    return null;
  }
}

export async function generateToken(user: User & { role: string }): Promise<string> {
  const payload: JWTPayload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

export async function refreshToken(token: string): Promise<string> {
  const payload = await verifyToken(token);
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

export function parseAuthHeader(header: string | null): string | null {
  if (!header || !header.startsWith('Bearer ')) {
    return null;
  }
  return header.substring(7);
}

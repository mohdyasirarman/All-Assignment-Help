import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import Tokens from 'csrf';

const tokens = new Tokens();
const secret = process.env.CSRF_SECRET || tokens.secretSync();

export async function GET() {
  try {
    const token = tokens.create(secret);
    
    const response = NextResponse.json({ token });
    
    // Set cookie with CSRF token
    response.cookies.set('csrf', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });
    
    return response;
  } catch (error) {
    console.error('CSRF token generation failed:', error);
    return NextResponse.json(
      { error: 'Failed to generate CSRF token' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const token = request.headers.get('x-csrf-token');
    const cookieStore = cookies();
    const cookieToken = cookieStore.get('csrf')?.value;

    if (!token || !cookieToken) {
      return NextResponse.json(
        { error: 'CSRF token missing' },
        { status: 400 }
      );
    }

    if (!tokens.verify(secret, token)) {
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      );
    }

    return NextResponse.json({ valid: true });
  } catch (error) {
    console.error('CSRF verification failed:', error);
    return NextResponse.json(
      { error: 'CSRF verification failed' },
      { status: 500 }
    );
  }
}

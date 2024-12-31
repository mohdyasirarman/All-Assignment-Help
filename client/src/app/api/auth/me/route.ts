import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/lib/types";
import { validateToken } from "@/lib/auth";

export async function GET(request: Request) {
  try {
    // Get token from Authorization header
    const authHeader = request.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "No token provided" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    
    // Validate token
    const payload = validateToken(token);
    if (!payload) {
      return NextResponse.json(
        { error: "Invalid token" },
        { status: 401 }
      );
    }

    // Get user data
    const user = await findUserById(payload.id);
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Remove sensitive data
    const { hashedPassword, ...safeUser } = user;
    
    return NextResponse.json(safeUser);
  } catch (error) {
    console.error("Error getting user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Temporary function - replace with your database logic
async function findUserById(id: string): Promise<User | null> {
  // This is a temporary implementation for testing
  // Replace with actual database lookup in production
  const testUsers = [
    {
      id: '1',
      email: 'admin@example.com',
      hashedPassword: 'hashed_password_here',
      role: 'admin',
      name: 'Admin User'
    },
    {
      id: '2',
      email: 'user@example.com',
      hashedPassword: 'hashed_password_here',
      role: 'user',
      name: 'Test User'
    }
  ];

  return testUsers.find(user => user.id === id) || null;
}

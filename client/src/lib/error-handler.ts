import { NextResponse } from "next/server";
import { ZodError } from "zod";

export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public isOperational: boolean = true
  ) {
    super(message);
    this.name = "AppError";
    Error.captureStackTrace(this, this.constructor);
  }
}

export function handleError(error: unknown) {
  if (error instanceof AppError) {
    return NextResponse.json(
      {
        error: error.message,
        isOperational: error.isOperational,
      },
      { status: error.statusCode }
    );
  }

  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        error: "Validation Error",
        details: error.errors,
        isOperational: true,
      },
      { status: 400 }
    );
  }

  // Log unexpected errors
  console.error("Unexpected error:", error);

  return NextResponse.json(
    {
      error: "Internal Server Error",
      isOperational: false,
    },
    { status: 500 }
  );
}

export function assertError(
  condition: unknown,
  message: string,
  statusCode: number = 400
): asserts condition {
  if (!condition) {
    throw new AppError(message, statusCode);
  }
}

export function handleClientError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unexpected error occurred";
}

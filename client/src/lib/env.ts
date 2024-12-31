import { z } from 'zod';

const envSchema = z.object({
  // Application
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_PUBLIC_FRONTEND_URL: z.string().url(),

  // Authentication
  JWT_SECRET: z.string(),

  // Security
  RATE_LIMIT_MAX: z.coerce.number().positive().default(100),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().positive().default(900000), // 15 minutes

  // File Upload
  MAX_FILE_SIZE: z.coerce.number().positive().default(10000000), // 10MB
  ALLOWED_FILE_TYPES: z.string().default('.pdf,.jpeg,.png,.docx,.doc,.zip'),
  UPLOAD_DIR: z.string().default('uploads'),
});

export type Env = z.infer<typeof envSchema>;

export function validateEnv(): Env {
  try {
    // Parse with defaults
    return envSchema.parse({
      ...process.env,
      NODE_ENV: process.env.NODE_ENV || 'development',
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
      NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3002',
      JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_key_here_must_be_at_least_32_chars_long_123',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const issues = error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`);
      throw new Error(`Invalid environment variables:\n${issues.join('\n')}`);
    }
    throw error;
  }
}

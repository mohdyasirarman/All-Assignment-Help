import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ['query', 'error', 'warn'],
  }).$extends({
    query: {
      $allOperations({ 
        operation,
        args,
        query
      }: {
        operation: string;
        args: any;
        query: (args: any) => Promise<any>;
      }) {
        const start = performance.now();
        return query(args).finally(() => {
          const end = performance.now();
          if (process.env.NODE_ENV !== 'production') {
            console.log(`${operation} took ${end - start}ms`);
          }
        });
      },
    },
  });
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Error handling wrapper
export async function handlePrismaOperation<T>(
  operation: () => Promise<T>
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    console.error('Prisma operation failed:', error);
    throw error;
  }
}

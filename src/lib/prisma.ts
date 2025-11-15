import { PrismaClient } from '@/generated/prisma/client';

// The singleton pattern ensures that only one instance of PrismaClient is created
// even with Next.js's hot-reloading mechanism in development.

const prisma = new PrismaClient();

const globalForPrisma = global as unknown as { prisma: typeof prisma };

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;

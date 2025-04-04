import { LinkedAccountProvider } from '@prisma/client';
import 'next-auth';
import 'next-auth/jwt';

export interface LinkedAccount {
    id: string;
    imageUrl: string;
    bannerUrl?: string;
    displayName?: string;
    username?: string;
    tokenType: string;
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
}

// Extend NextAuth types to support only the allowed linked account providers
declare module 'next-auth' {
    interface User {
        provider?: string;
        linkedAccounts?: Partial<Record<LinkedAccountProvider, LinkedAccount>>;
        emailVerified?: Date;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        provider?: string;
        linkedAccounts?: Partial<Record<LinkedAccountProvider, LinkedAccount>>;
    }
}

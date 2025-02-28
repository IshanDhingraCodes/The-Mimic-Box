/**
 * Array of routes accessible without authentication.
 */
export const publicRoutes: string[] = ['/', '/auth/verify-email', '/auth/reset-password'];

/**
 * Array of authentication-related routes.
 */
export const authRoutes: string[] = ['/auth/login', '/auth/register', '/auth/forgot-password', '/auth/error'];

/**
 * Prefix for API authentication routes.
 */
export const apiAuthPrefix: string = '/api/auth';

/**
 * Default route for authentication.
 */
export const DEFAULT_AUTH_ROUTE: string = '/auth/login';

/**
 * Default route for the dashboard.
 */
export const DEFAULT_AUTH_REDIRECT: string = '/pro';

/**
 * Prefix for api authentication routes
 * @type {string}
 *
 */
export const API_PREFIX_ROUTES = "api/auth/";

/**
 *public authentication routes 
 @type {string[]}
 */
export const authRoute = ["/login", "/register"];

/**
 * protected route
 * authenticated users redirects to this when accessing public auth routes
 * @type {string}
 */
export const REDIRECT_ROUTE = "/settings";

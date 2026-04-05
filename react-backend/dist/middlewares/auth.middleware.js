"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_config_1 = __importDefault(require("../config/auth.config"));
const response_utils_1 = __importDefault(require("../utils/response.utils"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthMiddleware {
    /**
     * Middleware to authenticate the user based on the access token stored in the HttpOnly cookie.
     * This middleware will verify the access token and attach the user information to the request object.
     */
    static authenticateUser = (req, res, next) => {
        // 1. Extract the access token from the HttpOnly cookie
        const token = req.cookies.accessToken;
        // If there's no access token, return an error
        if (!token) {
            return response_utils_1.default.unauthorized(res, null); // Sends 401 Unauthorized if token is missing
        }
        try {
            // 2. Verify the token using the secret from the auth config
            const decodedToken = jsonwebtoken_1.default.verify(token, auth_config_1.default.secret); // Type assertion for better type safety
            // If the token is valid, attach user information to the request object
            req.userId = decodedToken.userId; // Attach userId to the request object
            // Proceed to the next middleware or route handler
            next();
        }
        catch (error) {
            // If the token verification fails (invalid or expired token), return an error
            console.error("Authentication failed:", error); // Log error for debugging
            return response_utils_1.default.unauthorized(res, null); // Sends 401 Unauthorized if token is invalid or expired
        }
    };
    static refreshTokenValidation = (req, res, next) => {
        // 1. Extract the refresh token from the HttpOnly cookie
        const refreshToken = req.cookies.refreshToken;
        // If there's no refresh token, return an error
        if (!refreshToken) {
            return response_utils_1.default.unauthorized(res, { message: "No refresh token provided" });
        }
        try {
            // 2. Verify the refresh token using the secret from the auth config
            const decodedToken = jsonwebtoken_1.default.verify(refreshToken, auth_config_1.default.refresh_secret);
            // If the token is valid, attach user information to the request object
            req.userId = decodedToken.userId;
            // Proceed to the next middleware or route handler
            next();
        }
        catch (error) {
            // Handle token verification errors (invalid or expired token)
            console.error("Refresh Token authentication failed:", error);
            // Return a 401 Unauthorized with a more specific message
            return response_utils_1.default.unauthorized(res, { message: "Invalid or expired refresh token" });
        }
    };
}
exports.default = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map
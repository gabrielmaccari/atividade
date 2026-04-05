import { NextFunction, Request, Response } from "express";
export interface DecodedToken {
    userId: number;
}
declare class AuthMiddleware {
    /**
     * Middleware to authenticate the user based on the access token stored in the HttpOnly cookie.
     * This middleware will verify the access token and attach the user information to the request object.
     */
    static authenticateUser: (req: Request, res: Response, next: NextFunction) => void;
    static refreshTokenValidation: (req: Request, res: Response, next: NextFunction) => void;
}
export default AuthMiddleware;
//# sourceMappingURL=auth.middleware.d.ts.map
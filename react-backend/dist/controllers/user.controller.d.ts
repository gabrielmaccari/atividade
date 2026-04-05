import { Request, Response } from "express";
declare class UserController {
    /**
     * Get the user information based on the authenticated user.
     * The userId is passed from the AuthMiddleware.
     */
    static getUser: (req: Request, res: Response) => Promise<void>;
}
export default UserController;
//# sourceMappingURL=user.controller.d.ts.map
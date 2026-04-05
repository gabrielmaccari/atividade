import { Request, Response } from "express";
declare class AuthController {
    static login: (req: Request, res: Response) => Promise<void>;
    static register: (req: Request, res: Response) => Promise<void>;
    static logout: (req: Request, res: Response) => Promise<void>;
    static refreshToken: (req: Request, res: Response) => Promise<void>;
}
export default AuthController;
//# sourceMappingURL=auth.controller.d.ts.map
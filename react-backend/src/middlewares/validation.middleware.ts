import Send from "@utils/response.utils";
import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

class ValidationMiddleware {
    static validateBody(schema: ZodSchema) {
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                schema.parse(req.body);
                next();
            } catch (error) {
                if (error instanceof ZodError) {
                    const { fieldErrors } = error.flatten();
                    return Send.validationErrors(res, fieldErrors as Record<string, string[]>);
                }

                return Send.error(res, null, "Validation middleware failure");
            }
        };
    }
}

export default ValidationMiddleware;
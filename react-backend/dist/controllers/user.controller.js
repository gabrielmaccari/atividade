"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_utils_1 = __importDefault(require("../utils/response.utils"));
const db_1 = require("../db");
class UserController {
    /**
     * Get the user information based on the authenticated user.
     * The userId is passed from the AuthMiddleware.
     */
    static getUser = async (req, res) => {
        try {
            const userId = req.userId; // Extract userId from the authenticated request
            // Fetch the user data from the database (Prisma in this case)
            const user = await db_1.prisma.user.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    username: true,
                    email: true,
                    createdAt: true,
                    updatedAt: true,
                    // Add other fields you want to return
                }
            });
            // If the user is not found, return a 404 error
            if (!user) {
                return response_utils_1.default.notFound(res, {}, "User not found");
            }
            // Return the user data in the response
            return response_utils_1.default.success(res, { user });
        }
        catch (error) {
            console.error("Error fetching user info:", error);
            return response_utils_1.default.error(res, {}, "Internal server error");
        }
    };
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map
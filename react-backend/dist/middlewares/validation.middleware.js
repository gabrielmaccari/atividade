"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_utils_1 = __importDefault(require("@utils/response.utils"));
class ValidationMiddleware {
    static validateBody(schema) {
        return (req, res, next) => {
            try {
                schema.parse(req.body);
                next();
            }
            catch (error) {
                return response_utils_1.default.error(res, "Invalid request data");
            }
        };
    }
}
exports.default = ValidationMiddleware;
//# sourceMappingURL=validation.middleware.js.map
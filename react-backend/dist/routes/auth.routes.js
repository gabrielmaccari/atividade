"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = __importDefault(require("@controllers/auth.controller"));
const router_1 = __importDefault(require("./router"));
const validation_middleware_1 = __importDefault(require("@middlewares/validation.middleware"));
const auth_schema_1 = __importDefault(require("validations/auth.schema"));
const auth_middleware_1 = __importDefault(require("@middlewares/auth.middleware"));
class AuthRouter extends router_1.default {
    routes() {
        return [
            {
                // login
                method: "post",
                path: "/login",
                middlewares: [
                    validation_middleware_1.default.validateBody(auth_schema_1.default.login)
                ],
                handler: auth_controller_1.default.login
            },
            {
                // register
                method: "post",
                path: "/register",
                middlewares: [
                    validation_middleware_1.default.validateBody(auth_schema_1.default.register)
                ],
                handler: auth_controller_1.default.register
            },
            {
                // logout
                method: "post",
                path: "/logout",
                middlewares: [
                    // check if user is logged in
                    auth_middleware_1.default.authenticateUser
                ],
                handler: auth_controller_1.default.logout
            },
            {
                // refresh token
                method: "post",
                path: "/refresh-token",
                middlewares: [
                    // checks if refresh token is valid
                    auth_middleware_1.default.refreshTokenValidation
                ],
                handler: auth_controller_1.default.refreshToken
            },
        ];
    }
}
exports.default = new AuthRouter().router;
//# sourceMappingURL=auth.routes.js.map
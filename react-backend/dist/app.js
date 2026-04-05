"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const app_config_1 = __importDefault(require("./config/app.config"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.initMiddlewares();
        this.initRoutes();
    }
    app;
    initMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cookie_parser_1.default)());
        this.app.use((0, cors_1.default)({
            origin: [
                'http://localhost:3000', // your frontend url
                'https://mywebsite.com' // your production url optional
            ],
            methods: ["GET", "POST", "DELETE"],
            credentials: true
        }));
    }
    initRoutes() {
        // health-check
        this.app.get("/", (_, res) => {
            res.status(200).json({ message: "API online" });
        });
        // /api/auth/*
        this.app.use("/api/auth", auth_routes_1.default);
        // /api/user/*
        this.app.use("/api/user", users_routes_1.default);
    }
    start() {
        const { port, host } = app_config_1.default;
        this.app.listen(port, host, () => {
            console.log(`server is running on http://${host}:${port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map
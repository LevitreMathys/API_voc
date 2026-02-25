"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./user/user.route");
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", async (_req, res) => {
    res.send("<h1>Bienvenue sur l'API</h1>");
});
app.use("/user", user_route_1.userRouter);
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map
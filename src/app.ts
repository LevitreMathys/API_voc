import "dotenv/config";
import express from "express";
import { userRouter } from "./user/user.route";

const app = express();
const PORT = 3000;

app.get("/", async (_req, res) => {
    res.send("<h1>Bienvenue sur l'API</h1>");
});

app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
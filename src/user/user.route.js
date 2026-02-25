"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const database_1 = require("../database");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/', async (req, res) => {
    res.status(200).json({
        message: "Bienvenue sur la route /user"
    });
});
exports.userRouter.post('/create');
exports.userRouter.get('/find', async (req, res) => {
    try {
        const allUsers = await database_1.prisma.user.findMany();
        if (!allUsers) {
            return res.status(401).json({
                error: '[ERREUR] Aucun utilisateur trouvé...'
            });
        }
        return res.status(200).json({
            message: allUsers
        });
    }
    catch (e) {
        return res.status(500).json({
            error: "[ERREUR] Erreur serveur"
        });
    }
});
//# sourceMappingURL=user.route.js.map
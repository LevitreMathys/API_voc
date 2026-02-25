import { Request, Response, Router } from 'express';
import { prisma } from '../database';


export const userRouter = Router();

userRouter.get('/', async (req: Request, res: Response) => {

    res.status(200).json({
        message: "Bienvenue sur la route /user"
    });

});

userRouter.post('/create', async (req: Request, res: Response) => {
    try {
        const { pseudo, email, password } = req.body;

        if (!pseudo | !email | !password) {
            return res.status(400).json({
                error: "[ERREUR] Information(s) manquante(s) ou invalide(s)"
            });
        }

        const newUser = await prisma.user.create({
            data: {
                pseudo,
                email,
                password
            }
        });
        return res.status(201).json({
            message: "Utilisateur créé avec succès",
            user: newUser
        });
    } catch (e) {
        return res.status(500).json({
            error: "[ERREUR] Erreur serveur lors de la création de l'utilisateur"
        });
    }
});

userRouter.delete('/delete/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.user.delete({
            where: { id: parseInt(id) }
        });
        return res.status(200).json({
            message: "Utilisateur supprimé avec succès"
        });
    } catch (e) {
        return res.status(500).json({
            error: "[ERREUR] Erreur serveur lors de la suppression de l'utilisateur"
        });
    }
});

userRouter.get('/find', async (req: Request, res: Response) => {

    try {
        const allUsers = await prisma.user.findMany();

        if (!allUsers) {
            return res.status(401).json({
                error: '[ERREUR] Aucun utilisateur trouvé...'
            });
        }
        return res.status(200).json({
            message: allUsers
        })

    } catch (e) {
        return res.status(500).json({
            error: "[ERREUR] Erreur serveur"
        });
    }

});
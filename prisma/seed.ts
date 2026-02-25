import { prisma } from './../src/database';
import "dotenv/config";
import { PrismaClient } from "../src/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log("Seeding database");

    await prisma.user.deleteMany();

    const user = await prisma.user.create({
        data: { pseudo: "Kyzon", email: "kyzon@example.com", password: "kyzon123" },
    })


    console.log(`Utilisateur ${user} créé`);
    const listUsers = await prisma.user.findMany();
    console.log(`Liste des utilisateurs : ${listUsers}`);

    console.log("Seeding finished !");
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})
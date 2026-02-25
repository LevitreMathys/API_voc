"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./../src/database");
require("dotenv/config");
const client_1 = require("../src/generated/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const adapter = new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new client_1.PrismaClient({ adapter });
async function main() {
    console.log("Seeding database");
    await prisma.user.deleteMany();
    const user = await prisma.user.create({
        data: { pseudo: "Kyzon", email: "kyzon@example.com", password: "kyzon123" },
    });
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
});
//# sourceMappingURL=seed.js.map
import { prisma } from "@/db";

export async function createUser(cpf: string, email: string, password: string, name?: string) {
    
    const user = prisma.user.create({
        data: {
            name: name,
            cpf: cpf,
            email: email,
            password: password
        }
    });

    return user;
}
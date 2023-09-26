import { prisma } from "@/db";

export async function createUserModel(cpf: string, email: string, password: string, name?: string) {
    
    const user = await prisma.user.create({
        data: {
            name: name,
            cpf: cpf,
            email: email,
            password: password
        }
    });

    return user;
}

export async function findUserByCpfModel(cpf: string) {
    const user = await prisma.user.findUnique({
        where: {
            cpf: cpf
        }
    })
    
    return user;
}

export async function findUserByEmailModel(email: string) {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    
    return user;
}

export async function findUserByLoginModel(email: string, password: string) {
    const user = await prisma.user.findUnique({
        where: {
            email: email,
            password: password
        }
    })
    
    return user;
}

export async function findAllUsers() {
    const users = await prisma.user.findMany();
    return users;
}
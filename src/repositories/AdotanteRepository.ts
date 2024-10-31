import { Adotante, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class AdotanteRepository {
    public async create(email: string, nome: string, endereco: string, telefone: string): Promise<Adotante> {
        const adotante = await prisma.adotante.create({
            data: {
                email,
                nome,
                endereco,
                telefone
            }
        })
        return adotante;
    }
    public async getAll(): Promise<Adotante[]> {
        const adotantes = await prisma.adotante.findMany();
        return adotantes;
    }
    public async getById(id: string): Promise<Adotante | null> {
        const adotante = await prisma.adotante.findUnique({
            where: {
                id
            }
        });
        return adotante;
    }
    public async update(id: string, email: string, nome: string, endereco: string, telefone: string): Promise<Adotante | null> {
        const updatedAdotante = await prisma.adotante.update({
            where: {
                id
            },
            data: {
                email,
                nome,
                endereco,
                telefone
            }
        })
        return updatedAdotante;
    }
    public async delete(id: string): Promise<Adotante> {
        const deletedAdotante = await prisma.adotante.delete({
            where: {
                id
            }
        })
        return deletedAdotante; 
    }
}
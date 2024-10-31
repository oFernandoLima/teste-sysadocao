import { Adocao, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class AdocaoRepository {
    public async create(adotanteId: string, petId: string): Promise<Adocao> {
        const adocao = await prisma.adocao.create({
            data: {
                adotanteId,
                petId,
                data: new Date(),
            }
        })
        return adocao;
    }
    public async getAll(): Promise<Adocao[]> {
        const adocaos = await prisma.adocao.findMany();
        return adocaos;
    }
    public async getById(id: string): Promise<Adocao | null> {
        const adocao = await prisma.adocao.findUnique({
            where: {
                id
            }
        });
        return adocao;
    }
    public async delete(id: string): Promise<Adocao> {
        const deletedAdocao = await prisma.adocao.delete({
            where: {
                id
            }
        })
        return deletedAdocao; 
    }
}
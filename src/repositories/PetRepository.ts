import { Pet, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class PetRepository {
    public async create(nome: string, especie: string, dataNascimento: Date, descricao: string): Promise<Pet> {
        const pet = await prisma.pet.create({
            data: {
                nome,
                especie,
                dataNascimento,
                descricao,
                status: 'Disponível'
            }
        })
        return pet;
    }
    public async getAll(): Promise<Pet[]> {
        const pets = await prisma.pet.findMany();
        return pets;
    }
    public async getById(id: string): Promise<Pet | null> {
        const pet = await prisma.pet.findUnique({
            where: {
                id
            }
        });
        return pet;
    }
    public async update(id: string, nome: string, especie: string, dataNascimento: Date, descricao: string, status: string): Promise<Pet | null> {
        const updatedPet = await prisma.pet.update({
            where: {
                id
            },
            data: {
                nome,
                especie,
                dataNascimento,
                descricao,
                status
            }
        })
        return updatedPet;
    }
    public async delete(id: string): Promise<Pet> {
        const deletedPet = await prisma.pet.delete({
            where: {
                id
            }
        })
        return deletedPet; 
    }
}
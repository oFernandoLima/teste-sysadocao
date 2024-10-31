import { PetRepository } from "@/repositories/PetRepository";
import { Pet } from "@prisma/client";

export class PetService {
    private petRepository: PetRepository;

    constructor() {
        this.petRepository = new PetRepository();
    }

    public async create(nome: string, especie: string, dataNascimento: Date, descricao: string): Promise<Pet> {
        const createdPet = await this.petRepository.create(nome, especie, dataNascimento, descricao);
        return createdPet;
    }
    public async getAll(): Promise<Pet[]> {
        const pets = await this.petRepository.getAll();
        if(!pets) {
            throw new Error('Nenhum pet encontrado');
        }
        return pets;
    }
    public async getById(id: string): Promise<Pet> {
        const pet = await this.petRepository.getById(id);
        if(!pet) {
            throw new Error('Pet não encontrado');
        }
        return pet;
    }
    public async update(id: string, nome: string, especie: string, dataNascimento: Date, descricao: string, status: string): Promise<Pet> {
        const updatedPet = await this.petRepository.update(id, nome, especie, dataNascimento, descricao, status);
        if(!updatedPet) {
            throw new Error('Pet não encontrado');
        }
        return updatedPet;
    }
    public async delete(id: string): Promise<void> {
        const deletedPet = await this.petRepository.delete(id);
        if(!deletedPet) {
            throw new Error('Pet não encontrado');
        }
        return;
    }
}
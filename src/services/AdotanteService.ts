import { AdotanteRepository } from "@/repositories/AdotanteRepository";
import { Adotante } from "@prisma/client";

export class AdotanteService {
    private adotanteRepository: AdotanteRepository;

    constructor() {
        this.adotanteRepository = new AdotanteRepository();
    }

    public async create(email: string, nome: string, endereco: string, telefone: string): Promise<Adotante> {
        const createdAdotante = await this.adotanteRepository.create(email, nome, endereco, telefone);
        return createdAdotante;
    }
    public async getAll(): Promise<Adotante[]> {
        const adotantes = await this.adotanteRepository.getAll();
        if(!adotantes) {
            throw new Error('Nenhum adotante encontrado');
        }
        return adotantes;
    }
    public async getById(id: string): Promise<Adotante> {
        const adotante = await this.adotanteRepository.getById(id);
        if(!adotante) {
            throw new Error('Adotante não encontrado');
        }
        return adotante;
    }
    public async update(id: string, email: string, nome: string, endereco: string, telefone: string): Promise<Adotante> {
        const updatedAdotante = await this.adotanteRepository.update(id, email, nome, endereco, telefone);
        if(!updatedAdotante) {
            throw new Error('Adotante não encontrado');
        }
        return updatedAdotante;
    }
    public async delete(id: string): Promise<void> {
        const deletedAdotante = await this.adotanteRepository.delete(id);
        if(!deletedAdotante) {
            throw new Error('Adotante não encontrado');
        }
        return;
    }
}
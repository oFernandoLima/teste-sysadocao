import { AdocaoRepository } from "@/repositories/AdocaoRepository";
import { Adocao } from "@prisma/client";

export class AdocaoService {
    private adocaoRepository: AdocaoRepository;

    constructor() {
        this.adocaoRepository = new AdocaoRepository();
    }

    public async create(adotanteId: string, petId: string): Promise<Adocao> {
        const createdAdocao = await this.adocaoRepository.create(adotanteId, petId);
        return createdAdocao;
    }
    public async getAll(): Promise<Adocao[]> {
        const adocaos = await this.adocaoRepository.getAll();
        if(!adocaos) {
            throw new Error('Nenhum adocao encontrado');
        }
        return adocaos;
    }
    public async getById(id: string): Promise<Adocao> {
        const adocao = await this.adocaoRepository.getById(id);
        if(!adocao) {
            throw new Error('Adocao não encontrado');
        }
        return adocao;
    }
    public async delete(id: string): Promise<void> {
        const deletedAdocao = await this.adocaoRepository.delete(id);
        if(!deletedAdocao) {
            throw new Error('Adocao não encontrado');
        }
        return;
    }
}
import { AdocaoService } from "@/services/AdocaoService";
import { Request, Response } from "express";

export class AdocaoController {
    public async create(req: Request, res: Response): Promise<void> {
        const adocaoService = new AdocaoService();
        const { adotanteId, petId } = req.params;
        const createdAdocao = await adocaoService.create(adotanteId, petId);
        res.json(createdAdocao);
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        const adocaoService = new AdocaoService();
        const adocaos = await adocaoService.getAll();
        res.json(adocaos);
    }

    public async getById(req: Request, res: Response): Promise<void> {
        const adocaoService = new AdocaoService();
        const adocaoId = req.params.adocaoId;
        const adocao = await adocaoService.getById(adocaoId);
        res.json(adocao);
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const adocaoService = new AdocaoService();
        const adocaoId = req.params.adocaoId;
        const adocao = await adocaoService.delete(adocaoId);
        res.json(adocao);
    }
}
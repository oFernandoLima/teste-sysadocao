import { AdotanteService } from "@/services/AdotanteService";
import { Request, Response } from "express";

export class AdotanteController {
    public async create(req: Request, res: Response): Promise<void> {
        const adotanteService = new AdotanteService();
        const { email, nome, endereco, telefone } = req.body;
        const createdAdotante = await adotanteService.create(email, nome, endereco, telefone);
        res.json(createdAdotante);
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        const adotanteService = new AdotanteService();
        const adotantes = await adotanteService.getAll();
        res.json(adotantes);
    }

    public async getById(req: Request, res: Response): Promise<void> {
        const adotanteService = new AdotanteService();
        const adotanteId = req.params.adotanteId;
        const adotante = await adotanteService.getById(adotanteId);
        res.json(adotante);
    }

    public async update(req: Request, res: Response): Promise<void> {
        const adotanteService = new AdotanteService();
        const adotanteId = req.params.adotanteId;
        const { email, nome, endereco, telefone } = req.body;
        const updatedAdotante = await adotanteService.update(adotanteId, email, nome, endereco, telefone);
        res.json(updatedAdotante);
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const adotanteService = new AdotanteService();
        const adotanteId = req.params.adotanteId;
        const adotante = await adotanteService.delete(adotanteId);
        res.json(adotante);
    }
}
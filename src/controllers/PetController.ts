import { PetService } from "@/services/PetService";
import { Request, Response } from "express";

export class PetController {
    public async create(req: Request, res: Response): Promise<void> {
        const petService = new PetService();
        const { nome, especie, dataNascimento, descricao } = req.body;
        const createdPet = await petService.create(nome, especie, dataNascimento, descricao);
        res.json(createdPet);
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        const petService = new PetService();
        const pets = await petService.getAll();
        res.json(pets);
    }

    public async getById(req: Request, res: Response): Promise<void> {
        const petService = new PetService();
        const petId = req.params.petId;
        const pet = await petService.getById(petId);
        res.json(pet);
    }

    public async update(req: Request, res: Response): Promise<void> {
        const petService = new PetService();
        const petId = req.params.petId;
        const { nome, especie, dataNascimento, descricao, status } = req.body;
        const updatedPet = await petService.update(petId, nome, especie, dataNascimento, descricao, status);
        res.json(updatedPet);
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const petService = new PetService();
        const petId = req.params.petId;
        const pet = await petService.delete(petId);
        res.json(pet);
    }
}
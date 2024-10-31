import { Router } from "express";
import petRouter from "./pet.routes";
import adotanteRouter from "./adotante.routes";
import adocaoRouter from "./adocao.routes";

const router = Router();

router.use("/pets", petRouter);
router.use("/adotantes", adotanteRouter);
router.use("/adocoes", adocaoRouter);

export default router;

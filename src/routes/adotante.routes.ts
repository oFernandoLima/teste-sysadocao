import { Router } from 'express';
import { AdotanteController } from '../controllers/AdotanteController';

const router = Router();
const adotanteController = new AdotanteController();

router.post('/', adotanteController.create);
router.get('/', adotanteController.getAll);
router.get('/:adotanteId', adotanteController.getById);
router.put("/", adotanteController.update);
router.delete('/', adotanteController.delete);

export default router;

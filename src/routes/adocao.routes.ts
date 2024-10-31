import { Router } from 'express';
import { AdocaoController } from '../controllers/AdocaoController';

const router = Router();
const adocaoController = new AdocaoController();

router.post('/', adocaoController.create);
router.get('/', adocaoController.getAll);
router.get('/:adocaoId', adocaoController.getById);
router.delete('/', adocaoController.delete);

export default router;

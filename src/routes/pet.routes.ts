import { Router } from 'express';
import { PetController } from '../controllers/PetController';

const router = Router();
const petController = new PetController();

router.post('/', petController.create);
router.get('/', petController.getAll);
router.get('/:petId/', petController.getById);
router.put("/", petController.update);
router.delete('/', petController.delete);

export default router;

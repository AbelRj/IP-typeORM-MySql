import { Router } from "express";
import ProductController from "../controller/ProductController";

const router=Router();
router.post('/',ProductController.new);
router.get('/',ProductController.getAll);
router.get('/:id',ProductController.getById);
export default router;


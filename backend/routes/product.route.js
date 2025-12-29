import { Router } from "express";
import { getProducts, getProduct, createProduct } from "../controllers/product.controller.js";

const router = Router();

router.get("/", getProducts);
router.get('/:productId', getProduct)
router.post('/', createProduct)


export default router;

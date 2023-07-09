import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJWT } from "../middleware/session";
/**
 * Solo accede la persona que tiene sesión activa
 * o sea con jwt válido
 */
const router = Router();

router.get('/', checkJWT, getItems)

export {router};
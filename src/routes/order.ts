import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";


/**
 * Esta ruta solo pueden acceder las personas que tienen session activa!
 * que tengan un JWT valido!
 */
const router = Router()

router.get('/', checkJwt, getItems)

export { router }
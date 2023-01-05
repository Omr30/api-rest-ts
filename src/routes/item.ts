import { Router, Request, Response } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";


const router = Router()
/**
 * http://localhost:8080/items [GET]
 */
router.get('/', getItems)
router.get('/:id', getItem)
router.post('/', postItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)


export { router }
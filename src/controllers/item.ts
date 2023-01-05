import { Request, Response } from "express"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item"
import { handleHttp } from "../utils/error.handle"


const getItem = async ({params}: Request, res: Response) => {
    try {
        const {id} = params
        const responseCar = await getCar(id)
        const data = responseCar ? responseCar: "NOT_FOUND"
        res.json(data)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const responseCars = await getCars()
        res.json(responseCars)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

const postItem = async ({body}: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body)
        res.json(responseItem)
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM', error)
    }
}

const deleteItem = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const responseCarRemove = await deleteCar(id)
        res.json(responseCarRemove)
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
}

const updateItem = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params
        const responseCarUpdate = await updateCar(id, body)
        res.json(responseCarUpdate)
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
}

export {
    getItem,
    getItems,
    postItem,
    deleteItem,
    updateItem
}
import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item"


const insertCar = async(item: Car) => {
    const responseInsert = await ItemModel.create(item)
    return responseInsert
}

const getCars = async() => {
    const responseCars = await ItemModel.find({})
    return responseCars
}

const getCar = async(id: String) => {
    const responseCar = await ItemModel.findById(id)
    return responseCar
}

const updateCar = async(id: String, data: Car) => {
    const responseCarUpdate = await ItemModel.findByIdAndUpdate(id, data, {
        new: true
    })
    return responseCarUpdate
}

const deleteCar = async(id: String) => {
    const responseCars = await ItemModel.findByIdAndRemove(id)
    return responseCars
}

export {
    insertCar,
    getCars,
    getCar,
    updateCar,
    deleteCar
}
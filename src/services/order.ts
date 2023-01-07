import ItemModel from "../models/item"

const getOrders = async() => {
    const responseCars = await ItemModel.find({})
    return responseCars
}

export {
    getOrders
}